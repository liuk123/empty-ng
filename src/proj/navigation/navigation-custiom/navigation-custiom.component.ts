import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormGroupComponent } from 'src/app/shared/components/form-group/form-group.component';
import { JsUtilService } from 'src/app/shared/utils/js-util';
import { UtilService } from 'src/app/shared/utils/util';
import { Navigation } from '../model/navigation';
import { HtmlParserService } from '../service/htmlparser.service';
import { NavigationService } from '../service/navigation.service';

@Component({
  selector: 'app-navigation-custiom',
  templateUrl: './navigation-custiom.component.html',
  styleUrls: ['./navigation-custiom.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationCustiomComponent implements OnInit {

  customNavs
  customData
  selectData: Navigation[][] = []
  selectTitle: string = null
  constructor(
    private jsutil: JsUtilService,
    private util: UtilService,
    private srv: NavigationService,
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef,
    private cf: ChangeDetectorRef,
    private parser: HtmlParserService
  ) { }

  ngOnInit(): void {
    // this.selectData = this.util.columnsArr(this.customData, 3, 1)
    this.getNavCategory()
  }
  /**
   * 打开新窗口
   * @param item 
   */
  open(item: Navigation) {
    if (item.type === 'link') {
      window.open(item.link, '_blank')
    } else {

    }
  }
  selectNav(id) {
    let tem = this.jsutil.findItem(this.customNavs, (data) => data.id == id)
    if (tem) {
      this.selectTitle = tem.title
      this.srv.getNavItem({ pid: id }).subscribe(res => {
        if (res.isSuccess()) {
          let arr
          if (tem.children) {
            arr = [
              ...res.data.map(v => ({ ...v, type: 'link' })),
              ...tem.children.map(v => ({ ...v, type: 'sub' }))
            ]
          } else {
            arr = res.data
          }
          this.selectData = this.util.columnsArr(arr, 3, 1)
          this.cf.markForCheck()
        }
      })

    }
  }


  /**
   * 导航分类添加编辑
   * @param title 
   * @param data 
   */
  showNavCategoryDialog(title, data = {}) {
    let params = [
      {
        key: 'id',
        label: 'id',
        value: data['id'] || null,
        valide: [],
        controlType: 'textbox',
        type: 'hidden',
      }, {
        key: 'title',
        label: '名称',
        value: data['title'] || null,
        valide: [],
        controlType: 'textbox',
        type: 'text',
      }, {
        key: 'sort',
        label: '排序',
        value: data['sort'] || null,
        valide: [],
        controlType: 'textbox',
        type: 'text',
      }, {
        key: 'pid',
        label: '父级',
        value: data['pid'] ? data['pid'].map(v => v.id) : null,
        valide: [],
        controlType: 'dropdown',
        type: 'default',
        options: this.customData.map(v => ({ name: v.title, code: v.id }))
      }
    ]
    this.modal.create({
      nzTitle: title,
      nzContent: FormGroupComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        params: params,
        span: 1,
      },
      nzOnOk: (component: any) => {
        this.srv.saveNavCategory([component.validateForm.value]).subscribe(v => {

        })
      }
    })
  }
  /**
   * 导航添加编辑
   * @param title 
   * @param data 
   */
  showNavItemDialog(title, data = {}) {
    this.modal.create({
      nzTitle: title,
      nzContent: FormGroupComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        params: [
          {
            key: 'id',
            label: 'id',
            value: data['id'] || null,
            valide: [],
            controlType: 'textbox',
            type: 'hidden',
          }, {
            key: 'title',
            label: '名称',
            value: data['title'] || null,
            valide: [],
            controlType: 'textbox',
            type: 'text',
          }, {
            key: 'link',
            label: '地址',
            value: data['link'] || null,
            valide: [],
            controlType: 'textbox',
            type: 'text',
          }, {
            key: 'sort',
            label: '排序',
            value: data['sort'] || null,
            valide: [],
            controlType: 'textbox',
            type: 'text',
          }, {
            key: 'navCategoryId',
            label: '分类',
            value: data['navCategoryId'] ? data['navCategoryId'].map(v => v.id) : null,
            valide: [],
            controlType: 'dropdown',
            type: 'default',
            options: this.customData.map(v => ({ name: v.title, code: v.id }))
          }
        ],
        span: 1,
      },
      nzOnOk: (component: any) => {
        this.srv.saveNavItem([component.validateForm.value]).subscribe(v => {

        })
      }
    })

  }
  getNavCategory() {
    this.srv.getNavCategory().subscribe(v => {
      if (v.isSuccess()) {
        this.customNavs = this.util.setTree(v.data)
        this.customData = v.data
        this.cf.markForCheck()
      }
    })
  }
  addNavHtml(str = null) {
    // let tem = this.parser.htmlParser(data1.replace(/([\n\r\t]+)/g, ''))
    let data = data1
    let a = this.setItem(data, null)
    console.log(a)
  }
  setItem(item, nextItem) {
    if (this.jsutil.isArray(item)) {
      let arr:any=[]
      for (let i = 0; i < item.length; i++) {
        let a
        if(item[i].tagName == 'h3' && item[i+1].tagName=='dl'){
          a = this.setItem(item[i], item[i+1])
          i++
          
        }else{
          a = this.setItem(item[i],null)
        }
        if(this.jsutil.isArray(a)){
          arr.push(...a)
        }else if(this.jsutil.isObject(a)){
          arr.push(a)
        }
      }
      if(arr.length>0){
        return arr
      }
    } else if (this.jsutil.isObject(item)) {
      let arr: any
      if (nextItem&&nextItem.children && nextItem.children.length > 0) {
        arr = this.setItem(nextItem.children,null)
      }else if(item.children && item.children.length > 0){
        arr = this.setItem(item.children,null)
      }
      if(item.tagName=='h3'){
        let tem = {
          title: item.text,
          type: 'sub',
          children: [...arr]
        }
        return tem
      }
      if(item.tagName=='a'){
        let link = item.attributes.find(v=>v.name == 'HREF')||{}
        let tem = {
          type: 'link',
          link: link.value,
          title: item.text
        }
        return tem
      }
      if(arr && arr.length>0){
        return arr
      }
    }
    
  }
}
let data1 = [{
  "tagName": "h3",
  "attributes": [
    {
      "name": "ADD_DATE",
      "value": "1638861204"
    },
    {
      "name": "LAST_MODIFIED",
      "value": "1639535976"
    },
    {
      "name": "PERSONAL_TOOLBAR_FOLDER",
      "value": "true"
    }
  ],
  "text": "书签栏",
  "children": []
},
{
  "tagName": "dl",
  "attributes": [],
  "text": "",
  "children": [
    {
      "tagName": "p",
      "attributes": [],
      "text": "        ",
      "children": []
    },
    {
      "tagName": "dt",
      "attributes": [],
      "text": "        ",
      "children": [
        {
          "tagName": "h3",
          "attributes": [
            {
              "name": "ADD_DATE",
              "value": "1639009256"
            },
            {
              "name": "LAST_MODIFIED",
              "value": "1639101661"
            }
          ],
          "text": "ng",
          "children": []
        },
        {
          "tagName": "dl",
          "attributes": [],
          "text": "",
          "children": [
            {
              "tagName": "p",
              "attributes": [],
              "text": "            ",
              "children": []
            },
            {
              "tagName": "dt",
              "attributes": [],
              "text": "            ",
              "children": [
                {
                  "tagName": "a",
                  "attributes": [
                    {
                      "name": "HREF",
                      "value": "http://ng.ant.design/components/overview/zh"
                    },
                    {
                      "name": "ADD_DATE",
                      "value": "1638867190"
                    },
                    {
                      "name": "ICON",
                      "value": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACyElEQVQ4jXWTTWhUdxTFf/fN/00S01EbpiFOK7aILtJFd4KbmghtugkpLVERLRWhiVAKSjcNos8WUbvwgxRdtGhVCNqAK1cKZlriolDUFtQuAl1UJTVmMpmPl/f5v13MqFOLZ33Ovefee67QClVBRAH0y52dieb3ojY2sT0p4+PhixwAp6kUPHUQUQUJd3z2oZaW3zR1vjG+HE1r6XS8Y+QDhYbYUwdUAKTVwLJrWiid2NbR5rbPIA5hkow7gusad5Q4IhBZkz9wIapvkNmnGgFYPa0FN2aMLKPuYjT251cDj2orCw9zP09MAdQ2b32/c/6f7t7x6wW70hy2ASerAd/OvitzALw1refX31FdW9SZnuvax0vwxpT2rf1FZ9bdUX3zhp5+voOUFckCab3C0Ox7Urw77GUB4tHPjyd7vvge4G6vl33QL8XqX3wUPiSNq7wKYADEYjXBCVLqqioiEoWD24dMJdmLawi37r7WdtmbVM9zVjj4mUUcm2CfO7CgFunyQ1dE9FHfYN4N9HQ8t/BD/Lh8zvjJmb8HdneJ59lXypi4gqS1ljPatFEkAhSkq+KflVqtYBbKeTv/+LZUq5nXgvkfAcJyJHYJ0qA1BwpYtOa0xUVvKiNh4MflJ7c0Dt/JhMmyuFTaI0EYMqyZGtlIE9RGjQIGwFocIG1LyfV7/Qmw7afe4ey93ycTrzGggFziV8G8rTkbYzVqNG+MkFBxOjHZdq70XNJPALbcm4w8T2mkrhHdzv26KxNxBSFjIxafOfAXGeuI8AVG3OWcf33CfpqG8vXsLikCtO/TfpPhoDhssgFoiVP1iCP/i3L3hG40cNDpYEADSJc4U7+Po8oIBnSJq5pyyP9OfnshY81namLVRf2454L+Ubis2nNRNX9Kb+UO6dAzegv3Pw7w1METC8AxzXV3sU+VdG4VxxkUv/mBAk0O8C/gqGPQpf9XXQAAAABJRU5ErkJggg=="
                    }
                  ],
                  "text": "NG-ZORRO",
                  "children": []
                }
              ]
            },
            {
              "tagName": "dt",
              "attributes": [],
              "text": "        ",
              "children": [
                {
                  "tagName": "a",
                  "attributes": [
                    {
                      "name": "HREF",
                      "value": "https://rxjs-cn.github.io/learn-rxjs-operators/operators/transformation/mergemap.html"
                    },
                    {
                      "name": "ADD_DATE",
                      "value": "1639033203"
                    },
                    {
                      "name": "ICON",
                      "value": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC1UlEQVQ4jXVSv0t0VxA9c+fu+7FvRVxU0IRECEIIErFbwQ+3EEQkiyDbWFoI4n8QSBCClnY2FsFmZUEFUwlW+TClWAQWiwUJIcgaV1DX9za+d++dFN9qSOGBYZhhfh4OLSwsfMXM/4Rh+Aige3h4aPEfuOffcpubm6rRaOSfnp76RCSgSqXSERFnrU2I6E/P835XSv1mrf3l5OTkAQAWFxcHwjD8LsuyGWPMtyLyBTNHAIgqlYoQEYIggLUWSZIgTVP4vv8XEf3onPOI6Ic0TT/zfR9BEEBrjSRJAADaGCN9fX2yu7sL55y0Wi25vLyk8/Pzz+/u7n5WSqFYLKJUKtmJiQk3NjamoihyGxsb6cPDQ14DIBGhgYEBxHEsrVYLKysrWFpasqurq845x1tbWzI6OsqvnFj7iRIiIiUiICLpdrtSq9Xo+flZ9vf3USgUoLUWIqLh4WFqNpuyvb0tp6encM6htxiKiCAipJSiKIpwe3tLURSRtZZE5M3Ozs5oZmYGV1dXuL+/Ry6Xw9sA5xyCIMD09DTq9TpKpRI8z0PvOhhjMDc3h4ODA4yMjGBoaAhZloGI8PoCnHNgZgwODr7FrwjDkPr7+3F9fY2pqSkws3LOgYig3xTDnzRjjPlfMxHJ0dGR1Ot1NTk5ifHxcRhjLDOLiEADEBFBt9uFcw5KKQnDkJRSiplNkiRUq9UwPz+PtbU1ISJ0Oh2ICACI1lpTmqZYX19HPp931lpzcXHBs7OzEBF4nic7Ozvu8fERe3t7rtlscrvd1nEc61wuB6pUKk89QXlExL7vI01TFItFdDqdTESoWCxyq9UiYwyYGURkmDkFYLS19sssywqFQmFIRMbSNP2GmT+02+1Z3/d9IsLNzU3med6vYRh+tNY2APwRx/HfIhIT3sHy8vLXLy8v3xOR53neT8fHx433aqlnqlqtcrlc1u8VlstlXa1WGYB67fsXNjxy8R1L2VcAAAAASUVORK5CYII="
                    }
                  ],
                  "text": "mergeMap · 学习 RxJS 操作符",
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "tagName": "p",
          "attributes": [],
          "text": "        ",
          "children": []
        }
      ]
    },
    {
      "tagName": "dt",
      "attributes": [],
      "text": "        ",
      "children": [
        {
          "tagName": "h3",
          "attributes": [
            {
              "name": "ADD_DATE",
              "value": "1639009023"
            },
            {
              "name": "LAST_MODIFIED",
              "value": "1639009026"
            }
          ],
          "text": "inspur",
          "children": []
        },
        {
          "tagName": "dl",
          "attributes": [],
          "text": "",
          "children": [
            {
              "tagName": "p",
              "attributes": [],
              "text": "            ",
              "children": []
            },
            {
              "tagName": "dt",
              "attributes": [],
              "text": "        ",
              "children": [
                {
                  "tagName": "a",
                  "attributes": [
                    {
                      "name": "HREF",
                      "value": "http://172.30.27.111:8000/cwbase/web/gsprtf/main.aspx"
                    },
                    {
                      "name": "ADD_DATE",
                      "value": "1639009009"
                    },
                    {
                      "name": "ICON",
                      "value": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC8ElEQVQ4jU3TS2hcdRTH8e85///cO9OkmVqk0QZMoSmKTattrQtpIojFpVgFXYiLiIZGUERBwY0LRcSKIrgVRKuitguLFqymKASMio9Ua+kjOjEmwbzIc2buvf//cTHVejZndQ6/A58jAAyd7qGcPk2Rb0FEALAgoBEhAU0ggiitsogrexorxzyPnrqOSnKcUmUXGKgCAtiVbga41qwIhAClBJpxwuPzPtBd0ljMVJzGwjAz4X/lVAhGa5GoEaNRNBTAk+cp5RgtiAv1puAUHPpfAKeEtbwVwLsIUYBIMIcqHuegiFItO564q5v+HZukPXUmwMxqzuC757i3r4sH9nVSciIhQjlReWNkjrdPnhXvsihJavLRwzvjDZ1t+tkv80wsNqSSKrW5OoN9W3msv4ujozPMrBcmAu0lx8XZOnhnPszV7bY927jz+qvk5he/ZezsAlQcNApoBt5/Zj8X/l7nyaO/gXegAus5bNwI7V48jabsvKaNn6fWGPt9mcN3b2eofyvjsw2eP3GJVz6v8eHgbsaP9LOeRcqJozZX5/DxGufHV/HgyEKkLXGkqWO0tkz2ZeDB/Z28M9DLTS98w4Ej33NrdweoEhqBl+7r4dmD2xh4bQrPptRGxpd48/7t3LNvCx+cnuSH0SlGLyxy4vE9VDd4ZqbX+OSvVVAHKxkHezfTfe1mcGKeapkzk+v2+vCkvfXQjfJIXxdrzWBd1USyYBza28mh3Ve3AAGJc3Z7TwdDxyZoOQBIHU99fF4+PTNv/Tuq5CGqitr4Qp3JpYzv/lgmC6Ai5hR59VQtnrxUNzpKeAwBMxJnw+fmZXhsVhDsMkFQ4aufZluoWoQgUWhvN4LiifmfiCgiaMUXUkFMBAH5V69u8NhlmgJmIUj0qdJsTDt+vDjBLXdU8eleg5KJUzNVQ8Rah4uZiJlgKGZmVqoI9ZUR5heeu/I0A+8dII+9OFXyIkcKI2qG5JHCCmI0nGUAlNoKpn/9mi9eXvoHm7NL0a4h7AQAAAAASUVORK5CYII="
                    }
                  ],
                  "text": "GS管理软件",
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "tagName": "p",
          "attributes": [],
          "text": "        ",
          "children": []
        }
      ]
    },
    {
      "tagName": "dt",
      "attributes": [],
      "text": "        ",
      "children": [
        {
          "tagName": "h3",
          "attributes": [
            {
              "name": "ADD_DATE",
              "value": "1639101673"
            },
            {
              "name": "LAST_MODIFIED",
              "value": "1639101677"
            }
          ],
          "text": "js",
          "children": []
        },
        {
          "tagName": "dl",
          "attributes": [],
          "text": "",
          "children": [
            {
              "tagName": "p",
              "attributes": [],
              "text": "            ",
              "children": []
            },
            {
              "tagName": "dt",
              "attributes": [],
              "text": "        ",
              "children": [
                {
                  "tagName": "a",
                  "attributes": [
                    {
                      "name": "HREF",
                      "value": "https://www.jb51.net/article/228564.htm"
                    },
                    {
                      "name": "ADD_DATE",
                      "value": "1638870148"
                    },
                    {
                      "name": "ICON",
                      "value": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACdUlEQVQ4jT3QPW+TVxQH8P8599z72I5jWy3hRVkiFDogIYK6dEAVK6hdqs5FDFTqi5ig36EDW0c+AntfEQsSElKKSMRLahoIKZAQ4toxjx9fP/eew1CpX+A3/Eg1mREzAAYUUEBgUIABEDLgkGCSKDtjIQDMo93NyegtU7BANkrT4b+e2ERTSr7Rmet224tLvjX3H8ZQfXbv5837f0gorNXJGwfDtYeuGcwM5hguOe0tLJ74/LNTX3wlhkyOY06xeseWQKGuJlqWMddOnRFcEVzwB6+37lz/sdzdIzOD5f76nb3nT4J4H+bjflW+2uZQGBiWB2v3h882nCtSmhl7mql5AJQAURjDDEzA/wFVKn/57utx/zE8x+REYEY0HQ9SVTFLZuVacpwCak6Q8us/78Y32yastTUPfyiAkvLG7Zv91d9Cw3O7q/1q8OARCucMiVRjEl8w+zq40xcvC8BgM+HCO5NCXDPaJE0nhGAAoIU0snd1neePHj6+8rFADY4ZqA2eTPOkc2pF5z4QJuJWTONJ/ykfDOAlvtj6/do3QszZNGtNRDqrpeh8eukH5wGA1EA0Lge3rn6//9d60ei9/fuF1HFcHbwZvHzqBEwuOxervVAXOWfnkWOKm88Rp3DCMAmZfv3p2zgd0bQm3wAm2jzSrnr762scGObTrH639w8lUBBOqYwzGe1suXYwbkiajWN58pNz1b2N3QerjU7PKWViH5BqyrMq+ubpy1cERdd4jhxMaOnE2ZWzX65u36Bji2j3MmVTNu9bC0cOLS8vn7+w9NEZ2tl55dlMIa12d75jQBwPh6OSGcbGMMfSWzhGpGSslN8DE4VZvdPmIgsAAAAASUVORK5CYII="
                    }
                  ],
                  "text": "js 实现拖拽排序详情_vue.js_脚本之家",
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "tagName": "p",
          "attributes": [],
          "text": "        ",
          "children": []
        }
      ]
    },
    {
      "tagName": "dt",
      "attributes": [],
      "text": "        ",
      "children": [
        {
          "tagName": "a",
          "attributes": [
            {
              "name": "HREF",
              "value": "https://element.eleme.cn/#/zh-CN/component/installation"
            },
            {
              "name": "ADD_DATE",
              "value": "1639274724"
            },
            {
              "name": "ICON",
              "value": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAClklEQVQ4jX2TTYiVZRiGr+c7Zzwz4xn7o5/RJKFoEQRNP7RwRiSyRQylCM7CFKlNixbBUC3ciBEjQ9gpCkyYoDLczGJMnWlKxKFpE/2M0SJE0HTUStPKms6Z833v1eKYmWEXPJsXnpsH3vuCyxhsMRMyAGpu7Nvj931jHqfmRgAhY4sZGPyL1mLrcasPL3vfiW2Hdd7WDB3WO3Y5zpAPXQqKVtCVvOjijhHffPqQzVO5mnJrMxa1GQvNnc31mSnnF474Gs+5+PLVANUR1z426ez0edXCgydt9o6aFu1oTe+o6dNTNrVw8id9dMLZrhHXAAQrra4a5Ls9/Sz5+XfmX/qMtokTsCCDatnIAi7m4Q9/wGAPvNrbiDkqrN7HiU82c0+ZEpXuim0d4MBElGfOGd0LwyRRGPzWhFIQL9yPgz3GXF5JnSXjtgrtdEclo51UEOZGANzQjkmCwEYh994kH/bj8HLi8x9xYBwaRkhIGTM6CSQiIELyorXcLIhqW7C3P1i2iFj3ET6xl7jzeqlkUEhwHZS5BkmotsFb38DwV3BrJ0ythRVLUpYs/f3pZMwhgQrJoFxCJCplPFvHoS/l+R78dj1x38247YtSagglkF8ho06WYZRJlAIu/ElkWSskJA6sDjY/SOw+gne9S3xwBDoiERjkREZB40w98ouRMfq4+cDdkX6pw4UGdlcRpH8frp+ER5aGB9aYz0XGmXrUOUcdgK53fHLlfo9+fFY1OX3a5opR0407TV07TD27TdOnW0WaOq+rrijSPzzrLQvednjDQevH51VzX5+xeONSlU82ddMh5ys73f6fKl8l0wO3v+f+l7/WRmrJ9MqMLt3lOFv/T6ardd7uur4xjy0f8xg1n7qWzn8B+yieXRI8OTwAAAAASUVORK5CYII="
            }
          ],
          "text": "Element",
          "children": []
        }
      ]
    },
    {
      "tagName": "dt",
      "attributes": [],
      "text": "        ",
      "children": [
        {
          "tagName": "a",
          "attributes": [
            {
              "name": "HREF",
              "value": "https://fanyi.baidu.com/translate"
            },
            {
              "name": "ADD_DATE",
              "value": "1639535027"
            },
            {
              "name": "ICON",
              "value": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACyElEQVQ4jU2SS2hdZRSFv7XPOffePJoYG8WSjBq1SqvViqDoJCBVBwWhKo6kDoITUVBwKjgQnCjiQDEjgyKCM0VECq0YldQipcUigrVqYkN85nkf5/7/cnBb6Z6vtfbe69MLH3dvObGS55c3fF9KJgJsBAbE1RPC2RAhpsf01exUzOnQ2+0vL2y37i96O9lCKVlFQGggtk32wKqTIEJuBa4bwzEz0lnU9a9uO2VnkKoCjTTk7a7Vy6ZOMFSJoQrqZA7uKbzRsc6u2s3SDinKZFyEYr2TeXR/5feONnX43TajDfHUoYqf/8nUCcZaYu6uUmdW7QcX2upnZHBIA3cTPrua9PLJHqtb5uSFzLfLiekx8dZSn5mJYGXDPPNJR9lyaHCWrnlly5PDYnJYtGuztmN6fagzbGyad442eeL2kirgyPsdjv+YaDTFrgZIQuVLm3767opjd5QUATMT4t75Dn+3zWMHSp48WLLeNTftDkYqOL+W+eJi5o2lGhtivCU++j5xeKHD85/1ADHWgkduLSkDnv20hw2vf13z5lKNJX74K9PtgwQhiZRNuzbdZIzZ6sGplQTAQzcWPDBT8viBgkYhPjzX54NzfZol2KK0TUhc6V5ANvzyr7m0aX7fMCnD0m+ZhTN9dg+LPaNBuzYRppSEL5Nmm3QZmiP7CvZNBs0SQua2G4Jjd5bsvy44cTExf7rPUIgSsBh0WoQ00RIh+O5S5td1Y8Nz91ScWs689k3NroaoLbcqlMHllfSqQKtb+MXPa2124Y8dc34tMzUmQmKzZ/7cNOySU84KDUD4H2WFlJK10ZPHmlYl0c9mvCUevrng+E+JtR1cabCtbRehiOnxWEyNkXC2i0KeHEKFRLKJEOtdM3+6z9q2Ka8Sp8ZITI/HYsxOxdze0e5iUYScIXnwU0lcaejaIVGGGIihKEJ7RzqLs1Mx9x8pzHQf8XbkHAAAAABJRU5ErkJggg=="
            }
          ],
          "text": "百度翻译",
          "children": []
        }
      ]
    },
    {
      "tagName": "dt",
      "attributes": [],
      "text": "    ",
      "children": [
        {
          "tagName": "a",
          "attributes": [
            {
              "name": "HREF",
              "value": "https://www.zhihu.com/"
            },
            {
              "name": "ADD_DATE",
              "value": "1639535976"
            },
            {
              "name": "ICON",
              "value": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACcklEQVQ4jT3TTahVdRQF8N8+59yr5numZlmgQVQUUaOkkUKDoonRQIIgCMLyQYOa5CxMigZBDjIsIiyKjIqmFk0alDxq0CTpSUEiWYZUfqX3Xt85578bnFeDDXuyF2utvVbYn2PFS8aeFtbXI/oKFWqhQb0ylTQSav8Ib/vZC42pV8x5XidV9DNcI2MkhMxOBJCIaGVJ8+btdbsS9uZljTUqqVbvukd+cZLJFGNpLMT/jGikBqtQudzora1CKRPVw9vkwYfY+TFlAxrxyyW2rmf1eJDQhzhzlb+uSo35RqcgdPLRu0RTc/Qxevx6niMn2L+ds1OudOLODeL14/LFYzTrqKITZcrNm8WOW9j1AUtnefUbHjzEyXP8ORXbj7DjXb48JTeOhVZET5UdCssz7jvAsUVKEWcuMPmDi5PBwOmM9gpXe5kpdWQnGzkATGbs3sEN93PbJrmwTdy7SV7AtGWULKesioiCjuhFE5XMZbFlHXdfT92wcQ2/XVDmGtEWSiF6tEKuPLRFJ6tMjFg6ze435MKHXJzx/nfiucPy6BJrR3TLw0FfBsY6sheVHFBHYzTsfYDzE3loF089IrqW1Q2lZUSsbVYYdERHI2SEaK9w041i306eeE+c+pvPFsSTH8lrV/H9s6Ivcut6XlscjM2WJggtW67j02f4/DiffEu28uBXnPidO17m8OPywNf8cIZZhTFdq4rYkxezmNu8gVs3icWfpEpEkP2wq1doVysRbhRjhFmVvbesVp09JxZ/lOoh+2nwRAymRUU16E9FpVbrvNm4ZJ9KrbGnasyV8l/vkEMjFZFl0KwWKudNvOO0ff8CDNsVBiQlEB0AAAAASUVORK5CYII="
            }
          ],
          "text": " 知乎",
          "children": []
        }
      ]
    }
  ]
}]