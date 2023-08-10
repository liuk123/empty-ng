import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-upload',
  templateUrl: './simple-upload.component.html',
  styleUrls: ['./simple-upload.component.less']
})
export class SimpleUploadComponent {
  
  @Input() accept: string = null
  @Input() files: File[] = []
  @Output() filesChange = new EventEmitter()

  loading = false

  fileChange(ev){
    const fileList = ev.target.files
    for(let i=0,len=fileList.length; i<len; i++){
      const file = fileList[i]
      if(!this.files.some(item=> item.name == file.name)){
        this.files.push(file)
      }
    }
  }

}
