import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PaletteService } from '../../service/palette.service';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.less']
})
export class PaletteComponent {

  palettes=null
  url=null

  constructor(
    public ds: DomSanitizer,
    private paletteSrv:PaletteService
  ) { }

  async fileChange(ev) {
    const file = ev.target.files[0]
    this.url = window.URL.createObjectURL(file)
    console.time()
    let d = await this.paletteSrv.getImageData(this.url)
    this.palettes = this.paletteSrv.deal(d.data)
    console.timeEnd()
  }
}
