import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpUtilService } from 'src/app/biz/services/common/http-util.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less']
})
export class UploadComponent implements OnInit {

  @Input() url: string
  @Input() accept: string = null
  fileList: File[] = []
  @Input()
  files: {name?:string, url?:string, safeUrl: any}[] = []
  @Output()
  filesChange = new EventEmitter()

  uploadProgress: number = null
  isShowProgress = false
  loading = false

  constructor(
    private httpSrv: HttpUtilService,
    public ds: DomSanitizer
  ) { }

  ngOnInit(): void {
  }
  fileChange(ev){
    const fileList = ev.target.files
    for(let i=0,len=fileList.length; i<len; i++){
      const file = fileList[i]
      if(!this.files.some(item=> item.name == file.name)){
        const url = window.URL.createObjectURL(file)
        this.files.push({
          safeUrl: this.ds.bypassSecurityTrustUrl(url),
          name: file.name
        })
        this.fileList.push(file)
      }
    }
  }
  onSubmit(){
    if(this.fileList && this.fileList.length > 0){
      const params = {
        files: this.fileList,
      }
      this.uploadProgress = 0
      this.isShowProgress = true
      this.loading = true
      this.httpSrv.upload(this.url, params).subscribe(res => {
        if(res.type == HttpEventType.UploadProgress){
          this.uploadProgress = Math.round(100 * res.loaded / res.total)
        }else if(res.constructor == HttpResponse){
          setTimeout(()=>this.isShowProgress = false, 3000)
          this.loading = false
          if(res.body.resultCode==1){
            this.fileList = [];
            let data = res.body.data
            data.forEach(item => {
              let tem = this.files.find(v=>v.name == item.name)
              tem.url = item.url
            })
          }
        }
      })
    }
  }
}
