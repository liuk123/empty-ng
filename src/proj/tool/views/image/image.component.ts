import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PaletteService } from '../../service/palette.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.less']
})
export class ImageComponent {

  colors=null
  url=null

  constructor(
    public ds: DomSanitizer,
    private paletteSrv:PaletteService
  ) { }

  fileChange(ev) {
    const file = ev.target.files[0]
    this.url = window.URL.createObjectURL(file)
  }
  async palette(url:string){
    console.time()
    let d = await this.paletteSrv.getImageData(url)
    this.colors = this.paletteSrv.deal(d.data)
    console.timeEnd()
  }
}
