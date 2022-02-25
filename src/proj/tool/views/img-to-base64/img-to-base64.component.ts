import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/shared/utils/util';

@Component({
  selector: 'app-img-to-base64',
  templateUrl: './img-to-base64.component.html',
  styleUrls: ['./img-to-base64.component.less']
})
export class ImgToBase64Component implements OnInit {

  constructor(
    private util: UtilService
  ) { }
  data = [
    {
      "id": 11104,
      "subsceneCode": "richangbaozhangzuozhanshi",
      "service": "scene/scene_plan_get/"
    },
    {
      "id": 190917002,
      "neName": [
        "日常重点区域"
      ],
      "subsceneCode": "richangbaozhangzuozhanshi",
      "service": "jpmdata/fms_indic_by_id/"
    },
    {
      "id": 190917003,
      "neName": [
        "日常重点区域"
      ],
      "subsceneCode": "richangbaozhangzuozhanshi",
      "service": "jpmdata/fms_indic_by_id/"
    },
    {
      "id": 202143001,
      "neName": [
        "日常重点区域"
      ],
      "subsceneCode": "richangbaozhangzuozhanshi",
      "service": "jpmdata/fms_indic_by_id/"
    },
    {
      "id": 202143002,
      "neName": [
        "日常重点区域"
      ],
      "subsceneCode": "richangbaozhangzuozhanshi",
      "service": "jpmdata/fms_indic_by_id/"
    },
    {
      "id": 190917005,
      "neName": [
        "日常重点区域"
      ],
      "subsceneCode": "richangbaozhangzuozhanshi",
      "service": "jpmdata/fms_indic_by_id/"
    },
    {
      "id": 190917007,
      "neName": [
        "日常重点区域"
      ],
      "subsceneCode": "richangbaozhangzuozhanshi",
      "service": "jpmdata/fms_indic_by_id/"
    },
    {
      "id": 190921009,
      "neName": [
        "日常重点区域"
      ],
      "subsceneCode": "richangbaozhangzuozhanshi",
      "service": "jpmdata/fms_indic_by_id/"
    },
    {
      "id": 11780,
      "subsceneCode": "richangbaozhangzuozhanshi",
      "service": "emergency/scene_task_bobao_get/"
    },
    {
      "id": 12740,
      "subsceneCode": "richangbaozhangzuozhanshi",
      "service": "emergency/scene_task_bobao_get/"
    },
    {
      "id": 12781,
      "subsceneCode": "richangbaozhangzuozhanshi",
      "service": "emergency/scene_task_bobao_get/"
    },
    {
      "id": 21052649,
      "subsceneCode": "richangbaozhangzhengqiyewu",
      "service": "jpmdata/fms_indic_topn/"
    },
    {
      "id": 21052001,
      "neName": [
        "全网"
      ],
      "subsceneCode": "richangbaozhangzhengqiyewu",
      "service": "jpmdata/fms_indic_by_id/"
    },
    {
      "id": 21052002,
      "neName": [
        "全网"
      ],
      "subsceneCode": "richangbaozhangzhengqiyewu",
      "service": "jpmdata/fms_indic_by_id/"
    },
    {
      "id": 21052715,
      "neName": [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月"
      ],
      "subsceneCode": "richangbaozhangzhengqiyewu",
      "service": "jpmdata/fms_indic_by_id/"
    },
    {
      "id": 21052716,
      "neName": [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月"
      ],
      "subsceneCode": "richangbaozhangzhengqiyewu",
      "service": "jpmdata/fms_indic_by_id/"
    },
    {
      "id": 0,
      "neName": [
        "全网"
      ],
      "subsceneCode": "richangbaozhangzhengqiyewu",
      "service": "jpmdata/fms_indic_by_id/"
    },
    {
      "id": 21052005,
      "neName": [
        "全网"
      ],
      "subsceneCode": "richangbaozhangzhengqiyewu",
      "service": "jpmdata/fms_indic_by_id/"
    },
    {
      "id": 21052006,
      "neName": [
        "全网"
      ],
      "subsceneCode": "richangbaozhangzhengqiyewu",
      "service": "jpmdata/fms_indic_by_id/"
    },
    {
      "id": 21052007,
      "neName": [
        "全网"
      ],
      "subsceneCode": "richangbaozhangzhengqiyewu",
      "service": "jpmdata/fms_indic_by_id/"
    },
    {
      "id": 21052008,
      "neName": [
        "全网"
      ],
      "subsceneCode": "richangbaozhangzhengqiyewu",
      "service": "jpmdata/fms_indic_by_id/"
    },
    {
      "id": 21052027,
      "neName": [
        "全网"
      ],
      "subsceneCode": "richangbaozhangzhengqiyewu",
      "service": "jpmdata/fms_indic_by_id/"
    },
    {
      "id": 21052028,
      "neName": [
        "全网"
      ],
      "subsceneCode": "richangbaozhangzhengqiyewu",
      "service": "jpmdata/fms_indic_by_id/"
    },
    {
      "id": 21052029,
      "neName": [
        "全网"
      ],
      "subsceneCode": "richangbaozhangzhengqiyewu",
      "service": "jpmdata/fms_indic_by_id/"
    },
    {
      "id": 21052030,
      "neName": [
        "全网"
      ],
      "subsceneCode": "richangbaozhangzhengqiyewu",
      "service": "jpmdata/fms_indic_by_id/"
    },
    {
      "id": 21052031,
      "neName": [
        "全网"
      ],
      "subsceneCode": "richangbaozhangzhengqiyewu",
      "service": "jpmdata/fms_indic_by_id/"
    },
    {
      "id": 21052032,
      "neName": [
        "全网"
      ],
      "subsceneCode": "richangbaozhangzhengqiyewu",
      "service": "jpmdata/fms_indic_by_id/"
    },
    {
      "id": 21052033,
      "neName": [
        "全网"
      ],
      "subsceneCode": "richangbaozhangzhengqiyewu",
      "service": "jpmdata/fms_indic_by_id/"
    },
    {
      "id": 21052034,
      "neName": [
        "全网"
      ],
      "subsceneCode": "richangbaozhangzhengqiyewu",
      "service": "jpmdata/fms_indic_by_id/"
    },
    {
      "id": 21052035,
      "neName": [
        "全网"
      ],
      "subsceneCode": "richangbaozhangzhengqiyewu",
      "service": "jpmdata/fms_indic_by_id/"
    },
    {
      "id": 21052036,
      "neName": [
        "全网"
      ],
      "subsceneCode": "richangbaozhangzhengqiyewu",
      "service": "jpmdata/fms_indic_by_id/"
    }
  ]
  ngOnInit(): void {
  }
  jsonToExcel(jsonData) {
    let columns = []
    let excel = null
    if (Array.isArray(jsonData) && this.util.isNotEmptyObject(jsonData[0])) {
      columns = Object.keys(jsonData[0])
      excel = '<table>'
      let row = '<tr>'
      for (let i = 0, l = columns.length; i < l; i += 1) {
        row += `<td>${columns[i]}</td>`
      }
      excel += `${row}</tr>`
      for (let i = 0, len = jsonData.length; i < len; i += 1) {
        let row = '<tr>'
        for (let j = 0, l = columns.length; j < l; j += 1) {
          let value = jsonData[i][columns[j]]
          row += `<td>${value}</td>`
        }
        excel += `${row}</tr>`
      }
      excel += '</table>'

      let a = `
        <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>
          <meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">
          <head>
            <!--[if gte mso 9]>
            <xml>
              <x:ExcelWorkbook>
                <x:ExcelWorksheets>
                  <x:ExcelWorksheet>
                    <x:Name>
                      {worksheet}
                    </x:Name>
                    <x:WorksheetOptions>
                      <x:DisplayGridlines/>
                    </x:WorksheetOptions>
                  </x:ExcelWorksheet>
                </x:ExcelWorksheets>
              </x:ExcelWorkbook>
            </xml>
            <![endif]-->
          </head>
          <body>
          ${excel}
          </body>
        </html>
      `
      return `data:application/vnd.ms-excel;charset=utf-8,${a}`
    }
    return null
  }

  eportExcel(data){
    let a = this.jsonToExcel(data)
    this.util.download(a, 'json.xls')
  }
}
