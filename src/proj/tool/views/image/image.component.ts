import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PaletteService } from '../../service/palette.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.less'],
})
export class ImageComponent {
  @ViewChild('image', {read: ElementRef}) imgRef: ElementRef

  colors=null
  colorNum=5
  url=null

  naturalWidth=null
  naturalHeight=null
  oSize=null
  oFileType=null

  blobUrl=null
  width=null
  height=null
  quality=0.7
  size=null
  fileName=null
  fileType=null

  imageType=['image/jpeg', 'image/png', "image/gif"]
  constructor(
    public ds: DomSanitizer,
    private paletteSrv:PaletteService
  ) { }

  fileChange(ev) {
    const file = ev.target.files[0]
    this.url = window.URL.createObjectURL(file)
    setTimeout(()=>{
      this.naturalWidth = this.imgRef.nativeElement.naturalWidth
      this.naturalHeight = this.imgRef.nativeElement.naturalHeight
      this.width = this.naturalWidth
      this.height=this.naturalHeight
      this.oSize = this.formatSize(file.size)
      this.oFileType = file.type
      this.fileName = file.name
      if(this.imageType.includes(this.oFileType)){
        this.fileType = this.oFileType
      }
    },300)
   
  }
  async palette(url:string){
    console.time()
    let d = await this.paletteSrv.getImageData(url)
    this.colors = this.paletteSrv.deal(d.data, this.colorNum)
    console.timeEnd()
  }
  formatSize(size:number,len=2) {
    let units=['B', 'K', 'M', 'G', 'TB']
    let unit = null
    for(let i=0;i<units.length;i++){
      if(size<1024){
        unit = units[i]
        break
      }
      size=size/1024
    }
    return size.toFixed(len) + unit
  }
  async compressImage(w:number, h:number, quality:number){
    let b = await this.canvasToBlob(w,h,quality)
    this.blobUrl = window.URL.createObjectURL(b)
    this.size = this.formatSize(b.size)
  }
  private canvasToBlob(w:number, h:number, quality:number): Promise<Blob>{
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')
      canvas.width = w
      canvas.height = h
      context.drawImage(this.imgRef.nativeElement, 0, 0, w, h)
      canvas.toBlob((b)=>{
        resolve(b)
      },this.fileType??this.oFileType, quality)
    })
  }
  download(){
    var a = document.createElement('a')
    a.href = this.blobUrl
    a.download = this.fileName.slice(0,this.fileName.indexOf('.')+1) + this.fileType.slice(this.fileType.indexOf('/')+1)
    a.click()
    a.remove()
  }
}
