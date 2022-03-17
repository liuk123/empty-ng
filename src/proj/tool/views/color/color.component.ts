import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/shared/utils/util';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.less']
})
export class ColorComponent implements OnInit {

  curColor=null
  constructor(private util: UtilService) {
      let index = Math.floor(Math.random()*this.cn.length)
      this.curColor = this.cn[index]
      console.log(this.cn.length)
  }

  ngOnInit(): void {}

  selectColor(data){
      this.curColor = data
  }
  cn=[
    {
        "CMYK": [
            4,
            5,
            18,
            0
        ],
        "RGB": [
            249,
            244,
            220
        ],
        "hex": "#f9f4dc",
        "name": "乳白",
        "pinyin": "rubai"
    },
    {
        "CMYK": [
            3,
            8,
            30,
            0
        ],
        "RGB": [
            249,
            236,
            195
        ],
        "hex": "#f7e8aa",
        "name": "杏仁黄",
        "pinyin": "xingrenhuang"
    },
    {
        "CMYK": [
            4,
            13,
            67,
            0
        ],
        "RGB": [
            248,
            223,
            114
        ],
        "hex": "#f8df72",
        "name": "茉莉黄",
        "pinyin": "molihuang"
    },
    {
        "CMYK": [
            5,
            14,
            68,
            1
        ],
        "RGB": [
            248,
            223,
            112
        ],
        "hex": "#f8df70",
        "name": "麦秆黄",
        "pinyin": "maiganhuang"
    },
    {
        "CMYK": [
            2,
            16,
            84,
            0
        ],
        "RGB": [
            251,
            218,
            65
        ],
        "hex": "#fbda41",
        "name": "油菜花黄",
        "pinyin": "youcaihuahuang"
    },
    {
        "CMYK": [
            1,
            18,
            94,
            0
        ],
        "RGB": [
            254,
            215,
            26
        ],
        "hex": "#fed71a",
        "name": "佛手黄",
        "pinyin": "foshouhuang"
    },
    {
        "CMYK": [
            3,
            16,
            50,
            0
        ],
        "RGB": [
            247,
            222,
            152
        ],
        "hex": "#f7de98",
        "name": "篾黄",
        "pinyin": "miehuang"
    },
    {
        "CMYK": [
            3,
            17,
            69,
            0
        ],
        "RGB": [
            248,
            216,
            106
        ],
        "hex": "#f8d86a",
        "name": "葵扇黄",
        "pinyin": "kuishanhuang"
    },
    {
        "CMYK": [
            0,
            20,
            87,
            0
        ],
        "RGB": [
            252,
            211,
            55
        ],
        "hex": "#fcd337",
        "name": "柠檬黄",
        "pinyin": "ningmenghuang"
    },
    {
        "CMYK": [
            0,
            20,
            95,
            0
        ],
        "RGB": [
            252,
            210,
            23
        ],
        "hex": "#fcd217",
        "name": "金瓜黄",
        "pinyin": "jinguahuang"
    },
    {
        "CMYK": [
            0,
            21,
            94,
            0
        ],
        "RGB": [
            254,
            209,
            16
        ],
        "hex": "#ffd111",
        "name": "藤黄",
        "pinyin": "tenghuang"
    },
    {
        "CMYK": [
            2,
            16,
            39,
            0
        ],
        "RGB": [
            246,
            222,
            173
        ],
        "hex": "#f6dead",
        "name": "酪黄",
        "pinyin": "laohuang"
    },
    {
        "CMYK": [
            1,
            17,
            50,
            0
        ],
        "RGB": [
            247,
            218,
            148
        ],
        "hex": "#f7da94",
        "name": "香水玫瑰黄",
        "pinyin": "xiangshuimeiguihuang"
    },
    {
        "CMYK": [
            1,
            21,
            70,
            0
        ],
        "RGB": [
            249,
            211,
            103
        ],
        "hex": "#f9d367",
        "name": "淡密黄",
        "pinyin": "danmihuang"
    },
    {
        "CMYK": [
            0,
            23,
            88,
            0
        ],
        "RGB": [
            251,
            205,
            49
        ],
        "hex": "#fbcd31",
        "name": "大豆黄",
        "pinyin": "dadouhuang"
    },
    {
        "CMYK": [
            0,
            24,
            94,
            0
        ],
        "RGB": [
            252,
            203,
            22
        ],
        "hex": "#fccb16",
        "name": "素馨黄",
        "pinyin": "suxinhuang"
    },
    {
        "CMYK": [
            0,
            24,
            94,
            0
        ],
        "RGB": [
            254,
            204,
            17
        ],
        "hex": "#fecc11",
        "name": "向日葵黄",
        "pinyin": "xiangrikuihuang"
    },
    {
        "CMYK": [
            0,
            27,
            88,
            0
        ],
        "RGB": [
            251,
            200,
            47
        ],
        "hex": "#fbc82f",
        "name": "雅梨黄",
        "pinyin": "yalihuang"
    },
    {
        "CMYK": [
            0,
            28,
            94,
            0
        ],
        "RGB": [
            252,
            197,
            21
        ],
        "hex": "#fcc515",
        "name": "黄连黄",
        "pinyin": "huanglianhuang"
    },
    {
        "CMYK": [
            0,
            29,
            95,
            0
        ],
        "RGB": [
            252,
            195,
            7
        ],
        "hex": "#fcc307",
        "name": "金盏黄",
        "pinyin": "jinzhanhuang"
    },
    {
        "CMYK": [
            0,
            32,
            52,
            0
        ],
        "RGB": [
            248,
            195,
            135
        ],
        "hex": "#f8c387",
        "name": "蛋壳黄",
        "pinyin": "dankehuang"
    },
    {
        "CMYK": [
            0,
            32,
            52,
            0
        ],
        "RGB": [
            247,
            193,
            115
        ],
        "hex": "#f7c173",
        "name": "肉色",
        "pinyin": "rouse"
    },
    {
        "CMYK": [
            0,
            35,
            89,
            0
        ],
        "RGB": [
            251,
            185,
            41
        ],
        "hex": "#fbb929",
        "name": "鹅掌黄",
        "pinyin": "ezhanghuang"
    },
    {
        "CMYK": [
            0,
            36,
            93,
            0
        ],
        "RGB": [
            251,
            182,
            18
        ],
        "hex": "#fbb612",
        "name": "鸡蛋黄",
        "pinyin": "jidanhuang"
    },
    {
        "CMYK": [
            0,
            35,
            94,
            0
        ],
        "RGB": [
            252,
            183,
            10
        ],
        "hex": "#fcb70a",
        "name": "鼬黄",
        "pinyin": "youhuang"
    },
    {
        "CMYK": [
            0,
            44,
            84,
            0
        ],
        "RGB": [
            249,
            166,
            51
        ],
        "hex": "#f9a633",
        "name": "榴萼黄",
        "pinyin": "liuehuang"
    },
    {
        "CMYK": [
            0,
            45,
            92,
            0
        ],
        "RGB": [
            251,
            164,
            20
        ],
        "hex": "#fba414",
        "name": "淡橘橙",
        "pinyin": "danjucheng"
    },
    {
        "CMYK": [
            0,
            47,
            92,
            0
        ],
        "RGB": [
            252,
            161,
            6
        ],
        "hex": "#fca106",
        "name": "枇杷黄",
        "pinyin": "pipahuang"
    },
    {
        "CMYK": [
            0,
            47,
            92,
            0
        ],
        "RGB": [
            252,
            161,
            4
        ],
        "hex": "#fca104",
        "name": "橙皮黄",
        "pinyin": "chengpihuang"
    },
    {
        "CMYK": [
            0,
            56,
            87,
            0
        ],
        "RGB": [
            252,
            140,
            35
        ],
        "hex": "#fc8c23",
        "name": "北瓜黄",
        "pinyin": "beiguahuang"
    },
    {
        "CMYK": [
            0,
            54,
            92,
            0
        ],
        "RGB": [
            250,
            142,
            22
        ],
        "hex": "#f28e16",
        "name": "杏黄",
        "pinyin": "xinghuang"
    },
    {
        "CMYK": [
            0,
            51,
            91,
            0
        ],
        "RGB": [
            255,
            153,
            0
        ],
        "hex": "#ff9900",
        "name": "雄黄",
        "pinyin": "xionghuang"
    },
    {
        "CMYK": [
            0,
            56,
            91,
            0
        ],
        "RGB": [
            251,
            139,
            5
        ],
        "hex": "#fb8b05",
        "name": "万寿菊黄",
        "pinyin": "wanshoujuhuang"
    },
    {
        "CMYK": [
            10,
            13,
            35,
            1
        ],
        "RGB": [
            233,
            221,
            182
        ],
        "hex": "#e9ddb6",
        "name": "菊蕾白",
        "pinyin": "juleibai"
    },
    {
        "CMYK": [
            8,
            19,
            84,
            1
        ],
        "RGB": [
            238,
            208,
            69
        ],
        "hex": "#eed045",
        "name": "秋葵黄",
        "pinyin": "qiukuihuang"
    },
    {
        "CMYK": [
            6,
            20,
            92,
            1
        ],
        "RGB": [
            242,
            206,
            43
        ],
        "hex": "#f2ce2b",
        "name": "硫华黄",
        "pinyin": "liuhuahuang"
    },
    {
        "CMYK": [
            6,
            22,
            92,
            0
        ],
        "RGB": [
            241,
            202,
            23
        ],
        "hex": "#f1ca17",
        "name": "柚黄",
        "pinyin": "youhuang"
    },
    {
        "CMYK": [
            15,
            20,
            66,
            2
        ],
        "RGB": [
            221,
            200,
            113
        ],
        "hex": "#ddc871",
        "name": "芒果黄",
        "pinyin": "mangguohuang"
    },
    {
        "CMYK": [
            14,
            22,
            85,
            2
        ],
        "RGB": [
            223,
            194,
            67
        ],
        "hex": "#dfc243",
        "name": "蒿黄",
        "pinyin": "haohuang"
    },
    {
        "CMYK": [
            12,
            24,
            95,
            2
        ],
        "RGB": [
            226,
            192,
            39
        ],
        "hex": "#e2c027",
        "name": "姜黄",
        "pinyin": "jianghuang"
    },
    {
        "CMYK": [
            11,
            25,
            99,
            1
        ],
        "RGB": [
            228,
            191,
            17
        ],
        "hex": "#e4bf11",
        "name": "香蕉黄",
        "pinyin": "xiangjiaohuang"
    },
    {
        "CMYK": [
            17,
            27,
            94,
            4
        ],
        "RGB": [
            210,
            180,
            44
        ],
        "hex": "#d2b42c",
        "name": "草黄",
        "pinyin": "caohuang"
    },
    {
        "CMYK": [
            17,
            29,
            100,
            4
        ],
        "RGB": [
            210,
            177,
            22
        ],
        "hex": "#d2b116",
        "name": "新禾绿",
        "pinyin": "xinhelv"
    },
    {
        "CMYK": [
            28,
            26,
            45,
            7
        ],
        "RGB": [
            183,
            174,
            143
        ],
        "hex": "#b7ae8f",
        "name": "月灰",
        "pinyin": "yuehui"
    },
    {
        "CMYK": [
            30,
            30,
            70,
            12
        ],
        "RGB": [
            173,
            158,
            85
        ],
        "hex": "#ad9e5f",
        "name": "淡灰绿",
        "pinyin": "danhuilv"
    },
    {
        "CMYK": [
            38,
            38,
            76,
            24
        ],
        "RGB": [
            142,
            128,
            75
        ],
        "hex": "#8e804b",
        "name": "草灰绿",
        "pinyin": "caohuilv"
    },
    {
        "CMYK": [
            36,
            42,
            100,
            29
        ],
        "RGB": [
            136,
            115,
            34
        ],
        "hex": "#887322",
        "name": "苔绿",
        "pinyin": "tailv"
    },
    {
        "CMYK": [
            36,
            42,
            100,
            30
        ],
        "RGB": [
            134,
            112,
            24
        ],
        "hex": "#867018",
        "name": "碧螺春绿",
        "pinyin": "biluochunlv"
    },
    {
        "CMYK": [
            47,
            47,
            65,
            42
        ],
        "RGB": [
            104,
            94,
            72
        ],
        "hex": "#685e48",
        "name": "燕羽灰",
        "pinyin": "yanyuhui"
    },
    {
        "CMYK": [
            46,
            47,
            69,
            42
        ],
        "RGB": [
            105,
            94,
            69
        ],
        "hex": "#695e45",
        "name": "蟹壳灰",
        "pinyin": "xiekehui"
    },
    {
        "CMYK": [
            48,
            48,
            100,
            45
        ],
        "RGB": [
            100,
            88,
            34
        ],
        "hex": "#645822",
        "name": "潭水绿",
        "pinyin": "tanshuilv"
    },
    {
        "CMYK": [
            50,
            50,
            10,
            48
        ],
        "RGB": [
            94,
            83,
            20
        ],
        "hex": "#5e5314",
        "name": "橄榄绿",
        "pinyin": "ganlanlv"
    },
    {
        "CMYK": [
            2,
            6,
            18,
            0
        ],
        "RGB": [
            249,
            241,
            219
        ],
        "hex": "#f9f1db",
        "name": "蚌肉白",
        "pinyin": "bangroubai"
    },
    {
        "CMYK": [
            3,
            10,
            31,
            0
        ],
        "RGB": [
            248,
            232,
            193
        ],
        "hex": "#f8e8c1",
        "name": "豆汁黄",
        "pinyin": "douzhihuang"
    },
    {
        "CMYK": [
            1,
            19,
            66,
            0
        ],
        "RGB": [
            249,
            215,
            112
        ],
        "hex": "#f9d770",
        "name": "淡茧黄",
        "pinyin": "danjianhuang"
    },
    {
        "CMYK": [
            0,
            26,
            94,
            0
        ],
        "RGB": [
            255,
            201,
            12
        ],
        "hex": "#ffc90c",
        "name": "乳鸭黄",
        "pinyin": "ruyahuang"
    },
    {
        "CMYK": [
            5,
            11,
            22,
            0
        ],
        "RGB": [
            242,
            230,
            206
        ],
        "hex": "#f2e6ce",
        "name": "荔肉白",
        "pinyin": "liroubai"
    },
    {
        "CMYK": [
            5,
            19,
            50,
            0
        ],
        "RGB": [
            240,
            214,
            149
        ],
        "hex": "#f0d695",
        "name": "象牙黄",
        "pinyin": "xiangyahuang"
    },
    {
        "CMYK": [
            3,
            23,
            69,
            0
        ],
        "RGB": [
            244,
            206,
            105
        ],
        "hex": "#f4ce69",
        "name": "炒米黄",
        "pinyin": "chaomihuang"
    },
    {
        "CMYK": [
            1,
            28,
            89,
            0
        ],
        "RGB": [
            246,
            196,
            48
        ],
        "hex": "#f6c430",
        "name": "鹦鹉冠黄",
        "pinyin": "yingwuguanhuang"
    },
    {
        "CMYK": [
            0,
            30,
            95,
            0
        ],
        "RGB": [
            249,
            193,
            22
        ],
        "hex": "#f9c116",
        "name": "木瓜黄",
        "pinyin": "muguahuang"
    },
    {
        "CMYK": [
            0,
            32,
            95,
            0
        ],
        "RGB": [
            249,
            189,
            16
        ],
        "hex": "#f9bd10",
        "name": "浅烙黄",
        "pinyin": "qianlaohuang"
    },
    {
        "CMYK": [
            11,
            18,
            39,
            1
        ],
        "RGB": [
            229,
            211,
            170
        ],
        "hex": "#e5d3aa",
        "name": "莲子白",
        "pinyin": "lianzibai"
    },
    {
        "CMYK": [
            5,
            35,
            99,
            0
        ],
        "RGB": [
            232,
            176,
            4
        ],
        "hex": "#e8b004",
        "name": "谷黄",
        "pinyin": "guhuang"
    },
    {
        "CMYK": [
            3,
            36,
            99,
            0
        ],
        "RGB": [
            235,
            177,
            13
        ],
        "hex": "#ebb10d",
        "name": "栀子黄",
        "pinyin": "zhizihuang"
    },
    {
        "CMYK": [
            11,
            39,
            100,
            2
        ],
        "RGB": [
            217,
            164,
            14
        ],
        "hex": "#d9a40e",
        "name": "芥黄",
        "pinyin": "jiehuang"
    },
    {
        "CMYK": [
            28,
            27,
            43,
            8
        ],
        "RGB": [
            181,
            170,
            144
        ],
        "hex": "#b5aa90",
        "name": "银鼠灰",
        "pinyin": "yinshuhui"
    },
    {
        "CMYK": [
            26,
            31,
            57,
            10
        ],
        "RGB": [
            182,
            164,
            118
        ],
        "hex": "#b6a476",
        "name": "尘灰",
        "pinyin": "chenhui"
    },
    {
        "CMYK": [
            21,
            43,
            100,
            11
        ],
        "RGB": [
            183,
            141,
            18
        ],
        "hex": "#b78d12",
        "name": "枯绿",
        "pinyin": "kulv"
    },
    {
        "CMYK": [
            35,
            44,
            80,
            30
        ],
        "RGB": [
            135,
            114,
            62
        ],
        "hex": "#87723e",
        "name": "鲛青",
        "pinyin": "jiaoqing"
    },
    {
        "CMYK": [
            32,
            50,
            100,
            31
        ],
        "RGB": [
            135,
            104,
            24
        ],
        "hex": "#876818",
        "name": "粽叶绿",
        "pinyin": "zongyelv"
    },
    {
        "CMYK": [
            31,
            51,
            100,
            30
        ],
        "RGB": [
            138,
            105,
            19
        ],
        "hex": "#8a6913",
        "name": "灰绿",
        "pinyin": "huilv"
    },
    {
        "CMYK": [
            52,
            56,
            64,
            62
        ],
        "RGB": [
            74,
            64,
            53
        ],
        "hex": "#4a4035",
        "name": "鹤灰",
        "pinyin": "hehui"
    },
    {
        "CMYK": [
            48,
            58,
            70,
            62
        ],
        "RGB": [
            77,
            64,
            48
        ],
        "hex": "#4d4030",
        "name": "淡松烟",
        "pinyin": "dansongyan"
    },
    {
        "CMYK": [
            45,
            56,
            100,
            56
        ],
        "RGB": [
            88,
            71,
            23
        ],
        "hex": "#584717",
        "name": "暗海水绿",
        "pinyin": "anhaishuilv"
    },
    {
        "CMYK": [
            45,
            55,
            100,
            54
        ],
        "RGB": [
            91,
            73,
            19
        ],
        "hex": "#5b4913",
        "name": "棕榈绿",
        "pinyin": "zonglvlv"
    },
    {
        "CMYK": [
            1,
            11,
            24,
            0
        ],
        "RGB": [
            249,
            223,
            205
        ],
        "hex": "#f9e9cd",
        "name": "米色",
        "pinyin": "mise"
    },
    {
        "CMYK": [
            1,
            15,
            38,
            0
        ],
        "RGB": [
            248,
            224,
            176
        ],
        "hex": "#f8e0b0",
        "name": "淡肉色",
        "pinyin": "danrouse"
    },
    {
        "CMYK": [
            0,
            23,
            59,
            0
        ],
        "RGB": [
            249,
            210,
            125
        ],
        "hex": "#f9d27d",
        "name": "麦芽糖黄",
        "pinyin": "maiyatanghuang"
    },
    {
        "CMYK": [
            0,
            34,
            93,
            0
        ],
        "RGB": [
            254,
            186,
            7
        ],
        "hex": "#feba07",
        "name": "琥珀黄",
        "pinyin": "hupohuang"
    },
    {
        "CMYK": [
            1,
            31,
            79,
            0
        ],
        "RGB": [
            243,
            191,
            76
        ],
        "hex": "#f3bf4c",
        "name": "甘草黄",
        "pinyin": "gancaohuang"
    },
    {
        "CMYK": [
            0,
            33,
            83,
            0
        ],
        "RGB": [
            248,
            188,
            49
        ],
        "hex": "#f8bc31",
        "name": "初熟杏黄",
        "pinyin": "chushuxinghuang"
    },
    {
        "CMYK": [
            10,
            27,
            59,
            1
        ],
        "RGB": [
            226,
            193,
            124
        ],
        "hex": "#e2c17c",
        "name": "浅驼色",
        "pinyin": "qiantuose"
    },
    {
        "CMYK": [
            7,
            32,
            78,
            1
        ],
        "RGB": [
            229,
            183,
            81
        ],
        "hex": "#e5b751",
        "name": "沙石黄",
        "pinyin": "shashihuang"
    },
    {
        "CMYK": [
            3,
            38,
            97,
            0
        ],
        "RGB": [
            234,
            173,
            26
        ],
        "hex": "#eaad1a",
        "name": "虎皮黄",
        "pinyin": "hupihuang"
    },
    {
        "CMYK": [
            12,
            41,
            98,
            2
        ],
        "RGB": [
            214,
            160,
            29
        ],
        "hex": "#d6a01d",
        "name": "土黄",
        "pinyin": "tuhuang"
    },
    {
        "CMYK": [
            28,
            28,
            41,
            9
        ],
        "RGB": [
            180,
            169,
            146
        ],
        "hex": "#b4a992",
        "name": "百灵鸟灰",
        "pinyin": "bailingniaohui"
    },
    {
        "CMYK": [
            21,
            44,
            97,
            11
        ],
        "RGB": [
            183,
            139,
            38
        ],
        "hex": "#b78b26",
        "name": "山鸡黄",
        "pinyin": "shanjihuang"
    },
    {
        "CMYK": [
            35,
            47,
            71,
            33
        ],
        "RGB": [
            130,
            107,
            72
        ],
        "hex": "#826b48",
        "name": "龟背黄",
        "pinyin": "guibeihuang"
    },
    {
        "CMYK": [
            34,
            52,
            85,
            35
        ],
        "RGB": [
            128,
            99,
            50
        ],
        "hex": "#806332",
        "name": "苍黄",
        "pinyin": "canghuang"
    },
    {
        "CMYK": [
            32,
            56,
            96,
            34
        ],
        "RGB": [
            129,
            95,
            37
        ],
        "hex": "#815f25",
        "name": "莱阳梨黄",
        "pinyin": "laiyanglihuang"
    },
    {
        "CMYK": [
            31,
            57,
            100,
            33
        ],
        "RGB": [
            131,
            94,
            29
        ],
        "hex": "#835e1d",
        "name": "蜴蜊绿",
        "pinyin": "yililv"
    },
    {
        "CMYK": [
            46,
            59,
            68,
            61
        ],
        "RGB": [
            79,
            64,
            50
        ],
        "hex": "#4f4032",
        "name": "松鼠灰",
        "pinyin": "songshuhui"
    },
    {
        "CMYK": [
            44,
            61,
            76,
            62
        ],
        "RGB": [
            80,
            62,
            42
        ],
        "hex": "#503e2a",
        "name": "橄榄灰",
        "pinyin": "ganlanhui"
    },
    {
        "CMYK": [
            43,
            63,
            88,
            61
        ],
        "RGB": [
            81,
            60,
            32
        ],
        "hex": "#513c20",
        "name": "蟹壳绿",
        "pinyin": "xiekelv"
    },
    {
        "CMYK": [
            42,
            64,
            94,
            60
        ],
        "RGB": [
            83,
            60,
            27
        ],
        "hex": "#533c1b",
        "name": "古铜绿",
        "pinyin": "gutonglv"
    },
    {
        "CMYK": [
            41,
            66,
            94,
            60
        ],
        "RGB": [
            85,
            59,
            24
        ],
        "hex": "#553b18",
        "name": "焦茶绿",
        "pinyin": "jiaochalv"
    },
    {
        "CMYK": [
            1,
            7,
            13,
            0
        ],
        "RGB": [
            251,
            242,
            227
        ],
        "hex": "#fbf2e3",
        "name": "粉白",
        "pinyin": "fenbai"
    },
    {
        "CMYK": [
            1,
            12,
            22,
            0
        ],
        "RGB": [
            249,
            232,
            208
        ],
        "hex": "#f9e8d0",
        "name": "落英淡粉",
        "pinyin": "luoyingdanfen"
    },
    {
        "CMYK": [
            0,
            27,
            51,
            0
        ],
        "RGB": [
            249,
            203,
            139
        ],
        "hex": "#f9cb8b",
        "name": "瓜瓤粉",
        "pinyin": "guarangfen"
    },
    {
        "CMYK": [
            0,
            36,
            72,
            0
        ],
        "RGB": [
            251,
            185,
            87
        ],
        "hex": "#fbb957",
        "name": "蜜黄",
        "pinyin": "mihuang"
    },
    {
        "CMYK": [
            0,
            44,
            91,
            0
        ],
        "RGB": [
            255,
            166,
            15
        ],
        "hex": "#ffa60f",
        "name": "金叶黄",
        "pinyin": "jinyehuang"
    },
    {
        "CMYK": [
            0,
            43,
            82,
            0
        ],
        "RGB": [
            244,
            168,
            58
        ],
        "hex": "#f4a83a",
        "name": "金莺黄",
        "pinyin": "jinyinghuang"
    },
    {
        "CMYK": [
            8,
            31,
            50,
            1
        ],
        "RGB": [
            227,
            189,
            141
        ],
        "hex": "#e3bd8d",
        "name": "鹿角棕",
        "pinyin": "lujiaozong"
    },
    {
        "CMYK": [
            2,
            44,
            83,
            0
        ],
        "RGB": [
            231,
            162,
            63
        ],
        "hex": "#e7a23f",
        "name": "凋叶棕",
        "pinyin": "diaoyezong"
    },
    {
        "CMYK": [
            10,
            41,
            72,
            1
        ],
        "RGB": [
            218,
            164,
            90
        ],
        "hex": "#daa45a",
        "name": "玳瑁黄",
        "pinyin": "daimaohuang"
    },
    {
        "CMYK": [
            7,
            45,
            82,
            1
        ],
        "RGB": [
            222,
            158,
            68
        ],
        "hex": "#de9e44",
        "name": "软木黄",
        "pinyin": "ruanmuhuang"
    },
    {
        "CMYK": [
            6,
            51,
            95,
            1
        ],
        "RGB": [
            220,
            145,
            35
        ],
        "hex": "#dc9123",
        "name": "风帆黄",
        "pinyin": "fengfanhuang"
    },
    {
        "CMYK": [
            19,
            44,
            75,
            7
        ],
        "RGB": [
            192,
            147,
            81
        ],
        "hex": "#c09351",
        "name": "桂皮淡棕",
        "pinyin": "guipidanzong"
    },
    {
        "CMYK": [
            32,
            40,
            53,
            22
        ],
        "RGB": [
            151,
            132,
            108
        ],
        "hex": "#97846c",
        "name": "猴毛灰",
        "pinyin": "houmaohui"
    },
    {
        "CMYK": [
            27,
            60,
            97,
            21
        ],
        "RGB": [
            152,
            101,
            36
        ],
        "hex": "#986524",
        "name": "山鸡褐",
        "pinyin": "shanjihe"
    },
    {
        "CMYK": [
            37,
            65,
            84,
            49
        ],
        "RGB": [
            102,
            70,
            42
        ],
        "hex": "#66462a",
        "name": "驼色",
        "pinyin": "tuose"
    },
    {
        "CMYK": [
            38,
            69,
            90,
            54
        ],
        "RGB": [
            93,
            61,
            33
        ],
        "hex": "#5d3d21",
        "name": "茶褐",
        "pinyin": "chahe"
    },
    {
        "CMYK": [
            37,
            74,
            96,
            55
        ],
        "RGB": [
            92,
            55,
            25
        ],
        "hex": "#5c3719",
        "name": "古铜褐",
        "pinyin": "gutonghe"
    },
    {
        "CMYK": [
            0,
            10,
            14,
            0
        ],
        "RGB": [
            251,
            236,
            222
        ],
        "hex": "#fbecde",
        "name": "荷花白",
        "pinyin": "hehuabai"
    },
    {
        "CMYK": [
            0,
            40,
            52,
            0
        ],
        "RGB": [
            248,
            179,
            127
        ],
        "hex": "#f8b37f",
        "name": "玫瑰粉",
        "pinyin": "meiguifen"
    },
    {
        "CMYK": [
            0,
            62,
            88,
            0
        ],
        "RGB": [
            249,
            125,
            28
        ],
        "hex": "#f97d1c",
        "name": "橘橙",
        "pinyin": "jucheng"
    },
    {
        "CMYK": [
            0,
            62,
            85,
            0
        ],
        "RGB": [
            250,
            126,
            35
        ],
        "hex": "#fa7e23",
        "name": "美人焦橙",
        "pinyin": "meirenjiaocheng"
    },
    {
        "CMYK": [
            0,
            28,
            25,
            0
        ],
        "RGB": [
            247,
            205,
            188
        ],
        "hex": "#f7cdbc",
        "name": "润红",
        "pinyin": "runhong"
    },
    {
        "CMYK": [
            0,
            28,
            22,
            0
        ],
        "RGB": [
            246,
            206,
            193
        ],
        "hex": "#f6cec1",
        "name": "淡桃红",
        "pinyin": "dantaohong"
    },
    {
        "CMYK": [
            0,
            53,
            65,
            0
        ],
        "RGB": [
            240,
            148,
            93
        ],
        "hex": "#f0945d",
        "name": "海螺橙",
        "pinyin": "hailuocheng"
    },
    {
        "CMYK": [
            0,
            44,
            32,
            0
        ],
        "RGB": [
            240,
            173,
            160
        ],
        "hex": "#f0ada0",
        "name": "桃红",
        "pinyin": "taohong"
    },
    {
        "CMYK": [
            0,
            45,
            34,
            0
        ],
        "RGB": [
            238,
            170,
            156
        ],
        "hex": "#eeaa9c",
        "name": "颊红",
        "pinyin": "jiahong"
    },
    {
        "CMYK": [
            0,
            49,
            41,
            0
        ],
        "RGB": [
            238,
            160,
            140
        ],
        "hex": "#eea08c",
        "name": "淡罂粟红",
        "pinyin": "danyingsuhong"
    },
    {
        "CMYK": [
            0,
            58,
            67,
            0
        ],
        "RGB": [
            234,
            137,
            88
        ],
        "hex": "#ea8958",
        "name": "晨曦红",
        "pinyin": "chenxihong"
    },
    {
        "CMYK": [
            0,
            65,
            80,
            0
        ],
        "RGB": [
            242,
            118,
            53
        ],
        "hex": "#f27635",
        "name": "蟹壳红",
        "pinyin": "xiekehong"
    },
    {
        "CMYK": [
            0,
            69,
            86,
            0
        ],
        "RGB": [
            248,
            107,
            29
        ],
        "hex": "#f86b1d",
        "name": "金莲花橙",
        "pinyin": "jinlianhuacheng"
    },
    {
        "CMYK": [
            0,
            69,
            70,
            0
        ],
        "RGB": [
            239,
            111,
            72
        ],
        "hex": "#ef6f48",
        "name": "草莓红",
        "pinyin": "caomeihong"
    },
    {
        "CMYK": [
            0,
            72,
            82,
            0
        ],
        "RGB": [
            239,
            99,
            43
        ],
        "hex": "#ef632b",
        "name": "龙睛鱼红",
        "pinyin": "longjingyuhong"
    },
    {
        "CMYK": [
            0,
            81,
            84,
            0
        ],
        "RGB": [
            241,
            68,
            29
        ],
        "hex": "#f1441d",
        "name": "蜻蜓红",
        "pinyin": "qingtinghong"
    },
    {
        "CMYK": [
            0,
            80,
            83,
            0
        ],
        "RGB": [
            240,
            75,
            34
        ],
        "hex": "#f04b22",
        "name": "大红",
        "pinyin": "dahong"
    },
    {
        "CMYK": [
            0,
            80,
            85,
            0
        ],
        "RGB": [
            242,
            72,
            27
        ],
        "hex": "#f2481b",
        "name": "柿红",
        "pinyin": "shihong"
    },
    {
        "CMYK": [
            0,
            80,
            85,
            0
        ],
        "RGB": [
            243,
            71,
            24
        ],
        "hex": "#f34718",
        "name": "榴花红",
        "pinyin": "liuhuahong"
    },
    {
        "CMYK": [
            0,
            83,
            87,
            0
        ],
        "RGB": [
            244,
            62,
            6
        ],
        "hex": "#f43e06",
        "name": "银朱",
        "pinyin": "yinzhu"
    },
    {
        "CMYK": [
            0,
            78,
            83,
            0
        ],
        "RGB": [
            237,
            81,
            38
        ],
        "hex": "#ed5126",
        "name": "朱红",
        "pinyin": "zhuhong"
    },
    {
        "CMYK": [
            0,
            50,
            68,
            0
        ],
        "RGB": [
            240,
            156,
            90
        ],
        "hex": "#f09c5a",
        "name": "鲑鱼红",
        "pinyin": "guiyuhong"
    },
    {
        "CMYK": [
            5,
            69,
            87,
            0
        ],
        "RGB": [
            242,
            123,
            31
        ],
        "hex": "#f26b1f",
        "name": "金黄",
        "pinyin": "jinhuang"
    },
    {
        "CMYK": [
            7,
            52,
            71,
            1
        ],
        "RGB": [
            217,
            145,
            86
        ],
        "hex": "#d99156",
        "name": "鹿皮褐",
        "pinyin": "lupihe"
    },
    {
        "CMYK": [
            4,
            57,
            82,
            1
        ],
        "RGB": [
            219,
            133,
            64
        ],
        "hex": "#db8540",
        "name": "醉瓜肉",
        "pinyin": "zuiguarou"
    },
    {
        "CMYK": [
            0,
            64,
            93,
            0
        ],
        "RGB": [
            222,
            118,
            34
        ],
        "hex": "#de7622",
        "name": "麂棕",
        "pinyin": "jizong"
    },
    {
        "CMYK": [
            22,
            28,
            34,
            6
        ],
        "RGB": [
            193,
            178,
            163
        ],
        "hex": "#c1b2a3",
        "name": "淡银灰",
        "pinyin": "danyinhui"
    },
    {
        "CMYK": [
            18,
            57,
            76,
            6
        ],
        "RGB": [
            190,
            126,
            74
        ],
        "hex": "#be7e4a",
        "name": "淡赭",
        "pinyin": "danzhe"
    },
    {
        "CMYK": [
            14,
            69,
            100,
            4
        ],
        "RGB": [
            193,
            101,
            26
        ],
        "hex": "#c1651a",
        "name": "槟榔综",
        "pinyin": "binglangzong"
    },
    {
        "CMYK": [
            34,
            42,
            46,
            23
        ],
        "RGB": [
            145,
            128,
            114
        ],
        "hex": "#918072",
        "name": "银灰",
        "pinyin": "yinhui"
    },
    {
        "CMYK": [
            42,
            40,
            46,
            20
        ],
        "RGB": [
            154,
            136,
            120
        ],
        "hex": "#9a8878",
        "name": "海鸥灰",
        "pinyin": "haiouhui"
    },
    {
        "CMYK": [
            27,
            69,
            85,
            22
        ],
        "RGB": [
            148,
            88,
            51
        ],
        "hex": "#945833",
        "name": "淡咖啡",
        "pinyin": "dankafei"
    },
    {
        "CMYK": [
            26,
            76,
            97,
            20
        ],
        "RGB": [
            150,
            77,
            34
        ],
        "hex": "#964d22",
        "name": "岩石棕",
        "pinyin": "yanshizong"
    },
    {
        "CMYK": [
            25,
            80,
            100,
            20
        ],
        "RGB": [
            149,
            68,
            22
        ],
        "hex": "#954416",
        "name": "芒果棕",
        "pinyin": "mangguozong"
    },
    {
        "CMYK": [
            39,
            60,
            58,
            51
        ],
        "RGB": [
            98,
            73,
            65
        ],
        "hex": "#624941",
        "name": "石板灰",
        "pinyin": "shibanhui"
    },
    {
        "CMYK": [
            38,
            63,
            63,
            50
        ],
        "RGB": [
            100,
            72,
            61
        ],
        "hex": "#64483d",
        "name": "珠母灰",
        "pinyin": "zhumuhui"
    },
    {
        "CMYK": [
            32,
            83,
            96,
            41
        ],
        "RGB": [
            113,
            54,
            29
        ],
        "hex": "#71361d",
        "name": "丁香棕",
        "pinyin": "dingxiangzong"
    },
    {
        "CMYK": [
            30,
            87,
            100,
            38
        ],
        "RGB": [
            117,
            49,
            23
        ],
        "hex": "#753117",
        "name": "咖啡",
        "pinyin": "kafei"
    },
    {
        "CMYK": [
            30,
            89,
            100,
            39
        ],
        "RGB": [
            115,
            46,
            18
        ],
        "hex": "#732e12",
        "name": "筍皮棕",
        "pinyin": "sunpizong"
    },
    {
        "CMYK": [
            0,
            72,
            86,
            0
        ],
        "RGB": [
            252,
            99,
            21
        ],
        "hex": "#fc6315",
        "name": "燕颔红",
        "pinyin": "yanhanhong"
    },
    {
        "CMYK": [
            3,
            38,
            39,
            0
        ],
        "RGB": [
            232,
            180,
            154
        ],
        "hex": "#e8b49a",
        "name": "玉粉红",
        "pinyin": "yufenhong"
    },
    {
        "CMYK": [
            0,
            70,
            87,
            0
        ],
        "RGB": [
            228,
            104,
            40
        ],
        "hex": "#e46828",
        "name": "金驼",
        "pinyin": "jintuo"
    },
    {
        "CMYK": [
            0,
            76,
            97,
            0
        ],
        "RGB": [
            216,
            89,
            22
        ],
        "hex": "#d85916",
        "name": "铁棕",
        "pinyin": "tiezong"
    },
    {
        "CMYK": [
            23,
            35,
            38,
            10
        ],
        "RGB": [
            183,
            160,
            145
        ],
        "hex": "#b7a091",
        "name": "蛛网灰",
        "pinyin": "zhuwanghui"
    },
    {
        "CMYK": [
            16,
            77,
            100,
            6
        ],
        "RGB": [
            183,
            81,
            29
        ],
        "hex": "#b7511d",
        "name": "淡可可棕",
        "pinyin": "dankekezong"
    },
    {
        "CMYK": [
            31,
            63,
            66,
            31
        ],
        "RGB": [
            139,
            97,
            77
        ],
        "hex": "#8b614d",
        "name": "中红灰",
        "pinyin": "zhonghonghui"
    },
    {
        "CMYK": [
            28,
            76,
            82,
            26
        ],
        "RGB": [
            140,
            75,
            49
        ],
        "hex": "#8c4b31",
        "name": "淡土黄",
        "pinyin": "dantuhuang"
    },
    {
        "CMYK": [
            28,
            83,
            92,
            28
        ],
        "RGB": [
            135,
            61,
            36
        ],
        "hex": "#873d24",
        "name": "淡豆沙",
        "pinyin": "dandousha"
    },
    {
        "CMYK": [
            27,
            85,
            98,
            27
        ],
        "RGB": [
            136,
            58,
            30
        ],
        "hex": "#883a1e",
        "name": "椰壳棕",
        "pinyin": "yekezong"
    },
    {
        "CMYK": [
            40,
            64,
            61,
            56
        ],
        "RGB": [
            91,
            66,
            58
        ],
        "hex": "#5b423a",
        "name": "淡铁灰",
        "pinyin": "dantiehui"
    },
    {
        "CMYK": [
            37,
            72,
            72,
            52
        ],
        "RGB": [
            96,
            61,
            48
        ],
        "hex": "#603d30",
        "name": "中灰驼",
        "pinyin": "zhonghuituo"
    },
    {
        "CMYK": [
            34,
            82,
            85,
            47
        ],
        "RGB": [
            103,
            52,
            36
        ],
        "hex": "#673424",
        "name": "淡栗棕",
        "pinyin": "danlizong"
    },
    {
        "CMYK": [
            33,
            89,
            92,
            48
        ],
        "RGB": [
            101,
            43,
            28
        ],
        "hex": "#652b1c",
        "name": "可可棕",
        "pinyin": "kekezong"
    },
    {
        "CMYK": [
            32,
            90,
            95,
            45
        ],
        "RGB": [
            105,
            42,
            27
        ],
        "hex": "#692a1b",
        "name": "柞叶棕",
        "pinyin": "zhayezong"
    },
    {
        "CMYK": [
            0,
            53,
            59,
            0
        ],
        "RGB": [
            251,
            153,
            104
        ],
        "hex": "#fb9968",
        "name": "野蔷薇红",
        "pinyin": "yeqiangweihong"
    },
    {
        "CMYK": [
            0,
            65,
            79,
            0
        ],
        "RGB": [
            252,
            121,
            48
        ],
        "hex": "#fc7930",
        "name": "菠萝红",
        "pinyin": "boluohong"
    },
    {
        "CMYK": [
            2,
            31,
            31,
            0
        ],
        "RGB": [
            237,
            195,
            174
        ],
        "hex": "#edc3ae",
        "name": "藕荷",
        "pinyin": "ouhe"
    },
    {
        "CMYK": [
            0,
            70,
            91,
            0
        ],
        "RGB": [
            225,
            103,
            35
        ],
        "hex": "#e16723",
        "name": "陶瓷红",
        "pinyin": "taocihong"
    },
    {
        "CMYK": [
            16,
            23,
            27,
            2
        ],
        "RGB": [
            212,
            196,
            183
        ],
        "hex": "#d4c4b7",
        "name": "晓灰",
        "pinyin": "xiaohui"
    },
    {
        "CMYK": [
            9,
            64,
            78,
            1
        ],
        "RGB": [
            207,
            117,
            67
        ],
        "hex": "#cf7543",
        "name": "余烬红",
        "pinyin": "yujinhong"
    },
    {
        "CMYK": [
            8,
            72,
            93,
            1
        ],
        "RGB": [
            205,
            98,
            39
        ],
        "hex": "#cd6227",
        "name": "火砖红",
        "pinyin": "huozhuanhong"
    },
    {
        "CMYK": [
            22,
            64,
            71,
            12
        ],
        "RGB": [
            170,
            106,
            76
        ],
        "hex": "#aa6a4c",
        "name": "火泥棕",
        "pinyin": "huonizong"
    },
    {
        "CMYK": [
            20,
            76,
            92,
            9
        ],
        "RGB": [
            166,
            82,
            44
        ],
        "hex": "#a6522c",
        "name": "绀红",
        "pinyin": "ganhong"
    },
    {
        "CMYK": [
            31,
            79,
            77,
            37
        ],
        "RGB": [
            119,
            61,
            49
        ],
        "hex": "#773d31",
        "name": "橡树棕",
        "pinyin": "xiangshuzong"
    },
    {
        "CMYK": [
            45,
            68,
            57,
            66
        ],
        "RGB": [
            72,
            51,
            50
        ],
        "hex": "#483332",
        "name": "海报灰",
        "pinyin": "haibaohui"
    },
    {
        "CMYK": [
            41,
            76,
            64,
            65
        ],
        "RGB": [
            175,
            46,
            43
        ],
        "hex": "#4b2e2b",
        "name": "玫瑰灰",
        "pinyin": "meiguihui"
    },
    {
        "CMYK": [
            41,
            84,
            71,
            67
        ],
        "RGB": [
            72,
            37,
            34
        ],
        "hex": "#482522",
        "name": "火山棕",
        "pinyin": "huoshanzong"
    },
    {
        "CMYK": [
            40,
            92,
            78,
            66
        ],
        "RGB": [
            72,
            30,
            28
        ],
        "hex": "#481e1c",
        "name": "豆沙",
        "pinyin": "dousha"
    },
    {
        "CMYK": [
            0,
            9,
            12,
            0
        ],
        "RGB": [
            251,
            238,
            226
        ],
        "hex": "#fbeee2",
        "name": "淡米粉",
        "pinyin": "danmifen"
    },
    {
        "CMYK": [
            0,
            19,
            19,
            0
        ],
        "RGB": [
            246,
            220,
            206
        ],
        "hex": "#f6dcce",
        "name": "初桃粉红",
        "pinyin": "chutaofenhong"
    },
    {
        "CMYK": [
            0,
            27,
            27,
            0
        ],
        "RGB": [
            247,
            207,
            186
        ],
        "hex": "#f7cfba",
        "name": "介壳淡粉红",
        "pinyin": "jieqiaodanfenhong"
    },
    {
        "CMYK": [
            0,
            43,
            43,
            0
        ],
        "RGB": [
            246,
            173,
            143
        ],
        "hex": "#f6ad8f",
        "name": "淡藏花红",
        "pinyin": "dancanghuahong"
    },
    {
        "CMYK": [
            0,
            58,
            61,
            0
        ],
        "RGB": [
            246,
            140,
            96
        ],
        "hex": "#f68c60",
        "name": "瓜瓤红",
        "pinyin": "guaranghong"
    },
    {
        "CMYK": [
            0,
            67,
            74,
            0
        ],
        "RGB": [
            249,
            114,
            61
        ],
        "hex": "#f9723d",
        "name": "芙蓉红",
        "pinyin": "furonghong"
    },
    {
        "CMYK": [
            0,
            74,
            85,
            0
        ],
        "RGB": [
            250,
            93,
            25
        ],
        "hex": "#fa5d19",
        "name": "莓酱红",
        "pinyin": "meijianghong"
    },
    {
        "CMYK": [
            0,
            62,
            66,
            0
        ],
        "RGB": [
            238,
            128,
            85
        ],
        "hex": "#ee8055",
        "name": "法螺红",
        "pinyin": "faluohong"
    },
    {
        "CMYK": [
            4,
            82,
            99,
            0
        ],
        "RGB": [
            207,
            72,
            19
        ],
        "hex": "#cf4813",
        "name": "落霞红",
        "pinyin": "luoxiahong"
    },
    {
        "CMYK": [
            21,
            43,
            43,
            9
        ],
        "RGB": [
            184,
            148,
            133
        ],
        "hex": "#b89485",
        "name": "淡玫瑰灰",
        "pinyin": "danmeiguihui"
    },
    {
        "CMYK": [
            18,
            80,
            92,
            7
        ],
        "RGB": [
            177,
            75,
            40
        ],
        "hex": "#b14b28",
        "name": "蟹蝥红",
        "pinyin": "xiemaohong"
    },
    {
        "CMYK": [
            27,
            91,
            95,
            28
        ],
        "RGB": [
            134,
            48,
            32
        ],
        "hex": "#863020",
        "name": "火岩棕",
        "pinyin": "huoyanzong"
    },
    {
        "CMYK": [
            27,
            96,
            100,
            27
        ],
        "RGB": [
            134,
            38,
            23
        ],
        "hex": "#862617",
        "name": "赭石",
        "pinyin": "zheshi"
    },
    {
        "CMYK": [
            36,
            90,
            82,
            56
        ],
        "RGB": [
            89,
            38,
            32
        ],
        "hex": "#592620",
        "name": "暗驼棕",
        "pinyin": "antuozong"
    },
    {
        "CMYK": [
            35,
            96,
            88,
            55
        ],
        "RGB": [
            90,
            31,
            27
        ],
        "hex": "#5a1f1b",
        "name": "酱棕",
        "pinyin": "jiangzong"
    },
    {
        "CMYK": [
            34,
            98,
            91,
            53
        ],
        "RGB": [
            92,
            30,
            25
        ],
        "hex": "#5c1e19",
        "name": "栗棕",
        "pinyin": "lizong"
    },
    {
        "CMYK": [
            0,
            31,
            24,
            0
        ],
        "RGB": [
            244,
            199,
            186
        ],
        "hex": "#f4c7ba",
        "name": "洋水仙红",
        "pinyin": "yangshuixianhong"
    },
    {
        "CMYK": [
            0,
            67,
            55,
            0
        ],
        "RGB": [
            241,
            118,
            102
        ],
        "hex": "#f17666",
        "name": "谷鞘红",
        "pinyin": "guqiaohong"
    },
    {
        "CMYK": [
            0,
            77,
            69,
            0
        ],
        "RGB": [
            241,
            86,
            66
        ],
        "hex": "#f15642",
        "name": "苹果红",
        "pinyin": "pingguohong"
    },
    {
        "CMYK": [
            0,
            84,
            82,
            0
        ],
        "RGB": [
            245,
            57,
            28
        ],
        "hex": "#f5391c",
        "name": "铁水红",
        "pinyin": "tieshuihong"
    },
    {
        "CMYK": [
            0,
            76,
            67,
            0
        ],
        "RGB": [
            242,
            90,
            71
        ],
        "hex": "#f25a47",
        "name": "桂红",
        "pinyin": "guihong"
    },
    {
        "CMYK": [
            0,
            84,
            82,
            0
        ],
        "RGB": [
            243,
            59,
            31
        ],
        "hex": "#f33b1f",
        "name": "极光红",
        "pinyin": "jiguanghong"
    },
    {
        "CMYK": [
            0,
            38,
            25,
            0
        ],
        "RGB": [
            242,
            185,
            178
        ],
        "hex": "#f2b9b2",
        "name": "粉红",
        "pinyin": "fenhong"
    },
    {
        "CMYK": [
            0,
            53,
            36,
            0
        ],
        "RGB": [
            241,
            151,
            144
        ],
        "hex": "#f19790",
        "name": "舌红",
        "pinyin": "shehong"
    },
    {
        "CMYK": [
            0,
            76,
            68,
            0
        ],
        "RGB": [
            240,
            90,
            70
        ],
        "hex": "#f05a46",
        "name": "曲红",
        "pinyin": "quhong"
    },
    {
        "CMYK": [
            0,
            83,
            81,
            0
        ],
        "RGB": [
            242,
            62,
            35
        ],
        "hex": "#f23e23",
        "name": "红汞红",
        "pinyin": "honggonghong"
    },
    {
        "CMYK": [
            0,
            29,
            16,
            0
        ],
        "RGB": [
            242,
            202,
            201
        ],
        "hex": "#f2cac9",
        "name": "淡绯",
        "pinyin": "danfei"
    },
    {
        "CMYK": [
            0,
            43,
            24,
            0
        ],
        "RGB": [
            239,
            175,
            173
        ],
        "hex": "#efafad",
        "name": "无花果红",
        "pinyin": "wuhuaguohong"
    },
    {
        "CMYK": [
            0,
            57,
            36,
            0
        ],
        "RGB": [
            241,
            144,
            140
        ],
        "hex": "#f1908c",
        "name": "榴子红",
        "pinyin": "liuzihong"
    },
    {
        "CMYK": [
            0,
            83,
            81,
            0
        ],
        "RGB": [
            240,
            63,
            36
        ],
        "hex": "#f03f24",
        "name": "胭脂红",
        "pinyin": "yanzhihong"
    },
    {
        "CMYK": [
            0,
            50,
            23,
            0
        ],
        "RGB": [
            240,
            161,
            168
        ],
        "hex": "#f0a1a8",
        "name": "合欢红",
        "pinyin": "hehuanhong"
    },
    {
        "CMYK": [
            0,
            56,
            27,
            0
        ],
        "RGB": [
            241,
            147,
            156
        ],
        "hex": "#f1939c",
        "name": "春梅红",
        "pinyin": "chunmeihong"
    },
    {
        "CMYK": [
            0,
            65,
            38,
            0
        ],
        "RGB": [
            240,
            124,
            130
        ],
        "hex": "#f07c82",
        "name": "香叶红",
        "pinyin": "xiangyehong"
    },
    {
        "CMYK": [
            0,
            80,
            72,
            0
        ],
        "RGB": [
            240,
            74,
            58
        ],
        "hex": "#f04a3a",
        "name": "珊瑚红",
        "pinyin": "shanhuhong"
    },
    {
        "CMYK": [
            0,
            84,
            82,
            0
        ],
        "RGB": [
            241,
            60,
            34
        ],
        "hex": "#f13c22",
        "name": "萝卜红",
        "pinyin": "luobohong"
    },
    {
        "CMYK": [
            0,
            65,
            29,
            0
        ],
        "RGB": [
            231,
            124,
            142
        ],
        "hex": "#e77c8e",
        "name": "淡茜红",
        "pinyin": "danqianhong"
    },
    {
        "CMYK": [
            0,
            77,
            49,
            0
        ],
        "RGB": [
            237,
            90,
            101
        ],
        "hex": "#ed5a65",
        "name": "艳红",
        "pinyin": "yanhong"
    },
    {
        "CMYK": [
            0,
            81,
            66,
            0
        ],
        "RGB": [
            237,
            72,
            69
        ],
        "hex": "#ed4845",
        "name": "淡菽红",
        "pinyin": "danshuhong"
    },
    {
        "CMYK": [
            0,
            84,
            76,
            0
        ],
        "RGB": [
            237,
            59,
            47
        ],
        "hex": "#ed3b2f",
        "name": "鱼鳃红",
        "pinyin": "yusaihong"
    },
    {
        "CMYK": [
            0,
            86,
            82,
            0
        ],
        "RGB": [
            237,
            51,
            33
        ],
        "hex": "#ed3321",
        "name": "樱桃红",
        "pinyin": "yingtaohong"
    },
    {
        "CMYK": [
            0,
            82,
            44,
            0
        ],
        "RGB": [
            238,
            72,
            102
        ],
        "hex": "#ee4866",
        "name": "淡蕊香红",
        "pinyin": "danruixianghong"
    },
    {
        "CMYK": [
            0,
            82,
            46,
            0
        ],
        "RGB": [
            238,
            72,
            99
        ],
        "hex": "#ee4863",
        "name": "石竹红",
        "pinyin": "shizhuhong"
    },
    {
        "CMYK": [
            0,
            82,
            50,
            0
        ],
        "RGB": [
            239,
            71,
            93
        ],
        "hex": "#ef475d",
        "name": "草茉莉红",
        "pinyin": "caomolihong"
    },
    {
        "CMYK": [
            0,
            84,
            60,
            0
        ],
        "RGB": [
            238,
            63,
            77
        ],
        "hex": "#ee3f4d",
        "name": "茶花红",
        "pinyin": "chahuahong"
    },
    {
        "CMYK": [
            0,
            86,
            74,
            0
        ],
        "RGB": [
            237,
            51,
            51
        ],
        "hex": "#ed3333",
        "name": "枸枢红",
        "pinyin": "goushuhong"
    },
    {
        "CMYK": [
            0,
            88,
            81,
            0
        ],
        "RGB": [
            236,
            43,
            36
        ],
        "hex": "#ec2b24",
        "name": "秋海棠红",
        "pinyin": "qiuhaitanghong"
    },
    {
        "CMYK": [
            0,
            89,
            84,
            0
        ],
        "RGB": [
            235,
            38,
            26
        ],
        "hex": "#eb261a",
        "name": "丽春红",
        "pinyin": "lichunhong"
    },
    {
        "CMYK": [
            0,
            90,
            90,
            0
        ],
        "RGB": [
            222,
            42,
            24
        ],
        "hex": "#de2a18",
        "name": "夕阳红",
        "pinyin": "xiyanghong"
    },
    {
        "CMYK": [
            0,
            92,
            95,
            0
        ],
        "RGB": [
            212,
            37,
            23
        ],
        "hex": "#d42517",
        "name": "鹤顶红",
        "pinyin": "hedinghong"
    },
    {
        "CMYK": [
            19,
            89,
            85,
            9
        ],
        "RGB": [
            171,
            55,
            47
        ],
        "hex": "#ab372f",
        "name": "鹅血石红",
        "pinyin": "exueshihong"
    },
    {
        "CMYK": [
            17,
            98,
            100,
            8
        ],
        "RGB": [
            172,
            31,
            24
        ],
        "hex": "#ac1f18",
        "name": "覆盆子红",
        "pinyin": "fupenzihong"
    },
    {
        "CMYK": [
            36,
            81,
            64,
            54
        ],
        "RGB": [
            93,
            49,
            49
        ],
        "hex": "#5d3131",
        "name": "貂紫",
        "pinyin": "diaozi"
    },
    {
        "CMYK": [
            35,
            94,
            77,
            53
        ],
        "RGB": [
            92,
            34,
            35
        ],
        "hex": "#5c2223",
        "name": "暗玉紫",
        "pinyin": "anyuzi"
    },
    {
        "CMYK": [
            35,
            100,
            85,
            54
        ],
        "RGB": [
            90,
            25,
            27
        ],
        "hex": "#5a191b",
        "name": "栗紫",
        "pinyin": "lizi"
    },
    {
        "CMYK": [
            35,
            100,
            80,
            54
        ],
        "RGB": [
            90,
            18,
            22
        ],
        "hex": "#5a1216",
        "name": "葡萄酱紫",
        "pinyin": "putaojiangzi"
    },
    {
        "CMYK": [
            0,
            49,
            27,
            0
        ],
        "RGB": [
            238,
            162,
            164
        ],
        "hex": "#eea2a4",
        "name": "牡丹粉红",
        "pinyin": "mudanfenhong"
    },
    {
        "CMYK": [
            0,
            78,
            44,
            0
        ],
        "RGB": [
            237,
            85,
            106
        ],
        "hex": "#ed556a",
        "name": "山茶红",
        "pinyin": "shanchahong"
    },
    {
        "CMYK": [
            0,
            86,
            55,
            0
        ],
        "RGB": [
            240,
            55,
            82
        ],
        "hex": "#f03752",
        "name": "海棠红",
        "pinyin": "haitanghong"
    },
    {
        "CMYK": [
            13,
            83,
            62,
            3
        ],
        "RGB": [
            192,
            72,
            81
        ],
        "hex": "#c04851",
        "name": "玉红",
        "pinyin": "yuhong"
    },
    {
        "CMYK": [
            11,
            93,
            77,
            2
        ],
        "RGB": [
            192,
            44,
            56
        ],
        "hex": "#c02c38",
        "name": "高粱红",
        "pinyin": "gaolianghong"
    },
    {
        "CMYK": [
            22,
            76,
            54,
            12
        ],
        "RGB": [
            167,
            83,
            90
        ],
        "hex": "#a7535a",
        "name": "满江红",
        "pinyin": "manjianghong"
    },
    {
        "CMYK": [
            28,
            100,
            86,
            33
        ],
        "RGB": [
            124,
            24,
            35
        ],
        "hex": "#7c1823",
        "name": "枣红",
        "pinyin": "zaohong"
    },
    {
        "CMYK": [
            39,
            92,
            67,
            64
        ],
        "RGB": [
            76,
            31,
            36
        ],
        "hex": "#4c1f24",
        "name": "葡萄紫",
        "pinyin": "putaozi"
    },
    {
        "CMYK": [
            39,
            100,
            79,
            63
        ],
        "RGB": [
            77,
            16,
            24
        ],
        "hex": "#4d1018",
        "name": "酱紫",
        "pinyin": "jiangzi"
    },
    {
        "CMYK": [
            0,
            89,
            62,
            0
        ],
        "RGB": [
            238,
            39,
            70
        ],
        "hex": "#ee2746",
        "name": "淡曙红",
        "pinyin": "danshuhong"
    },
    {
        "CMYK": [
            0,
            93,
            76,
            0
        ],
        "RGB": [
            222,
            28,
            49
        ],
        "hex": "#de1c31",
        "name": "唐菖蒲红",
        "pinyin": "tangchangpuhong"
    },
    {
        "CMYK": [
            1,
            95,
            82,
            0
        ],
        "RGB": [
            209,
            26,
            45
        ],
        "hex": "#d11a2d",
        "name": "鹅冠红",
        "pinyin": "eguanhong"
    },
    {
        "CMYK": [
            13,
            76,
            50,
            2
        ],
        "RGB": [
            196,
            90,
            101
        ],
        "hex": "#c45a65",
        "name": "莓红",
        "pinyin": "meihong"
    },
    {
        "CMYK": [
            10,
            96,
            82,
            2
        ],
        "RGB": [
            194,
            31,
            48
        ],
        "hex": "#c21f30",
        "name": "枫叶红",
        "pinyin": "fengyehong"
    },
    {
        "CMYK": [
            19,
            99,
            86,
            11
        ],
        "RGB": [
            166,
            27,
            41
        ],
        "hex": "#a61b29",
        "name": "苋菜红",
        "pinyin": "xiancaihong"
    },
    {
        "CMYK": [
            29,
            73,
            51,
            28
        ],
        "RGB": [
            137,
            78,
            84
        ],
        "hex": "#894e54",
        "name": "烟红",
        "pinyin": "yanhong"
    },
    {
        "CMYK": [
            27,
            98,
            79,
            30
        ],
        "RGB": [
            130,
            32,
            43
        ],
        "hex": "#82202b",
        "name": "暗紫苑红",
        "pinyin": "anziyuanhong"
    },
    {
        "CMYK": [
            27,
            100,
            90,
            29
        ],
        "RGB": [
            130,
            17,
            31
        ],
        "hex": "#82111f",
        "name": "殷红",
        "pinyin": "yanhong"
    },
    {
        "CMYK": [
            36,
            95,
            71,
            59
        ],
        "RGB": [
            84,
            30,
            36
        ],
        "hex": "#541e24",
        "name": "猪肝紫",
        "pinyin": "zhuganzi"
    },
    {
        "CMYK": [
            38,
            100,
            81,
            61
        ],
        "RGB": [
            80,
            10,
            22
        ],
        "hex": "#500a16",
        "name": "金鱼紫",
        "pinyin": "jinyuzi"
    },
    {
        "CMYK": [
            1,
            11,
            9,
            0
        ],
        "RGB": [
            248,
            235,
            230
        ],
        "hex": "#f8ebe6",
        "name": "草珠红",
        "pinyin": "caozhuhong"
    },
    {
        "CMYK": [
            0,
            68,
            21,
            0
        ],
        "RGB": [
            236,
            118,
            150
        ],
        "hex": "#ec7696",
        "name": "淡绛红",
        "pinyin": "danjianghong"
    },
    {
        "CMYK": [
            0,
            86,
            30,
            0
        ],
        "RGB": [
            239,
            52,
            115
        ],
        "hex": "#ef3473",
        "name": "品红",
        "pinyin": "pinhong"
    },
    {
        "CMYK": [
            0,
            69,
            22,
            0
        ],
        "RGB": [
            234,
            114,
            147
        ],
        "hex": "#ea7293",
        "name": "凤仙花红",
        "pinyin": "fengxianhuahong"
    },
    {
        "CMYK": [
            0,
            52,
            18,
            0
        ],
        "RGB": [
            236,
            155,
            173
        ],
        "hex": "#ec9bad",
        "name": "粉团花红",
        "pinyin": "fentuanhuahong"
    },
    {
        "CMYK": [
            0,
            80,
            28,
            0
        ],
        "RGB": [
            235,
            80,
            126
        ],
        "hex": "#eb507e",
        "name": "夹竹桃红",
        "pinyin": "jiazhutaohong"
    },
    {
        "CMYK": [
            0,
            88,
            36,
            0
        ],
        "RGB": [
            237,
            47,
            106
        ],
        "hex": "#ed2f6a",
        "name": "榲桲红",
        "pinyin": "wenpohong"
    },
    {
        "CMYK": [
            0,
            39,
            14,
            0
        ],
        "RGB": [
            238,
            184,
            195
        ],
        "hex": "#eeb8c3",
        "name": "姜红",
        "pinyin": "jianghong"
    },
    {
        "CMYK": [
            0,
            80,
            27,
            0
        ],
        "RGB": [
            234,
            81,
            127
        ],
        "hex": "#ea517f",
        "name": "莲瓣红",
        "pinyin": "lianbanhong"
    },
    {
        "CMYK": [
            0,
            33,
            11,
            0
        ],
        "RGB": [
            241,
            196,
            205
        ],
        "hex": "#f1c4cd",
        "name": "水红",
        "pinyin": "shuihong"
    },
    {
        "CMYK": [
            0,
            60,
            18,
            0
        ],
        "RGB": [
            236,
            138,
            164
        ],
        "hex": "#ec8aa4",
        "name": "报春红",
        "pinyin": "baochunhong"
    },
    {
        "CMYK": [
            8,
            78,
            35,
            1
        ],
        "RGB": [
            206,
            87,
            109
        ],
        "hex": "#ce5777",
        "name": "月季红",
        "pinyin": "yuejihong"
    },
    {
        "CMYK": [
            0,
            52,
            15,
            0
        ],
        "RGB": [
            237,
            157,
            178
        ],
        "hex": "#ed9db2",
        "name": "豇豆红",
        "pinyin": "jiangdouhong"
    },
    {
        "CMYK": [
            0,
            63,
            18,
            0
        ],
        "RGB": [
            239,
            130,
            160
        ],
        "hex": "#ef82a0",
        "name": "霞光红",
        "pinyin": "xiaguanghong"
    },
    {
        "CMYK": [
            0,
            85,
            33,
            0
        ],
        "RGB": [
            235,
            60,
            112
        ],
        "hex": "#eb3c70",
        "name": "松叶牡丹红",
        "pinyin": "songyemudanhong"
    },
    {
        "CMYK": [
            0,
            88,
            40,
            0
        ],
        "RGB": [
            236,
            44,
            100
        ],
        "hex": "#ec2c64",
        "name": "喜蛋红",
        "pinyin": "xidanhong"
    },
    {
        "CMYK": [
            5,
            38,
            20,
            0
        ],
        "RGB": [
            227,
            180,
            184
        ],
        "hex": "#e3b4b8",
        "name": "鼠鼻红",
        "pinyin": "shubihong"
    },
    {
        "CMYK": [
            5,
            96,
            73,
            1
        ],
        "RGB": [
            204,
            22,
            58
        ],
        "hex": "#cc163a",
        "name": "尖晶玉红",
        "pinyin": "jianjingyuhong"
    },
    {
        "CMYK": [
            16,
            61,
            34,
            4
        ],
        "RGB": [
            194,
            124,
            136
        ],
        "hex": "#c27c88",
        "name": "山黎豆红",
        "pinyin": "shanlidouhong"
    },
    {
        "CMYK": [
            13,
            90,
            56,
            3
        ],
        "RGB": [
            191,
            53,
            83
        ],
        "hex": "#bf3553",
        "name": "锦葵红",
        "pinyin": "jinkuihong"
    },
    {
        "CMYK": [
            41,
            64,
            44,
            36
        ],
        "RGB": [
            115,
            87,
            92
        ],
        "hex": "#73575c",
        "name": "鼠背灰",
        "pinyin": "shubeihui"
    },
    {
        "CMYK": [
            33,
            100,
            75,
            49
        ],
        "RGB": [
            98,
            22,
            36
        ],
        "hex": "#621624",
        "name": "甘蔗紫",
        "pinyin": "ganzhezi"
    },
    {
        "CMYK": [
            32,
            100,
            84,
            49
        ],
        "RGB": [
            99,
            7,
            28
        ],
        "hex": "#63071c",
        "name": "石竹紫",
        "pinyin": "shizhuzi"
    },
    {
        "CMYK": [
            57,
            72,
            54,
            74
        ],
        "RGB": [
            54,
            40,
            43
        ],
        "hex": "#36282b",
        "name": "苍蝇灰",
        "pinyin": "cangyinghui"
    },
    {
        "CMYK": [
            52,
            88,
            58,
            81
        ],
        "RGB": [
            48,
            22,
            28
        ],
        "hex": "#30161c",
        "name": "卵石紫",
        "pinyin": "luanshizi"
    },
    {
        "CMYK": [
            56,
            88,
            62,
            84
        ],
        "RGB": [
            43,
            18,
            22
        ],
        "hex": "#2b1216",
        "name": "李紫",
        "pinyin": "lizi"
    },
    {
        "CMYK": [
            58,
            90,
            63,
            83
        ],
        "RGB": [
            45,
            12,
            19
        ],
        "hex": "#2d0c13",
        "name": "茄皮紫",
        "pinyin": "qiepizi"
    },
    {
        "CMYK": [
            0,
            76,
            16,
            0
        ],
        "RGB": [
            206,
            94,
            138
        ],
        "hex": "#ce5e8a",
        "name": "吊钟花红",
        "pinyin": "diaozhonghuahong"
    },
    {
        "CMYK": [
            0,
            81,
            18,
            0
        ],
        "RGB": [
            236,
            78,
            138
        ],
        "hex": "#ec4e8a",
        "name": "兔眼红",
        "pinyin": "tuyanhong"
    },
    {
        "CMYK": [
            0,
            87,
            24,
            0
        ],
        "RGB": [
            238,
            44,
            121
        ],
        "hex": "#ee2c79",
        "name": "紫荆红",
        "pinyin": "zijinghong"
    },
    {
        "CMYK": [
            24,
            99,
            52,
            19
        ],
        "RGB": [
            149,
            28,
            72
        ],
        "hex": "#951c48",
        "name": "菜头紫",
        "pinyin": "caitouzi"
    },
    {
        "CMYK": [
            34,
            97,
            54,
            50
        ],
        "RGB": [
            98,
            29,
            52
        ],
        "hex": "#621d34",
        "name": "鹞冠紫",
        "pinyin": "yaoguanzi"
    },
    {
        "CMYK": [
            33,
            100,
            58,
            60
        ],
        "RGB": [
            98,
            16,
            46
        ],
        "hex": "#62102e",
        "name": "葡萄酒红",
        "pinyin": "putaojiuhong"
    },
    {
        "CMYK": [
            53,
            81,
            50,
            74
        ],
        "RGB": [
            56,
            33,
            41
        ],
        "hex": "#382129",
        "name": "磨石紫",
        "pinyin": "moshizi"
    },
    {
        "CMYK": [
            48,
            90,
            50,
            76
        ],
        "RGB": [
            56,
            25,
            36
        ],
        "hex": "#381924",
        "name": "檀紫",
        "pinyin": "tanzi"
    },
    {
        "CMYK": [
            50,
            91,
            54,
            79
        ],
        "RGB": [
            51,
            20,
            30
        ],
        "hex": "#33141e",
        "name": "火鹅紫",
        "pinyin": "huoezi"
    },
    {
        "CMYK": [
            53,
            92,
            55,
            81
        ],
        "RGB": [
            49,
            15,
            27
        ],
        "hex": "#310f1b",
        "name": "墨紫",
        "pinyin": "mozi"
    },
    {
        "CMYK": [
            0,
            48,
            15,
            0
        ],
        "RGB": [
            238,
            166,
            183
        ],
        "hex": "#eea6b7",
        "name": "晶红",
        "pinyin": "jinghong"
    },
    {
        "CMYK": [
            0,
            82,
            16,
            0
        ],
        "RGB": [
            239,
            73,
            139
        ],
        "hex": "#ef498b",
        "name": "扁豆花红",
        "pinyin": "biandouhuahong"
    },
    {
        "CMYK": [
            2,
            66,
            22,
            0
        ],
        "RGB": [
            222,
            120,
            151
        ],
        "hex": "#de7897",
        "name": "白芨红",
        "pinyin": "baijihong"
    },
    {
        "CMYK": [
            0,
            85,
            24,
            0
        ],
        "RGB": [
            222,
            63,
            124
        ],
        "hex": "#de3f7c",
        "name": "嫩菱红",
        "pinyin": "nenlinghong"
    },
    {
        "CMYK": [
            5,
            87,
            30,
            1
        ],
        "RGB": [
            209,
            60,
            116
        ],
        "hex": "#d13c74",
        "name": "菠根红",
        "pinyin": "bogenhong"
    },
    {
        "CMYK": [
            15,
            68,
            28,
            2
        ],
        "RGB": [
            197,
            112,
            139
        ],
        "hex": "#c5708b",
        "name": "酢酱草红",
        "pinyin": "cujiangcaohong"
    },
    {
        "CMYK": [
            22,
            83,
            34,
            11
        ],
        "RGB": [
            168,
            69,
            107
        ],
        "hex": "#a8456b",
        "name": "洋葱紫",
        "pinyin": "yangcongzi"
    },
    {
        "CMYK": [
            40,
            92,
            47,
            64
        ],
        "RGB": [
            75,
            30,
            47
        ],
        "hex": "#4b1e2f",
        "name": "海象紫",
        "pinyin": "haixiangzi"
    },
    {
        "CMYK": [
            41,
            97,
            49,
            68
        ],
        "RGB": [
            70,
            22,
            41
        ],
        "hex": "#461629",
        "name": "绀紫",
        "pinyin": "ganzi"
    },
    {
        "CMYK": [
            42,
            99,
            51,
            69
        ],
        "RGB": [
            68,
            14,
            37
        ],
        "hex": "#440e25",
        "name": "古铜紫",
        "pinyin": "gutongzi"
    },
    {
        "CMYK": [
            0,
            30,
            12,
            0
        ],
        "RGB": [
            240,
            201,
            207
        ],
        "hex": "#f0c9cf",
        "name": "石蕊红",
        "pinyin": "shiruihong"
    },
    {
        "CMYK": [
            0,
            50,
            16,
            0
        ],
        "RGB": [
            235,
            160,
            179
        ],
        "hex": "#eba0b3",
        "name": "芍药耕红",
        "pinyin": "shaoyaogenghong"
    },
    {
        "CMYK": [
            0,
            88,
            23,
            0
        ],
        "RGB": [
            236,
            45,
            122
        ],
        "hex": "#ec2d7a",
        "name": "藏花红",
        "pinyin": "canghuahong"
    },
    {
        "CMYK": [
            0,
            71,
            18,
            0
        ],
        "RGB": [
            225,
            108,
            150
        ],
        "hex": "#e16c96",
        "name": "初荷红",
        "pinyin": "chuhehong"
    },
    {
        "CMYK": [
            6,
            13,
            7,
            0
        ],
        "RGB": [
            237,
            227,
            231
        ],
        "hex": "#ede3e7",
        "name": "马鞭草紫",
        "pinyin": "mabiancaozi"
    },
    {
        "CMYK": [
            7,
            20,
            8,
            0
        ],
        "RGB": [
            233,
            215,
            223
        ],
        "hex": "#e9d7df",
        "name": "丁香淡紫",
        "pinyin": "dingxiangdanzi"
    },
    {
        "CMYK": [
            7,
            79,
            18,
            0
        ],
        "RGB": [
            210,
            86,
            140
        ],
        "hex": "#d2568c",
        "name": "丹紫红",
        "pinyin": "danzihong"
    },
    {
        "CMYK": [
            4,
            89,
            21,
            0
        ],
        "RGB": [
            210,
            53,
            125
        ],
        "hex": "#d2357d",
        "name": "玫瑰红",
        "pinyin": "meiguihong"
    },
    {
        "CMYK": [
            19,
            27,
            9,
            0
        ],
        "RGB": [
            209,
            194,
            211
        ],
        "hex": "#d1c2d3",
        "name": "淡牵牛紫",
        "pinyin": "danqianniuzi"
    },
    {
        "CMYK": [
            21,
            37,
            12,
            0
        ],
        "RGB": [
            200,
            173,
            196
        ],
        "hex": "#c8adc4",
        "name": "凤信紫",
        "pinyin": "fengxinzi"
    },
    {
        "CMYK": [
            23,
            53,
            14,
            1
        ],
        "RGB": [
            192,
            142,
            175
        ],
        "hex": "#c08eaf",
        "name": "萝兰紫",
        "pinyin": "luolanzi"
    },
    {
        "CMYK": [
            18,
            91,
            18,
            2
        ],
        "RGB": [
            186,
            47,
            123
        ],
        "hex": "#ba2f7b",
        "name": "玫瑰紫",
        "pinyin": "meiguizi"
    },
    {
        "CMYK": [
            58,
            56,
            17,
            2
        ],
        "RGB": [
            128,
            118,
            163
        ],
        "hex": "#8076a3",
        "name": "藤萝紫",
        "pinyin": "tengluozi"
    },
    {
        "CMYK": [
            57,
            62,
            16,
            2
        ],
        "RGB": [
            128,
            109,
            158
        ],
        "hex": "#806d9e",
        "name": "槿紫",
        "pinyin": "jinzi"
    },
    {
        "CMYK": [
            56,
            72,
            15,
            1
        ],
        "RGB": [
            129,
            92,
            148
        ],
        "hex": "#815c94",
        "name": "蕈紫",
        "pinyin": "xunzi"
    },
    {
        "CMYK": [
            54,
            89,
            12,
            1
        ],
        "RGB": [
            129,
            60,
            133
        ],
        "hex": "#813c85",
        "name": "桔梗紫",
        "pinyin": "jiegengzi"
    },
    {
        "CMYK": [
            52,
            100,
            17,
            7
        ],
        "RGB": [
            126,
            22,
            113
        ],
        "hex": "#7e1671",
        "name": "魏紫",
        "pinyin": "weizi"
    },
    {
        "CMYK": [
            3,
            26,
            10,
            0
        ],
        "RGB": [
            233,
            204,
            211
        ],
        "hex": "#e9ccd3",
        "name": "芝兰紫",
        "pinyin": "zhilanzi"
    },
    {
        "CMYK": [
            10,
            67,
            12,
            0
        ],
        "RGB": [
            210,
            118,
            163
        ],
        "hex": "#d276a3",
        "name": "菱锰红",
        "pinyin": "lingmenghong"
    },
    {
        "CMYK": [
            11,
            97,
            10,
            0
        ],
        "RGB": [
            204,
            85,
            149
        ],
        "hex": "#cc5595",
        "name": "龙须红",
        "pinyin": "longxuhong"
    },
    {
        "CMYK": [
            8,
            22,
            12,
            0
        ],
        "RGB": [
            230,
            210,
            213
        ],
        "hex": "#e6d2d5",
        "name": "蓟粉红",
        "pinyin": "jifenhong"
    },
    {
        "CMYK": [
            16,
            79,
            14,
            1
        ],
        "RGB": [
            195,
            86,
            145
        ],
        "hex": "#c35691",
        "name": "电气石红",
        "pinyin": "dianqishihong"
    },
    {
        "CMYK": [
            19,
            68,
            18,
            1
        ],
        "RGB": [
            192,
            111,
            152
        ],
        "hex": "#c06f98",
        "name": "樱草紫",
        "pinyin": "yingcaozi"
    },
    {
        "CMYK": [
            25,
            31,
            26,
            5
        ],
        "RGB": [
            189,
            174,
            173
        ],
        "hex": "#bdaead",
        "name": "芦穗灰",
        "pinyin": "lusuihui"
    },
    {
        "CMYK": [
            26,
            43,
            26,
            6
        ],
        "RGB": [
            181,
            152,
            161
        ],
        "hex": "#b598a1",
        "name": "隐红灰",
        "pinyin": "yinhonghui"
    },
    {
        "CMYK": [
            27,
            97,
            27,
            14
        ],
        "RGB": [
            155,
            30,
            100
        ],
        "hex": "#9b1e64",
        "name": "苋菜紫",
        "pinyin": "xiancaizi"
    },
    {
        "CMYK": [
            39,
            53,
            38,
            25
        ],
        "RGB": [
            133,
            109,
            114
        ],
        "hex": "#856d72",
        "name": "芦灰",
        "pinyin": "luhui"
    },
    {
        "CMYK": [
            49,
            71,
            49,
            58
        ],
        "RGB": [
            79,
            56,
            62
        ],
        "hex": "#4f383e",
        "name": "暮云灰",
        "pinyin": "muyunhui"
    },
    {
        "CMYK": [
            49,
            82,
            46,
            63
        ],
        "RGB": [
            72,
            41,
            54
        ],
        "hex": "#482936",
        "name": "斑鸠灰",
        "pinyin": "banjiuhui"
    },
    {
        "CMYK": [
            4,
            11,
            9,
            0
        ],
        "RGB": [
            242,
            231,
            229
        ],
        "hex": "#f2e7e5",
        "name": "淡藤萝紫",
        "pinyin": "dantengluozi"
    },
    {
        "CMYK": [
            10,
            27,
            11,
            0
        ],
        "RGB": [
            224,
            200,
            209
        ],
        "hex": "#e0c8d1",
        "name": "淡青紫",
        "pinyin": "danqingzi"
    },
    {
        "CMYK": [
            24,
            58,
            15,
            1
        ],
        "RGB": [
            188,
            132,
            168
        ],
        "hex": "#bc84a8",
        "name": "青蛤壳紫",
        "pinyin": "qinghakezi"
    },
    {
        "CMYK": [
            31,
            71,
            15,
            1
        ],
        "RGB": [
            173,
            101,
            152
        ],
        "hex": "#ad6598",
        "name": "豆蔻紫",
        "pinyin": "doukouzi"
    },
    {
        "CMYK": [
            35,
            75,
            18,
            2
        ],
        "RGB": [
            163,
            92,
            143
        ],
        "hex": "#a35c8f",
        "name": "扁豆紫",
        "pinyin": "biandouzi"
    },
    {
        "CMYK": [
            39,
            91,
            15,
            3
        ],
        "RGB": [
            152,
            54,
            128
        ],
        "hex": "#983680",
        "name": "芥花紫",
        "pinyin": "jiehuazi"
    },
    {
        "CMYK": [
            43,
            97,
            19,
            8
        ],
        "RGB": [
            139,
            38,
            113
        ],
        "hex": "#8b2671",
        "name": "青莲",
        "pinyin": "qinglian"
    },
    {
        "CMYK": [
            44,
            85,
            24,
            10
        ],
        "RGB": [
            137,
            66,
            118
        ],
        "hex": "#894276",
        "name": "芓紫",
        "pinyin": "zizi"
    },
    {
        "CMYK": [
            45,
            99,
            24,
            16
        ],
        "RGB": [
            126,
            32,
            101
        ],
        "hex": "#7e2065",
        "name": "葛巾紫",
        "pinyin": "gejinzi"
    },
    {
        "CMYK": [
            49,
            100,
            29,
            32
        ],
        "RGB": [
            104,
            23,
            82
        ],
        "hex": "#681752",
        "name": "牵牛紫",
        "pinyin": "qianniuzi"
    },
    {
        "CMYK": [
            53,
            75,
            41,
            41
        ],
        "RGB": [
            93,
            63,
            81
        ],
        "hex": "#5d3f51",
        "name": "紫灰",
        "pinyin": "zihui"
    },
    {
        "CMYK": [
            55,
            87,
            41,
            52
        ],
        "RGB": [
            78,
            42,
            64
        ],
        "hex": "#4e2a40",
        "name": "龙睛鱼紫",
        "pinyin": "longjingyuzi"
    },
    {
        "CMYK": [
            58,
            96,
            40,
            61
        ],
        "RGB": [
            65,
            28,
            53
        ],
        "hex": "#411c35",
        "name": "荸荠紫",
        "pinyin": "biqizi"
    },
    {
        "CMYK": [
            63,
            74,
            52,
            70
        ],
        "RGB": [
            54,
            41,
            47
        ],
        "hex": "#36292f",
        "name": "古鼎灰",
        "pinyin": "gudinghui"
    },
    {
        "CMYK": [
            81,
            87,
            54,
            84
        ],
        "RGB": [
            30,
            19,
            29
        ],
        "hex": "#1e131d",
        "name": "乌梅紫",
        "pinyin": "wumeizi"
    },
    {
        "CMYK": [
            83,
            87,
            55,
            86
        ],
        "RGB": [
            28,
            13,
            26
        ],
        "hex": "#1c0d1a",
        "name": "深牵牛紫",
        "pinyin": "shenqianniuzi"
    },
    {
        "CMYK": [
            7,
            5,
            7,
            0
        ],
        "RGB": [
            241,
            240,
            237
        ],
        "hex": "#f1f0ed",
        "name": "银白",
        "pinyin": "yinbai"
    },
    {
        "CMYK": [
            13,
            10,
            9,
            0
        ],
        "RGB": [
            226,
            225,
            228
        ],
        "hex": "#e2e1e4",
        "name": "芡食白",
        "pinyin": "qianshibai"
    },
    {
        "CMYK": [
            23,
            18,
            12,
            1
        ],
        "RGB": [
            204,
            204,
            214
        ],
        "hex": "#ccccd6",
        "name": "远山紫",
        "pinyin": "yuanshanzi"
    },
    {
        "CMYK": [
            39,
            31,
            17,
            2
        ],
        "RGB": [
            167,
            168,
            189
        ],
        "hex": "#a7a8bd",
        "name": "淡蓝紫",
        "pinyin": "danlanzi"
    },
    {
        "CMYK": [
            74,
            64,
            14,
            1
        ],
        "RGB": [
            97,
            100,
            159
        ],
        "hex": "#61649f",
        "name": "山梗紫",
        "pinyin": "shangengzi"
    },
    {
        "CMYK": [
            63,
            53,
            22,
            5
        ],
        "RGB": [
            116,
            117,
            155
        ],
        "hex": "#74759b",
        "name": "螺甸紫",
        "pinyin": "luodianzi"
    },
    {
        "CMYK": [
            21,
            17,
            19,
            1
        ],
        "RGB": [
            207,
            204,
            201
        ],
        "hex": "#cfccc9",
        "name": "玛瑙灰",
        "pinyin": "manaohui"
    },
    {
        "CMYK": [
            80,
            73,
            21,
            6
        ],
        "RGB": [
            82,
            82,
            136
        ],
        "hex": "#525288",
        "name": "野菊紫",
        "pinyin": "yejuzi"
    },
    {
        "CMYK": [
            100,
            93,
            21,
            5
        ],
        "RGB": [
            46,
            49,
            124
        ],
        "hex": "#2e317c",
        "name": "满天星紫",
        "pinyin": "mantianxingzi"
    },
    {
        "CMYK": [
            48,
            45,
            40,
            26
        ],
        "RGB": [
            122,
            115,
            116
        ],
        "hex": "#7a7374",
        "name": "锌灰",
        "pinyin": "xinhui"
    },
    {
        "CMYK": [
            91,
            84,
            40,
            43
        ],
        "RGB": [
            48,
            47,
            75
        ],
        "hex": "#302f4b",
        "name": "野葡萄紫",
        "pinyin": "yeputaozi"
    },
    {
        "CMYK": [
            70,
            69,
            49,
            56
        ],
        "RGB": [
            62,
            56,
            65
        ],
        "hex": "#3e3841",
        "name": "剑锋紫",
        "pinyin": "jianfengzi"
    },
    {
        "CMYK": [
            79,
            74,
            49,
            60
        ],
        "RGB": [
            50,
            47,
            59
        ],
        "hex": "#322f3b",
        "name": "龙葵紫",
        "pinyin": "longkuizi"
    },
    {
        "CMYK": [
            90,
            84,
            50,
            69
        ],
        "RGB": [
            34,
            32,
            46
        ],
        "hex": "#22202e",
        "name": "暗龙胆紫",
        "pinyin": "anlongdanzi"
    },
    {
        "CMYK": [
            98,
            93,
            48,
            73
        ],
        "RGB": [
            31,
            32,
            64
        ],
        "hex": "#1f2040",
        "name": "晶石紫",
        "pinyin": "jingshizi"
    },
    {
        "CMYK": [
            100,
            94,
            52,
            77
        ],
        "RGB": [
            19,
            17,
            36
        ],
        "hex": "#131124",
        "name": "暗蓝紫",
        "pinyin": "anlanzi"
    },
    {
        "CMYK": [
            95,
            46,
            10,
            1
        ],
        "RGB": [
            39,
            117,
            182
        ],
        "hex": "#2775b6",
        "name": "景泰蓝",
        "pinyin": "jingtailan"
    },
    {
        "CMYK": [
            96,
            47,
            11,
            1
        ],
        "RGB": [
            36,
            116,
            181
        ],
        "hex": "#2474b5",
        "name": "尼罗蓝",
        "pinyin": "niluolan"
    },
    {
        "CMYK": [
            25,
            6,
            10,
            0
        ],
        "RGB": [
            208,
            223,
            230
        ],
        "hex": "#d0dfe6",
        "name": "远天蓝",
        "pinyin": "yuantianlan"
    },
    {
        "CMYK": [
            53,
            19,
            15,
            1
        ],
        "RGB": [
            147,
            181,
            207
        ],
        "hex": "#93b5cf",
        "name": "星蓝",
        "pinyin": "xinglan"
    },
    {
        "CMYK": [
            74,
            27,
            16,
            2
        ],
        "RGB": [
            97,
            154,
            195
        ],
        "hex": "#619ac3",
        "name": "羽扇豆蓝",
        "pinyin": "yushandoulan"
    },
    {
        "CMYK": [
            95,
            45,
            10,
            1
        ],
        "RGB": [
            35,
            118,
            183
        ],
        "hex": "#2376b7",
        "name": "花青",
        "pinyin": "huaqing"
    },
    {
        "CMYK": [
            78,
            27,
            17,
            2
        ],
        "RGB": [
            86,
            152,
            195
        ],
        "hex": "#5698c3",
        "name": "睛蓝",
        "pinyin": "jinglan"
    },
    {
        "CMYK": [
            99,
            44,
            10,
            1
        ],
        "RGB": [
            33,
            119,
            184
        ],
        "hex": "#2177b8",
        "name": "虹蓝",
        "pinyin": "honglan"
    },
    {
        "CMYK": [
            43,
            4,
            16,
            0
        ],
        "RGB": [
            176,
            213,
            223
        ],
        "hex": "#b0d5df",
        "name": "湖水蓝",
        "pinyin": "hushuilan"
    },
    {
        "CMYK": [
            59,
            12,
            19,
            0
        ],
        "RGB": [
            138,
            188,
            209
        ],
        "hex": "#8abcd1",
        "name": "秋波蓝",
        "pinyin": "qiubolan"
    },
    {
        "CMYK": [
            73,
            17,
            20,
            1
        ],
        "RGB": [
            102,
            169,
            201
        ],
        "hex": "#66a9c9",
        "name": "涧石蓝",
        "pinyin": "jianshilan"
    },
    {
        "CMYK": [
            93,
            36,
            15,
            2
        ],
        "RGB": [
            41,
            131,
            187
        ],
        "hex": "#2983bb",
        "name": "潮蓝",
        "pinyin": "chaolan"
    },
    {
        "CMYK": [
            99,
            48,
            11,
            1
        ],
        "RGB": [
            23,
            114,
            180
        ],
        "hex": "#1772b4",
        "name": "群青",
        "pinyin": "qunqing"
    },
    {
        "CMYK": [
            74,
            2,
            24,
            0
        ],
        "RGB": [
            99,
            187,
            208
        ],
        "hex": "#63bbd0",
        "name": "霁青",
        "pinyin": "jiqing"
    },
    {
        "CMYK": [
            77,
            7,
            24,
            0
        ],
        "RGB": [
            92,
            179,
            204
        ],
        "hex": "#5cb3cc",
        "name": "碧青",
        "pinyin": "biqing"
    },
    {
        "CMYK": [
            94,
            32,
            17,
            3
        ],
        "RGB": [
            36,
            134,
            185
        ],
        "hex": "#2486b9",
        "name": "宝石蓝",
        "pinyin": "baoshilan"
    },
    {
        "CMYK": [
            98,
            43,
            14,
            2
        ],
        "RGB": [
            22,
            119,
            179
        ],
        "hex": "#1677b3",
        "name": "天蓝",
        "pinyin": "tianlan"
    },
    {
        "CMYK": [
            100,
            52,
            11,
            1
        ],
        "RGB": [
            18,
            107,
            174
        ],
        "hex": "#126bae",
        "name": "柏林蓝",
        "pinyin": "bolinlan"
    },
    {
        "CMYK": [
            92,
            10,
            25,
            1
        ],
        "RGB": [
            34,
            162,
            195
        ],
        "hex": "#22a2c3",
        "name": "海青",
        "pinyin": "haiqing"
    },
    {
        "CMYK": [
            94,
            16,
            23,
            3
        ],
        "RGB": [
            26,
            148,
            188
        ],
        "hex": "#1a94bc",
        "name": "钴蓝",
        "pinyin": "gulan"
    },
    {
        "CMYK": [
            95,
            25,
            20,
            4
        ],
        "RGB": [
            21,
            139,
            184
        ],
        "hex": "#158bb8",
        "name": "鸢尾蓝",
        "pinyin": "yuanweilan"
    },
    {
        "CMYK": [
            98,
            42,
            16,
            3
        ],
        "RGB": [
            17,
            119,
            176
        ],
        "hex": "#1177b0",
        "name": "牵牛花蓝",
        "pinyin": "qianniuhualan"
    },
    {
        "CMYK": [
            100,
            65,
            11,
            1
        ],
        "RGB": [
            15,
            89,
            164
        ],
        "hex": "#0f59a4",
        "name": "飞燕草蓝",
        "pinyin": "feiyancaolan"
    },
    {
        "CMYK": [
            95,
            47,
            14,
            2
        ],
        "RGB": [
            43,
            115,
            175
        ],
        "hex": "#2b73af",
        "name": "品蓝",
        "pinyin": "pinlan"
    },
    {
        "CMYK": [
            24,
            14,
            16,
            1
        ],
        "RGB": [
            205,
            209,
            211
        ],
        "hex": "#cdd1d3",
        "name": "银鱼白",
        "pinyin": "yinyubai"
    },
    {
        "CMYK": [
            93,
            49,
            17,
            3
        ],
        "RGB": [
            49,
            112,
            167
        ],
        "hex": "#3170a7",
        "name": "安安蓝",
        "pinyin": "ananlan"
    },
    {
        "CMYK": [
            64,
            52,
            39,
            28
        ],
        "RGB": [
            94,
            97,
            109
        ],
        "hex": "#5e616d",
        "name": "鱼尾灰",
        "pinyin": "yuweihui"
    },
    {
        "CMYK": [
            78,
            60,
            40,
            31
        ],
        "RGB": [
            71,
            81,
            100
        ],
        "hex": "#475164",
        "name": "鲸鱼灰",
        "pinyin": "jingyuhui"
    },
    {
        "CMYK": [
            69,
            64,
            52,
            59
        ],
        "RGB": [
            255,
            254,
            250
        ],
        "hex": "#fffefa",
        "name": "海参灰",
        "pinyin": "haishenhui"
    },
    {
        "CMYK": [
            76,
            70,
            51,
            60
        ],
        "RGB": [
            53,
            51,
            60
        ],
        "hex": "#35333c",
        "name": "沙鱼灰",
        "pinyin": "shayuhui"
    },
    {
        "CMYK": [
            100,
            89,
            54,
            79
        ],
        "RGB": [
            15,
            20,
            35
        ],
        "hex": "#0f1423",
        "name": "钢蓝",
        "pinyin": "ganglan"
    },
    {
        "CMYK": [
            35,
            13,
            13,
            0
        ],
        "RGB": [
            186,
            204,
            217
        ],
        "hex": "#baccd9",
        "name": "云水蓝",
        "pinyin": "yunshuilan"
    },
    {
        "CMYK": [
            55,
            20,
            18,
            1
        ],
        "RGB": [
            143,
            178,
            201
        ],
        "hex": "#8fb2c9",
        "name": "晴山蓝",
        "pinyin": "qingshanlan"
    },
    {
        "CMYK": [
            100,
            60,
            8,
            1
        ],
        "RGB": [
            22,
            97,
            171
        ],
        "hex": "#1661ab",
        "name": "靛青",
        "pinyin": "dianqing"
    },
    {
        "CMYK": [
            29,
            16,
            17,
            1
        ],
        "RGB": [
            196,
            203,
            207
        ],
        "hex": "#c4cbcf",
        "name": "大理石灰",
        "pinyin": "dalishihui"
    },
    {
        "CMYK": [
            100,
            67,
            16,
            3
        ],
        "RGB": [
            21,
            85,
            154
        ],
        "hex": "#15559a",
        "name": "海涛蓝",
        "pinyin": "haitaolan"
    },
    {
        "CMYK": [
            81,
            41,
            24,
            8
        ],
        "RGB": [
            78,
            124,
            161
        ],
        "hex": "#4e7ca1",
        "name": "蝶翅蓝",
        "pinyin": "diechilan"
    },
    {
        "CMYK": [
            93,
            50,
            21,
            6
        ],
        "RGB": [
            52,
            108,
            156
        ],
        "hex": "#346c9c",
        "name": "海军蓝",
        "pinyin": "haijunlan"
    },
    {
        "CMYK": [
            77,
            68,
            54,
            66
        ],
        "RGB": [
            47,
            47,
            53
        ],
        "hex": "#2f2f35",
        "name": "水牛灰",
        "pinyin": "shuiniuhui"
    },
    {
        "CMYK": [
            80,
            70,
            53,
            65
        ],
        "RGB": [
            45,
            46,
            54
        ],
        "hex": "#2d2e36",
        "name": "牛角灰",
        "pinyin": "niujiaohui"
    },
    {
        "CMYK": [
            100,
            86,
            54,
            78
        ],
        "RGB": [
            19,
            24,
            36
        ],
        "hex": "#131824",
        "name": "燕颔蓝",
        "pinyin": "yanhanlan"
    },
    {
        "CMYK": [
            21,
            6,
            10,
            0
        ],
        "RGB": [
            216,
            227,
            231
        ],
        "hex": "#d8e3e7",
        "name": "云峰白",
        "pinyin": "yunfengbai"
    },
    {
        "CMYK": [
            32,
            8,
            13,
            0
        ],
        "RGB": [
            195,
            215,
            223
        ],
        "hex": "#c3d7df",
        "name": "井天蓝",
        "pinyin": "jingtianlan"
    },
    {
        "CMYK": [
            91,
            24,
            22,
            4
        ],
        "RGB": [
            47,
            144,
            185
        ],
        "hex": "#2f90b9",
        "name": "云山蓝",
        "pinyin": "yunshanlan"
    },
    {
        "CMYK": [
            96,
            34,
            18,
            4
        ],
        "RGB": [
            23,
            129,
            181
        ],
        "hex": "#1781b5",
        "name": "釉蓝",
        "pinyin": "youlan"
    },
    {
        "CMYK": [
            28,
            12,
            17,
            0
        ],
        "RGB": [
            199,
            210,
            212
        ],
        "hex": "#c7d2d4",
        "name": "鸥蓝",
        "pinyin": "oulan"
    },
    {
        "CMYK": [
            100,
            53,
            21,
            6
        ],
        "RGB": [
            17,
            101,
            154
        ],
        "hex": "#11659a",
        "name": "搪磁蓝",
        "pinyin": "tangcilan"
    },
    {
        "CMYK": [
            29,
            18,
            21,
            2
        ],
        "RGB": [
            192,
            196,
            195
        ],
        "hex": "#c0c4c3",
        "name": "月影白",
        "pinyin": "yueyingbai"
    },
    {
        "CMYK": [
            36,
            20,
            23,
            2
        ],
        "RGB": [
            178,
            187,
            190
        ],
        "hex": "#b2bbbe",
        "name": "星灰",
        "pinyin": "xinghui"
    },
    {
        "CMYK": [
            70,
            38,
            36,
            18
        ],
        "RGB": [
            94,
            121,
            135
        ],
        "hex": "#5e7987",
        "name": "淡蓝灰",
        "pinyin": "danlanhui"
    },
    {
        "CMYK": [
            100,
            68,
            32,
            20
        ],
        "RGB": [
            20,
            74,
            116
        ],
        "hex": "#144a74",
        "name": "鷃蓝",
        "pinyin": "yanlan"
    },
    {
        "CMYK": [
            55,
            40,
            40,
            23
        ],
        "RGB": [
            116,
            120,
            122
        ],
        "hex": "#74787a",
        "name": "嫩灰",
        "pinyin": "nenhui"
    },
    {
        "CMYK": [
            77,
            50,
            41,
            31
        ],
        "RGB": [
            73,
            92,
            105
        ],
        "hex": "#495c69",
        "name": "战舰灰",
        "pinyin": "zhanjianhui"
    },
    {
        "CMYK": [
            67,
            57,
            49,
            49
        ],
        "RGB": [
            71,
            72,
            76
        ],
        "hex": "#47484c",
        "name": "瓦罐灰",
        "pinyin": "waguanhui"
    },
    {
        "CMYK": [
            87,
            69,
            51,
            58
        ],
        "RGB": [
            43,
            51,
            62
        ],
        "hex": "#2b333e",
        "name": "青灰",
        "pinyin": "qinghui"
    },
    {
        "CMYK": [
            100,
            77,
            50,
            62
        ],
        "RGB": [
            28,
            41,
            56
        ],
        "hex": "#1c2938",
        "name": "鸽蓝",
        "pinyin": "gelan"
    },
    {
        "CMYK": [
            100,
            82,
            51,
            64
        ],
        "RGB": [
            20,
            35,
            52
        ],
        "hex": "#142334",
        "name": "钢青",
        "pinyin": "gangqing"
    },
    {
        "CMYK": [
            100,
            84,
            51,
            68
        ],
        "RGB": [
            16,
            31,
            48
        ],
        "hex": "#101f30",
        "name": "暗蓝",
        "pinyin": "anlan"
    },
    {
        "CMYK": [
            11,
            0,
            8,
            0
        ],
        "RGB": [
            238,
            247,
            242
        ],
        "hex": "#eef7f2",
        "name": "月白",
        "pinyin": "yuebai"
    },
    {
        "CMYK": [
            33,
            0,
            14,
            0
        ],
        "RGB": [
            198,
            230,
            232
        ],
        "hex": "#c6e6e8",
        "name": "海天蓝",
        "pinyin": "haitianlan"
    },
    {
        "CMYK": [
            57,
            0,
            22,
            0
        ],
        "RGB": [
            147,
            213,
            220
        ],
        "hex": "#93d5dc",
        "name": "清水蓝",
        "pinyin": "qingshuilan"
    },
    {
        "CMYK": [
            79,
            0,
            27,
            0
        ],
        "RGB": [
            81,
            196,
            211
        ],
        "hex": "#51c4d3",
        "name": "瀑布蓝",
        "pinyin": "pubulan"
    },
    {
        "CMYK": [
            89,
            0,
            29,
            0
        ],
        "RGB": [
            41,
            183,
            203
        ],
        "hex": "#29b7cb",
        "name": "蔚蓝",
        "pinyin": "weilan"
    },
    {
        "CMYK": [
            92,
            0,
            28,
            0
        ],
        "RGB": [
            14,
            176,
            201
        ],
        "hex": "#0eb0c9",
        "name": "孔雀蓝",
        "pinyin": "kongquelan"
    },
    {
        "CMYK": [
            93,
            0,
            31,
            0
        ],
        "RGB": [
            16,
            174,
            194
        ],
        "hex": "#10aec2",
        "name": "甸子蓝",
        "pinyin": "dianzilan"
    },
    {
        "CMYK": [
            78,
            36,
            0,
            0
        ],
        "RGB": [
            87,
            195,
            194
        ],
        "hex": "#57c3c2",
        "name": "石绿",
        "pinyin": "shilv"
    },
    {
        "CMYK": [
            40,
            0,
            30,
            0
        ],
        "RGB": [
            185,
            222,
            201
        ],
        "hex": "#b9dec9",
        "name": "竹篁绿",
        "pinyin": "zhuhuanglv"
    },
    {
        "CMYK": [
            64,
            0,
            46,
            0
        ],
        "RGB": [
            131,
            203,
            172
        ],
        "hex": "#83cbac",
        "name": "粉绿",
        "pinyin": "fenlv"
    },
    {
        "CMYK": [
            95,
            0,
            52,
            0
        ],
        "RGB": [
            18,
            170,
            156
        ],
        "hex": "#12aa9c",
        "name": "美蝶绿",
        "pinyin": "meidielv"
    },
    {
        "CMYK": [
            75,
            0,
            61,
            0
        ],
        "RGB": [
            102,
            193,
            140
        ],
        "hex": "#66c18c",
        "name": "毛绿",
        "pinyin": "maolv"
    },
    {
        "CMYK": [
            78,
            0,
            62,
            0
        ],
        "RGB": [
            93,
            190,
            138
        ],
        "hex": "#5dbe8a",
        "name": "蔻梢绿",
        "pinyin": "koushaolv"
    },
    {
        "CMYK": [
            81,
            0,
            62,
            0
        ],
        "RGB": [
            85,
            187,
            138
        ],
        "hex": "#55bb8a",
        "name": "麦苗绿",
        "pinyin": "maimiaolv"
    },
    {
        "CMYK": [
            86,
            0,
            63,
            0
        ],
        "RGB": [
            69,
            183,
            135
        ],
        "hex": "#45b787",
        "name": "蛙绿",
        "pinyin": "walv"
    },
    {
        "CMYK": [
            92,
            0,
            64,
            0
        ],
        "RGB": [
            43,
            174,
            133
        ],
        "hex": "#2bae85",
        "name": "铜绿",
        "pinyin": "tonglv"
    },
    {
        "CMYK": [
            96,
            0,
            64,
            0
        ],
        "RGB": [
            27,
            167,
            132
        ],
        "hex": "#1ba784",
        "name": "竹绿",
        "pinyin": "zhulv"
    },
    {
        "CMYK": [
            98,
            2,
            64,
            0
        ],
        "RGB": [
            18,
            161,
            130
        ],
        "hex": "#12a182",
        "name": "蓝绿",
        "pinyin": "lanlv"
    },
    {
        "CMYK": [
            32,
            7,
            18,
            0
        ],
        "RGB": [
            196,
            215,
            214
        ],
        "hex": "#c4d7d6",
        "name": "穹灰",
        "pinyin": "qionghui"
    },
    {
        "CMYK": [
            94,
            11,
            33,
            1
        ],
        "RGB": [
            30,
            158,
            179
        ],
        "hex": "#1e9eb3",
        "name": "翠蓝",
        "pinyin": "cuilan"
    },
    {
        "CMYK": [
            96,
            16,
            31,
            3
        ],
        "RGB": [
            15,
            149,
            176
        ],
        "hex": "#0f95b0",
        "name": "胆矾蓝",
        "pinyin": "danfanlan"
    },
    {
        "CMYK": [
            96,
            18,
            34,
            4
        ],
        "RGB": [
            20,
            145,
            168
        ],
        "hex": "#1491a8",
        "name": "樫鸟蓝",
        "pinyin": "jianniaolan"
    },
    {
        "CMYK": [
            64,
            18,
            32,
            2
        ],
        "RGB": [
            124,
            171,
            177
        ],
        "hex": "#7cabb1",
        "name": "闪蓝",
        "pinyin": "shanlan"
    },
    {
        "CMYK": [
            40,
            24,
            32,
            6
        ],
        "RGB": [
            164,
            172,
            167
        ],
        "hex": "#a4aca7",
        "name": "冰山蓝",
        "pinyin": "bingshanlan"
    },
    {
        "CMYK": [
            56,
            26,
            36,
            7
        ],
        "RGB": [
            134,
            157,
            157
        ],
        "hex": "#869d9d",
        "name": "虾壳青",
        "pinyin": "xiakeqing"
    },
    {
        "CMYK": [
            71,
            28,
            39,
            10
        ],
        "RGB": [
            100,
            142,
            147
        ],
        "hex": "#648e93",
        "name": "晚波蓝",
        "pinyin": "wanbolan"
    },
    {
        "CMYK": [
            89,
            27,
            41,
            13
        ],
        "RGB": [
            59,
            129,
            140
        ],
        "hex": "#3b818c",
        "name": "蜻蜓蓝",
        "pinyin": "qingtinglan"
    },
    {
        "CMYK": [
            99,
            33,
            38,
            21
        ],
        "RGB": [
            18,
            110,
            130
        ],
        "hex": "#126e82",
        "name": "玉鈫蓝",
        "pinyin": "yuqinlan"
    },
    {
        "CMYK": [
            57,
            37,
            42,
            21
        ],
        "RGB": [
            115,
            124,
            123
        ],
        "hex": "#737c7b",
        "name": "垩灰",
        "pinyin": "ehui"
    },
    {
        "CMYK": [
            65,
            40,
            44,
            26
        ],
        "RGB": [
            97,
            113,
            114
        ],
        "hex": "#617172",
        "name": "夏云灰",
        "pinyin": "xiayunhui"
    },
    {
        "CMYK": [
            100,
            52,
            46,
            43
        ],
        "RGB": [
            19,
            72,
            87
        ],
        "hex": "#134857",
        "name": "苍蓝",
        "pinyin": "canglan"
    },
    {
        "CMYK": [
            67,
            53,
            51,
            50
        ],
        "RGB": [
            71,
            75,
            76
        ],
        "hex": "#474b4c",
        "name": "黄昏灰",
        "pinyin": "huanghunhui"
    },
    {
        "CMYK": [
            94,
            58,
            54,
            60
        ],
        "RGB": [
            33,
            55,
            61
        ],
        "hex": "#21373d",
        "name": "灰蓝",
        "pinyin": "huilan"
    },
    {
        "CMYK": [
            100,
            64,
            56,
            68
        ],
        "RGB": [
            19,
            44,
            51
        ],
        "hex": "#132c33",
        "name": "深灰蓝",
        "pinyin": "shenhuilan"
    },
    {
        "CMYK": [
            49,
            5,
            37,
            0
        ],
        "RGB": [
            164,
            202,
            182
        ],
        "hex": "#a4cab6",
        "name": "玉簪绿",
        "pinyin": "yuzanlv"
    },
    {
        "CMYK": [
            96,
            12,
            66,
            2
        ],
        "RGB": [
            44,
            150,
            120
        ],
        "hex": "#2c9678",
        "name": "青矾绿",
        "pinyin": "qingfanlv"
    },
    {
        "CMYK": [
            52,
            11,
            37,
            0
        ],
        "RGB": [
            154,
            190,
            175
        ],
        "hex": "#9abeaf",
        "name": "草原远绿",
        "pinyin": "caoyuanyuanlv"
    },
    {
        "CMYK": [
            74,
            14,
            51,
            1
        ],
        "RGB": [
            105,
            167,
            148
        ],
        "hex": "#69a794",
        "name": "梧枝绿",
        "pinyin": "wuzhilv"
    },
    {
        "CMYK": [
            55,
            16,
            40,
            1
        ],
        "RGB": [
            146,
            179,
            165
        ],
        "hex": "#92b3a5",
        "name": "浪花绿",
        "pinyin": "langhualv"
    },
    {
        "CMYK": [
            99,
            23,
            70,
            10
        ],
        "RGB": [
            36,
            128,
            103
        ],
        "hex": "#248067",
        "name": "海王绿",
        "pinyin": "haiwanglv"
    },
    {
        "CMYK": [
            88,
            24,
            61,
            9
        ],
        "RGB": [
            66,
            134,
            117
        ],
        "hex": "#428675",
        "name": "亚丁绿",
        "pinyin": "yadinglv"
    },
    {
        "CMYK": [
            40,
            27,
            36,
            8
        ],
        "RGB": [
            159,
            163,
            154
        ],
        "hex": "#9fa39a",
        "name": "镍灰",
        "pinyin": "niehui"
    },
    {
        "CMYK": [
            52,
            28,
            42,
            10
        ],
        "RGB": [
            138,
            152,
            142
        ],
        "hex": "#8a988e",
        "name": "明灰",
        "pinyin": "minghui"
    },
    {
        "CMYK": [
            63,
            31,
            50,
            14
        ],
        "RGB": [
            112,
            136,
            125
        ],
        "hex": "#70887d",
        "name": "淡绿灰",
        "pinyin": "danlvhui"
    },
    {
        "CMYK": [
            82,
            32,
            60,
            20
        ],
        "RGB": [
            73,
            117,
            104
        ],
        "hex": "#497568",
        "name": "飞泉绿",
        "pinyin": "feiquanlv"
    },
    {
        "CMYK": [
            62,
            43,
            52,
            34
        ],
        "RGB": [
            93,
            101,
            95
        ],
        "hex": "#5d655f",
        "name": "狼烟灰",
        "pinyin": "langyanhui"
    },
    {
        "CMYK": [
            85,
            44,
            64,
            52
        ],
        "RGB": [
            49,
            74,
            67
        ],
        "hex": "#314a43",
        "name": "绿灰",
        "pinyin": "lvhui"
    },
    {
        "CMYK": [
            93,
            46,
            70,
            61
        ],
        "RGB": [
            34,
            62,
            54
        ],
        "hex": "#223e36",
        "name": "苍绿",
        "pinyin": "canglv"
    },
    {
        "CMYK": [
            98,
            46,
            73,
            63
        ],
        "RGB": [
            26,
            59,
            50
        ],
        "hex": "#1a3b32",
        "name": "深海绿",
        "pinyin": "shenhailv"
    },
    {
        "CMYK": [
            67,
            60,
            57,
            68
        ],
        "RGB": [
            54,
            52,
            51
        ],
        "hex": "#363433",
        "name": "长石灰",
        "pinyin": "changshihui"
    },
    {
        "CMYK": [
            82,
            60,
            65,
            80
        ],
        "RGB": [
            31,
            38,
            35
        ],
        "hex": "#1f2623",
        "name": "苷蓝绿",
        "pinyin": "ganlanlv"
    },
    {
        "CMYK": [
            90,
            62,
            67,
            86
        ],
        "RGB": [
            20,
            30,
            27
        ],
        "hex": "#141e1b",
        "name": "莽丛绿",
        "pinyin": "mangconglv"
    },
    {
        "CMYK": [
            33,
            1,
            29,
            0
        ],
        "RGB": [
            198,
            223,
            200
        ],
        "hex": "#c6dfc8",
        "name": "淡翠绿",
        "pinyin": "dancuilv"
    },
    {
        "CMYK": [
            53,
            1,
            44,
            0
        ],
        "RGB": [
            158,
            204,
            171
        ],
        "hex": "#9eccab",
        "name": "明绿",
        "pinyin": "minglv"
    },
    {
        "CMYK": [
            75,
            0,
            59,
            0
        ],
        "RGB": [
            104,
            184,
            142
        ],
        "hex": "#68b88e",
        "name": "田园绿",
        "pinyin": "tianyuanlv"
    },
    {
        "CMYK": [
            98,
            0,
            82,
            0
        ],
        "RGB": [
            32,
            161,
            98
        ],
        "hex": "#20a162",
        "name": "翠绿",
        "pinyin": "cuilv"
    },
    {
        "CMYK": [
            78,
            6,
            62,
            0
        ],
        "RGB": [
            97,
            172,
            133
        ],
        "hex": "#61ac85",
        "name": "淡绿",
        "pinyin": "danlv"
    },
    {
        "CMYK": [
            90,
            7,
            73,
            0
        ],
        "RGB": [
            64,
            160,
            112
        ],
        "hex": "#40a070",
        "name": "葱绿",
        "pinyin": "conglv"
    },
    {
        "CMYK": [
            99,
            10,
            91,
            2
        ],
        "RGB": [
            34,
            148,
            83
        ],
        "hex": "#229453",
        "name": "孔雀绿",
        "pinyin": "kongquelv"
    },
    {
        "CMYK": [
            27,
            11,
            27,
            1
        ],
        "RGB": [
            202,
            211,
            195
        ],
        "hex": "#cad3c3",
        "name": "艾绿",
        "pinyin": "ailv"
    },
    {
        "CMYK": [
            92,
            14,
            76,
            2
        ],
        "RGB": [
            60,
            149,
            102
        ],
        "hex": "#3c9566",
        "name": "蟾绿",
        "pinyin": "chanlv"
    },
    {
        "CMYK": [
            100,
            17,
            92,
            5
        ],
        "RGB": [
            32,
            137,
            77
        ],
        "hex": "#20894d",
        "name": "宫殿绿",
        "pinyin": "gongdianlv"
    },
    {
        "CMYK": [
            61,
            19,
            52,
            3
        ],
        "RGB": [
            131,
            167,
            141
        ],
        "hex": "#83a78d",
        "name": "松霜绿",
        "pinyin": "songshuanglv"
    },
    {
        "CMYK": [
            81,
            19,
            67,
            4
        ],
        "RGB": [
            87,
            149,
            114
        ],
        "hex": "#579572",
        "name": "蛋白石绿",
        "pinyin": "danbaishilv"
    },
    {
        "CMYK": [
            100,
            22,
            90,
            10
        ],
        "RGB": [
            32,
            127,
            76
        ],
        "hex": "#207f4c",
        "name": "薄荷绿",
        "pinyin": "bohelv"
    },
    {
        "CMYK": [
            66,
            29,
            58,
            12
        ],
        "RGB": [
            110,
            139,
            116
        ],
        "hex": "#6e8b74",
        "name": "瓦松绿",
        "pinyin": "wasonglv"
    },
    {
        "CMYK": [
            100,
            31,
            91,
            25
        ],
        "RGB": [
            26,
            104,
            64
        ],
        "hex": "#1a6840",
        "name": "荷叶绿",
        "pinyin": "heyelv"
    },
    {
        "CMYK": [
            62,
            42,
            56,
            34
        ],
        "RGB": [
            94,
            102,
            91
        ],
        "hex": "#5e665b",
        "name": "田螺绿",
        "pinyin": "tianluolv"
    },
    {
        "CMYK": [
            74,
            42,
            65,
            40
        ],
        "RGB": [
            72,
            91,
            77
        ],
        "hex": "#485b4d",
        "name": "白屈菜绿",
        "pinyin": "baiqucailv"
    },
    {
        "CMYK": [
            64,
            57,
            60,
            67
        ],
        "RGB": [
            57,
            55,
            51
        ],
        "hex": "#393733",
        "name": "河豚灰",
        "pinyin": "hetunhui"
    },
    {
        "CMYK": [
            68,
            56,
            60,
            66
        ],
        "RGB": [
            55,
            56,
            52
        ],
        "hex": "#373834",
        "name": "蒽油绿",
        "pinyin": "enyoulv"
    },
    {
        "CMYK": [
            76,
            56,
            75,
            72
        ],
        "RGB": [
            43,
            49,
            44
        ],
        "hex": "#2b312c",
        "name": "槲寄生绿",
        "pinyin": "hujishenglv"
    },
    {
        "CMYK": [
            91,
            60,
            76,
            83
        ],
        "RGB": [
            21,
            35,
            27
        ],
        "hex": "#15231b",
        "name": "云杉绿",
        "pinyin": "yunshanlv"
    },
    {
        "CMYK": [
            9,
            1,
            14,
            0
        ],
        "RGB": [
            240,
            245,
            229
        ],
        "hex": "#f0f5e5",
        "name": "嫩菊绿",
        "pinyin": "nenjulv"
    },
    {
        "CMYK": [
            20,
            1,
            23,
            0
        ],
        "RGB": [
            223,
            236,
            213
        ],
        "hex": "#dfecd5",
        "name": "艾背绿",
        "pinyin": "aibeilv"
    },
    {
        "CMYK": [
            47,
            0,
            49,
            0
        ],
        "RGB": [
            173,
            213,
            162
        ],
        "hex": "#add5a2",
        "name": "嘉陵水绿",
        "pinyin": "jialingshuilv"
    },
    {
        "CMYK": [
            89,
            0,
            96,
            0
        ],
        "RGB": [
            65,
            179,
            73
        ],
        "hex": "#41b349",
        "name": "玉髓绿",
        "pinyin": "yusuilv"
    },
    {
        "CMYK": [
            88,
            0,
            99,
            0
        ],
        "RGB": [
            67,
            178,
            68
        ],
        "hex": "#43b244",
        "name": "鲜绿",
        "pinyin": "xianlv"
    },
    {
        "CMYK": [
            90,
            0,
            100,
            0
        ],
        "RGB": [
            65,
            174,
            60
        ],
        "hex": "#41ae3c",
        "name": "宝石绿",
        "pinyin": "baoshilv"
    },
    {
        "CMYK": [
            18,
            4,
            33,
            0
        ],
        "RGB": [
            226,
            231,
            191
        ],
        "hex": "#e2e7bf",
        "name": "海沬绿",
        "pinyin": "haimeilv"
    },
    {
        "CMYK": [
            28,
            4,
            44,
            0
        ],
        "RGB": [
            208,
            222,
            170
        ],
        "hex": "#d0deaa",
        "name": "姚黄",
        "pinyin": "yaohuang"
    },
    {
        "CMYK": [
            44,
            3,
            61,
            0
        ],
        "RGB": [
            178,
            207,
            135
        ],
        "hex": "#b2cf87",
        "name": "橄榄石绿",
        "pinyin": "ganlanshilv"
    },
    {
        "CMYK": [
            62,
            0,
            76,
            0
        ],
        "RGB": [
            140,
            194,
            105
        ],
        "hex": "#8cc269",
        "name": "水绿",
        "pinyin": "shuilv"
    },
    {
        "CMYK": [
            42,
            3,
            67,
            0
        ],
        "RGB": [
            183,
            208,
            122
        ],
        "hex": "#b7d07a",
        "name": "芦苇绿",
        "pinyin": "luweilv"
    },
    {
        "CMYK": [
            28,
            6,
            66,
            0
        ],
        "RGB": [
            210,
            217,
            122
        ],
        "hex": "#d2d97a",
        "name": "槐花黄绿",
        "pinyin": "huaihuahuanglv"
    },
    {
        "CMYK": [
            41,
            4,
            76,
            0
        ],
        "RGB": [
            186,
            207,
            101
        ],
        "hex": "#bacf65",
        "name": "苹果绿",
        "pinyin": "pingguolv"
    },
    {
        "CMYK": [
            58,
            1,
            88,
            0
        ],
        "RGB": [
            150,
            194,
            78
        ],
        "hex": "#96c24e",
        "name": "芽绿",
        "pinyin": "yalv"
    },
    {
        "CMYK": [
            19,
            9,
            84,
            1
        ],
        "RGB": [
            226,
            216,
            73
        ],
        "hex": "#e2d849",
        "name": "蝶黄",
        "pinyin": "diehuang"
    },
    {
        "CMYK": [
            38,
            8,
            94,
            1
        ],
        "RGB": [
            190,
            201,
            54
        ],
        "hex": "#bec936",
        "name": "橄榄黄绿",
        "pinyin": "ganlanhuanglv"
    },
    {
        "CMYK": [
            81,
            0,
            100,
            0
        ],
        "RGB": [
            91,
            174,
            35
        ],
        "hex": "#5bae23",
        "name": "鹦鹉绿",
        "pinyin": "yingwulv"
    },
    {
        "CMYK": [
            84,
            64,
            94,
            45
        ],
        "RGB": [
            37,
            61,
            36
        ],
        "hex": "#253d24",
        "name": "油绿",
        "pinyin": "youlv"
    },
    {
        "CMYK": [
            0,
            1,
            4,
            0
        ],
        "RGB": [
            255,
            254,
            248
        ],
        "hex": "#fffef8",
        "name": "象牙白",
        "pinyin": "xiangyabai"
    },
    {
        "CMYK": [
            3,
            5,
            8,
            0
        ],
        "RGB": [
            248,
            244,
            237
        ],
        "hex": "#f8f4ed",
        "name": "汉白玉",
        "pinyin": "hanbaiyu"
    },
    {
        "CMYK": [
            0,
            1,
            3,
            0
        ],
        "RGB": [
            255,
            254,
            249
        ],
        "hex": "#fffef9",
        "name": "雪白",
        "pinyin": "xuebai"
    },
    {
        "CMYK": [
            4,
            4,
            8,
            0
        ],
        "RGB": [
            247,
            244,
            237
        ],
        "hex": "#f7f4ed",
        "name": "鱼肚白",
        "pinyin": "yudubai"
    },
    {
        "CMYK": [
            12,
            12,
            16,
            0
        ],
        "RGB": [
            228,
            223,
            215
        ],
        "hex": "#e4dfd7",
        "name": "珍珠灰",
        "pinyin": "zhenzhuhui"
    },
    {
        "CMYK": [
            16,
            15,
            20,
            1
        ],
        "RGB": [
            218,
            212,
            203
        ],
        "hex": "#dad4cb",
        "name": "浅灰",
        "pinyin": "qianhui"
    },
    {
        "CMYK": [
            28,
            5,
            30,
            5
        ],
        "RGB": [
            187,
            181,
            172
        ],
        "hex": "#bbb5ac",
        "name": "铅灰",
        "pinyin": "qianhui"
    },
    {
        "CMYK": [
            28,
            25,
            30,
            5
        ],
        "RGB": [
            187,
            181,
            172
        ],
        "hex": "#bbb5ac",
        "name": "中灰",
        "pinyin": "zhonghui"
    },
    {
        "CMYK": [
            42,
            40,
            43,
            23
        ],
        "RGB": [
            134,
            126,
            118
        ],
        "hex": "#867e76",
        "name": "瓦灰",
        "pinyin": "wahui"
    },
    {
        "CMYK": [
            43,
            40,
            44,
            42
        ],
        "RGB": [
            132,
            124,
            116
        ],
        "hex": "#847c74",
        "name": "夜灰",
        "pinyin": "yehui"
    },
    {
        "CMYK": [
            42,
            42,
            45,
            27
        ],
        "RGB": [
            128,
            118,
            110
        ],
        "hex": "#80766e",
        "name": "雁灰",
        "pinyin": "yanhui"
    },
    {
        "CMYK": [
            42,
            42,
            46,
            27
        ],
        "RGB": [
            129,
            119,
            110
        ],
        "hex": "#81776e",
        "name": "深灰",
        "pinyin": "shenhui"
    }
  ]
  jpn=[
    {
        "name": "桜色",
        "hex": "#bf242a",
        "RGB": [
            42,
            36,
            191
        ]
    },
    {
        "name": "薄桜",
        "hex": "#fdeff2",
        "RGB": [
            242,
            239,
            253
        ]
    },
    {
        "name": "桜鼠",
        "hex": "#e9dfe5",
        "RGB": [
            229,
            223,
            233
        ]
    },
    {
        "name": "鸨鼠",
        "hex": "#e4d2d8",
        "RGB": [
            216,
            210,
            228
        ]
    },
    {
        "name": "虹色",
        "hex": "#f6bfbc",
        "RGB": [
            188,
            191,
            246
        ]
    },
    {
        "name": "珊瑚色",
        "hex": "#f5b1aa",
        "RGB": [
            170,
            177,
            245
        ]
    },
    {
        "name": "一斤染",
        "hex": "#f5b199",
        "RGB": [
            153,
            177,
            245
        ]
    },
    {
        "name": "宍色",
        "hex": "#efab93",
        "RGB": [
            147,
            171,
            239
        ]
    },
    {
        "name": "红梅色",
        "hex": "#f2a0a1",
        "RGB": [
            161,
            160,
            242
        ]
    },
    {
        "name": "薄红",
        "hex": "#f0908d",
        "RGB": [
            141,
            144,
            240
        ]
    },
    {
        "name": "甚三红",
        "hex": "#ee827c",
        "RGB": [
            124,
            130,
            238
        ]
    },
    {
        "name": "桃色",
        "hex": "#f09199",
        "RGB": [
            153,
            145,
            240
        ]
    },
    {
        "name": "鸨色",
        "hex": "#f4b3c2",
        "RGB": [
            194,
            179,
            244
        ]
    },
    {
        "name": "撫子色",
        "hex": "#eebbcb",
        "RGB": [
            203,
            187,
            238
        ]
    },
    {
        "name": "灰梅",
        "hex": "#e8d3c7",
        "RGB": [
            199,
            211,
            232
        ]
    },
    {
        "name": "灰桜",
        "hex": "#e8d3d1",
        "RGB": [
            209,
            211,
            232
        ]
    },
    {
        "name": "淡红藤",
        "hex": "#e6cde3",
        "RGB": [
            227,
            205,
            230
        ]
    },
    {
        "name": "石竹色",
        "hex": "#e5abbe",
        "RGB": [
            190,
            171,
            229
        ]
    },
    {
        "name": "薄红梅",
        "hex": "#e597b2",
        "RGB": [
            178,
            151,
            229
        ]
    },
    {
        "name": "桃花色",
        "hex": "#e198b4",
        "RGB": [
            180,
            152,
            225
        ]
    },
    {
        "name": "水柿",
        "hex": "#e4ab9b",
        "RGB": [
            155,
            171,
            228
        ]
    },
    {
        "name": "ときがら茶",
        "hex": "#e09e87",
        "RGB": [
            135,
            158,
            224
        ]
    },
    {
        "name": "退红",
        "hex": "#d69090",
        "RGB": [
            144,
            144,
            214
        ]
    },
    {
        "name": "薄柿",
        "hex": "#d4acad",
        "RGB": [
            173,
            172,
            212
        ]
    },
    {
        "name": "长春色",
        "hex": "#c97586",
        "RGB": [
            134,
            117,
            201
        ]
    },
    {
        "name": "梅鼠",
        "hex": "#c099a0",
        "RGB": [
            160,
            153,
            192
        ]
    },
    {
        "name": "鸨浅葱",
        "hex": "#b88884",
        "RGB": [
            132,
            136,
            184
        ]
    },
    {
        "name": "梅染",
        "hex": "#b48a76",
        "RGB": [
            118,
            138,
            180
        ]
    },
    {
        "name": "苏芳香",
        "hex": "#a86965",
        "RGB": [
            101,
            105,
            168
        ]
    },
    {
        "name": "浅苏芳",
        "hex": "#a25768",
        "RGB": [
            104,
            87,
            162
        ]
    },
    {
        "name": "真朱",
        "hex": "#ec6d71",
        "RGB": [
            113,
            109,
            236
        ]
    },
    {
        "name": "赤紫",
        "hex": "#eb6ea5",
        "RGB": [
            165,
            110,
            235
        ]
    },
    {
        "name": "躑躅色",
        "hex": "#e95295",
        "RGB": [
            149,
            82,
            233
        ]
    },
    {
        "name": "牡丹色",
        "hex": "#e7609e",
        "RGB": [
            158,
            96,
            231
        ]
    },
    {
        "name": "今样色",
        "hex": "#d0576b",
        "RGB": [
            107,
            87,
            208
        ]
    },
    {
        "name": "中红",
        "hex": "#c85179",
        "RGB": [
            121,
            81,
            200
        ]
    },
    {
        "name": "蔷薇色",
        "hex": "#e9546b",
        "RGB": [
            107,
            84,
            233
        ]
    },
    {
        "name": "韩红",
        "hex": "#e95464",
        "RGB": [
            100,
            84,
            233
        ]
    },
    {
        "name": "银朱",
        "hex": "#c85554",
        "RGB": [
            84,
            85,
            200
        ]
    },
    {
        "name": "赤红",
        "hex": "#c53d43",
        "RGB": [
            67,
            61,
            197
        ]
    },
    {
        "name": "红緋",
        "hex": "#e83929",
        "RGB": [
            41,
            57,
            232
        ]
    },
    {
        "name": "赤",
        "hex": "#e60033",
        "RGB": [
            51,
            0,
            230
        ]
    },
    {
        "name": "猩緋",
        "hex": "#e2041b",
        "RGB": [
            27,
            4,
            226
        ]
    },
    {
        "name": "红",
        "hex": "#d7003a",
        "RGB": [
            58,
            0,
            215
        ]
    },
    {
        "name": "深緋",
        "hex": "#c9171e",
        "RGB": [
            30,
            23,
            201
        ]
    },
    {
        "name": "绯色",
        "hex": "#d3381c",
        "RGB": [
            28,
            56,
            211
        ]
    },
    {
        "name": "赤丹",
        "hex": "#ce5242",
        "RGB": [
            66,
            82,
            206
        ]
    },
    {
        "name": "红赤",
        "hex": "#d9333f",
        "RGB": [
            63,
            51,
            217
        ]
    },
    {
        "name": "胭脂",
        "hex": "#b94047",
        "RGB": [
            71,
            64,
            185
        ]
    },
    {
        "name": "朱緋",
        "hex": "#ba2636",
        "RGB": [
            54,
            38,
            186
        ]
    },
    {
        "name": "茜色",
        "hex": "#b7282e",
        "RGB": [
            46,
            40,
            183
        ]
    },
    {
        "name": "深海老茶",
        "hex": "#a73836",
        "RGB": [
            54,
            56,
            167
        ]
    },
    {
        "name": "苏芳",
        "hex": "#9e3d3f",
        "RGB": [
            63,
            61,
            158
        ]
    },
    {
        "name": "真红",
        "hex": "#a22041",
        "RGB": [
            65,
            32,
            162
        ]
    },
    {
        "name": "浓红",
        "hex": "#a22041",
        "RGB": [
            65,
            32,
            162
        ]
    },
    {
        "name": "象牙色",
        "hex": "#f8f4e6",
        "RGB": [
            230,
            244,
            248
        ]
    },
    {
        "name": "练色",
        "hex": "#ede4cd",
        "RGB": [
            205,
            228,
            237
        ]
    },
    {
        "name": "灰白色",
        "hex": "#e9e4d4",
        "RGB": [
            212,
            228,
            233
        ]
    },
    {
        "name": "蒸栗色",
        "hex": "#ede1a9",
        "RGB": [
            169,
            225,
            237
        ]
    },
    {
        "name": "女郎花",
        "hex": "#f2f2b0",
        "RGB": [
            176,
            242,
            242
        ]
    },
    {
        "name": "枯草色",
        "hex": "#e4dc8a",
        "RGB": [
            138,
            220,
            228
        ]
    },
    {
        "name": "淡黄",
        "hex": "#f8e58c",
        "RGB": [
            140,
            229,
            248
        ]
    },
    {
        "name": "白茶",
        "hex": "#ddbb99",
        "RGB": [
            153,
            187,
            221
        ]
    },
    {
        "name": "赤白橡",
        "hex": "#d7a98c",
        "RGB": [
            140,
            169,
            215
        ]
    },
    {
        "name": "洗柿",
        "hex": "#f2c9ac",
        "RGB": [
            172,
            201,
            242
        ]
    },
    {
        "name": "鸟の子色",
        "hex": "#fff1cf",
        "RGB": [
            207,
            241,
            255
        ]
    },
    {
        "name": "蜂蜜色",
        "hex": "#fddea5",
        "RGB": [
            165,
            222,
            253
        ]
    },
    {
        "name": "肌色",
        "hex": "#fce2c4",
        "RGB": [
            196,
            226,
            252
        ]
    },
    {
        "name": "薄卵色",
        "hex": "#fde8d0",
        "RGB": [
            208,
            232,
            253
        ]
    },
    {
        "name": "雄黄",
        "hex": "#f9c89b",
        "RGB": [
            155,
            200,
            249
        ]
    },
    {
        "name": "洒落柿",
        "hex": "#f7bd8f",
        "RGB": [
            143,
            189,
            247
        ]
    },
    {
        "name": "赤香",
        "hex": "#f6b894",
        "RGB": [
            148,
            184,
            246
        ]
    },
    {
        "name": "砥粉色",
        "hex": "#f4dda5",
        "RGB": [
            165,
            221,
            244
        ]
    },
    {
        "name": "肉色",
        "hex": "#f1bf99",
        "RGB": [
            153,
            191,
            241
        ]
    },
    {
        "name": "人色",
        "hex": "#f1bf99",
        "RGB": [
            153,
            191,
            241
        ]
    },
    {
        "name": "丁子色",
        "hex": "#efcd9a",
        "RGB": [
            154,
            205,
            239
        ]
    },
    {
        "name": "香色",
        "hex": "#efcd9a",
        "RGB": [
            154,
            205,
            239
        ]
    },
    {
        "name": "薄香",
        "hex": "#f0cfa0",
        "RGB": [
            160,
            207,
            240
        ]
    },
    {
        "name": "浅黄",
        "hex": "#edd3a1",
        "RGB": [
            161,
            211,
            237
        ]
    },
    {
        "name": "枯色",
        "hex": "#e0c38c",
        "RGB": [
            140,
            195,
            224
        ]
    },
    {
        "name": "淡香",
        "hex": "#f3bf88",
        "RGB": [
            136,
            191,
            243
        ]
    },
    {
        "name": "杏色",
        "hex": "#f7b977",
        "RGB": [
            119,
            185,
            247
        ]
    },
    {
        "name": "东云色",
        "hex": "#f19072",
        "RGB": [
            114,
            144,
            241
        ]
    },
    {
        "name": "曙色",
        "hex": "#f19072",
        "RGB": [
            114,
            144,
            241
        ]
    },
    {
        "name": "珊瑚朱色",
        "hex": "#ee836f",
        "RGB": [
            111,
            131,
            238
        ]
    },
    {
        "name": "深支子",
        "hex": "#eb9b6f",
        "RGB": [
            111,
            155,
            235
        ]
    },
    {
        "name": "纁",
        "hex": "#e0815e",
        "RGB": [
            94,
            129,
            224
        ]
    },
    {
        "name": "浅绯",
        "hex": "#df7163",
        "RGB": [
            99,
            113,
            223
        ]
    },
    {
        "name": "真赭",
        "hex": "#d57c6b",
        "RGB": [
            107,
            124,
            213
        ]
    },
    {
        "name": "洗朱",
        "hex": "#d0826c",
        "RGB": [
            108,
            130,
            208
        ]
    },
    {
        "name": "遠州茶",
        "hex": "#ca8269",
        "RGB": [
            105,
            130,
            202
        ]
    },
    {
        "name": "红桦色",
        "hex": "#bb5548",
        "RGB": [
            72,
            85,
            187
        ]
    },
    {
        "name": "赭",
        "hex": "#ab6953",
        "RGB": [
            83,
            105,
            171
        ]
    },
    {
        "name": "小豆色",
        "hex": "#96514d",
        "RGB": [
            77,
            81,
            150
        ]
    },
    {
        "name": "枯茶",
        "hex": "#8d6449",
        "RGB": [
            73,
            100,
            141
        ]
    },
    {
        "name": "饴色",
        "hex": "#deb068",
        "RGB": [
            104,
            176,
            222
        ]
    },
    {
        "name": "骆驼色",
        "hex": "#bf794e",
        "RGB": [
            78,
            121,
            191
        ]
    },
    {
        "name": "土色",
        "hex": "#bc763c",
        "RGB": [
            60,
            118,
            188
        ]
    },
    {
        "name": "黄唐色",
        "hex": "#b98c46",
        "RGB": [
            70,
            140,
            185
        ]
    },
    {
        "name": "桑染",
        "hex": "#b79b5b",
        "RGB": [
            91,
            155,
            183
        ]
    },
    {
        "name": "栌色",
        "hex": "#b77b57",
        "RGB": [
            87,
            123,
            183
        ]
    },
    {
        "name": "黄橡",
        "hex": "#b68d4c",
        "RGB": [
            76,
            141,
            182
        ]
    },
    {
        "name": "丁字染",
        "hex": "#ad7d4c",
        "RGB": [
            76,
            125,
            173
        ]
    },
    {
        "name": "香染",
        "hex": "#ad7d4c",
        "RGB": [
            76,
            125,
            173
        ]
    },
    {
        "name": "枇杷茶",
        "hex": "#ae7c4f",
        "RGB": [
            79,
            124,
            174
        ]
    },
    {
        "name": "芝翫茶",
        "hex": "#ad7e4e",
        "RGB": [
            78,
            126,
            173
        ]
    },
    {
        "name": "焦香",
        "hex": "#ae7c58",
        "RGB": [
            88,
            124,
            174
        ]
    },
    {
        "name": "胡桃色",
        "hex": "#a86f4c",
        "RGB": [
            76,
            111,
            168
        ]
    },
    {
        "name": "渋纸色",
        "hex": "#946243",
        "RGB": [
            67,
            98,
            148
        ]
    },
    {
        "name": "朽葉色",
        "hex": "#917347",
        "RGB": [
            71,
            115,
            145
        ]
    },
    {
        "name": "桑茶",
        "hex": "#956f29",
        "RGB": [
            41,
            111,
            149
        ]
    },
    {
        "name": "路考茶",
        "hex": "#8c7042",
        "RGB": [
            66,
            112,
            140
        ]
    },
    {
        "name": "国防色",
        "hex": "#7b6c3e",
        "RGB": [
            62,
            108,
            123
        ]
    },
    {
        "name": "伽羅色",
        "hex": "#d8a373",
        "RGB": [
            115,
            163,
            216
        ]
    },
    {
        "name": "江戸茶",
        "hex": "#cd8c5c",
        "RGB": [
            92,
            140,
            205
        ]
    },
    {
        "name": "樺色",
        "hex": "#cd5e3c",
        "RGB": [
            60,
            94,
            205
        ]
    },
    {
        "name": "紅鬱金",
        "hex": "#cb8347",
        "RGB": [
            71,
            131,
            203
        ]
    },
    {
        "name": "土器色",
        "hex": "#c37854",
        "RGB": [
            84,
            120,
            195
        ]
    },
    {
        "name": "狐色",
        "hex": "#c38743",
        "RGB": [
            67,
            135,
            195
        ]
    },
    {
        "name": "黄土色",
        "hex": "#c39143",
        "RGB": [
            67,
            145,
            195
        ]
    },
    {
        "name": "琥珀色",
        "hex": "#bf783a",
        "RGB": [
            58,
            120,
            191
        ]
    },
    {
        "name": "赤茶",
        "hex": "#bb5535",
        "RGB": [
            53,
            85,
            187
        ]
    },
    {
        "name": "代赭",
        "hex": "#bb5520",
        "RGB": [
            32,
            85,
            187
        ]
    },
    {
        "name": "煉瓦色",
        "hex": "#b55233",
        "RGB": [
            51,
            82,
            181
        ]
    },
    {
        "name": "雀茶",
        "hex": "#aa4f37",
        "RGB": [
            55,
            79,
            170
        ]
    },
    {
        "name": "団十郎茶",
        "hex": "#9f563a",
        "RGB": [
            58,
            86,
            159
        ]
    },
    {
        "name": "柿渋色",
        "hex": "#9f563a",
        "RGB": [
            58,
            86,
            159
        ]
    },
    {
        "name": "紅鳶",
        "hex": "#9a493f",
        "RGB": [
            63,
            73,
            154
        ]
    },
    {
        "name": "灰茶",
        "hex": "#98623c",
        "RGB": [
            60,
            98,
            152
        ]
    },
    {
        "name": "茶色",
        "hex": "#965042",
        "RGB": [
            66,
            80,
            150
        ]
    },
    {
        "name": "檜皮色",
        "hex": "#965036",
        "RGB": [
            54,
            80,
            150
        ]
    },
    {
        "name": "鳶色",
        "hex": "#95483f",
        "RGB": [
            63,
            72,
            149
        ]
    },
    {
        "name": "柿茶",
        "hex": "#954e2a",
        "RGB": [
            42,
            78,
            149
        ]
    },
    {
        "name": "弁柄色",
        "hex": "#8f2e14",
        "RGB": [
            20,
            46,
            143
        ]
    },
    {
        "name": "赤錆色",
        "hex": "#8a3319",
        "RGB": [
            25,
            51,
            138
        ]
    },
    {
        "name": "褐色",
        "hex": "#8a3b00",
        "RGB": [
            0,
            59,
            138
        ]
    },
    {
        "name": "栗梅",
        "hex": "#852e19",
        "RGB": [
            25,
            46,
            133
        ]
    },
    {
        "name": "紅檜皮",
        "hex": "#7b4741",
        "RGB": [
            65,
            71,
            123
        ]
    },
    {
        "name": "海老茶",
        "hex": "#773c30",
        "RGB": [
            48,
            60,
            119
        ]
    },
    {
        "name": "唐茶",
        "hex": "#783c1d",
        "RGB": [
            29,
            60,
            120
        ]
    },
    {
        "name": "栗色",
        "hex": "#762f07",
        "RGB": [
            7,
            47,
            118
        ]
    },
    {
        "name": "赤銅色",
        "hex": "#752100",
        "RGB": [
            0,
            33,
            117
        ]
    },
    {
        "name": "錆色",
        "hex": "#6c3524",
        "RGB": [
            36,
            53,
            108
        ]
    },
    {
        "name": "赤褐色",
        "hex": "#683f36",
        "RGB": [
            54,
            63,
            104
        ]
    },
    {
        "name": "茶褐色",
        "hex": "#664032",
        "RGB": [
            50,
            64,
            102
        ]
    },
    {
        "name": "栗皮茶",
        "hex": "#6d3c32",
        "RGB": [
            50,
            60,
            109
        ]
    },
    {
        "name": "黒茶",
        "hex": "#583822",
        "RGB": [
            34,
            56,
            88
        ]
    },
    {
        "name": "葡萄茶",
        "hex": "#6c2c2f",
        "RGB": [
            47,
            44,
            108
        ]
    },
    {
        "name": "葡萄色",
        "hex": "#640125",
        "RGB": [
            37,
            1,
            100
        ]
    },
    {
        "name": "萱草色",
        "hex": "#f8b862",
        "RGB": [
            98,
            184,
            248
        ]
    },
    {
        "name": "柑子色",
        "hex": "#f6ad49",
        "RGB": [
            73,
            173,
            246
        ]
    },
    {
        "name": "金茶",
        "hex": "#f39800",
        "RGB": [
            0,
            152,
            243
        ]
    },
    {
        "name": "蜜柑色",
        "hex": "#f08300",
        "RGB": [
            0,
            131,
            240
        ]
    },
    {
        "name": "鉛丹色",
        "hex": "#ec6d51",
        "RGB": [
            81,
            109,
            236
        ]
    },
    {
        "name": "黄丹",
        "hex": "#ee7948",
        "RGB": [
            72,
            121,
            238
        ]
    },
    {
        "name": "柿色",
        "hex": "#ed6d3d",
        "RGB": [
            61,
            109,
            237
        ]
    },
    {
        "name": "黄赤",
        "hex": "#ec6800",
        "RGB": [
            0,
            104,
            236
        ]
    },
    {
        "name": "人参色",
        "hex": "#ec6800",
        "RGB": [
            0,
            104,
            236
        ]
    },
    {
        "name": "橙色",
        "hex": "#ee7800",
        "RGB": [
            0,
            120,
            238
        ]
    },
    {
        "name": "照柿",
        "hex": "#eb6238",
        "RGB": [
            56,
            98,
            235
        ]
    },
    {
        "name": "赤橙",
        "hex": "#ea5506",
        "RGB": [
            6,
            85,
            234
        ]
    },
    {
        "name": "金赤",
        "hex": "#ea5506",
        "RGB": [
            6,
            85,
            234
        ]
    },
    {
        "name": "朱色",
        "hex": "#eb6101",
        "RGB": [
            1,
            97,
            235
        ]
    },
    {
        "name": "小麦色",
        "hex": "#e49e61",
        "RGB": [
            97,
            158,
            228
        ]
    },
    {
        "name": "丹色",
        "hex": "#e45e32",
        "RGB": [
            50,
            94,
            228
        ]
    },
    {
        "name": "黄茶",
        "hex": "#e17b34",
        "RGB": [
            52,
            123,
            225
        ]
    },
    {
        "name": "肉桂色",
        "hex": "#dd7a56",
        "RGB": [
            86,
            122,
            221
        ]
    },
    {
        "name": "赤朽葉色",
        "hex": "#db8449",
        "RGB": [
            73,
            132,
            219
        ]
    },
    {
        "name": "黄櫨染",
        "hex": "#d66a35",
        "RGB": [
            53,
            106,
            214
        ]
    },
    {
        "name": "蒲公英色",
        "hex": "#ffd900",
        "RGB": [
            0,
            217,
            255
        ]
    },
    {
        "name": "黄色",
        "hex": "#ffd900",
        "RGB": [
            0,
            217,
            255
        ]
    },
    {
        "name": "中黄",
        "hex": "#ffea00",
        "RGB": [
            0,
            234,
            255
        ]
    },
    {
        "name": "菜の花色",
        "hex": "#ffec47",
        "RGB": [
            71,
            236,
            255
        ]
    },
    {
        "name": "黄檗色",
        "hex": "#fef263",
        "RGB": [
            99,
            242,
            254
        ]
    },
    {
        "name": "卵色",
        "hex": "#fcd575",
        "RGB": [
            117,
            213,
            252
        ]
    },
    {
        "name": "花葉色",
        "hex": "#fbd26b",
        "RGB": [
            107,
            210,
            251
        ]
    },
    {
        "name": "刈安色",
        "hex": "#f5e56b",
        "RGB": [
            107,
            229,
            245
        ]
    },
    {
        "name": "玉蜀黍色",
        "hex": "#eec362",
        "RGB": [
            98,
            195,
            238
        ]
    },
    {
        "name": "金糸雀色",
        "hex": "#ebd842",
        "RGB": [
            66,
            216,
            235
        ]
    },
    {
        "name": "黄支子色",
        "hex": "#ffdb4f",
        "RGB": [
            79,
            219,
            255
        ]
    },
    {
        "name": "支子色",
        "hex": "#fbca4d",
        "RGB": [
            77,
            202,
            251
        ]
    },
    {
        "name": "向日葵色",
        "hex": "#fcc800",
        "RGB": [
            0,
            200,
            252
        ]
    },
    {
        "name": "山吹色",
        "hex": "#f8b500",
        "RGB": [
            0,
            181,
            248
        ]
    },
    {
        "name": "鬱金色",
        "hex": "#fabf14",
        "RGB": [
            20,
            191,
            250
        ]
    },
    {
        "name": "藤黄",
        "hex": "#f7c114",
        "RGB": [
            20,
            193,
            247
        ]
    },
    {
        "name": "金色",
        "hex": "#e6b422",
        "RGB": [
            34,
            180,
            230
        ]
    },
    {
        "name": "黄金",
        "hex": "#e6b422",
        "RGB": [
            34,
            180,
            230
        ]
    },
    {
        "name": "櫨染",
        "hex": "#d9a62e",
        "RGB": [
            46,
            166,
            217
        ]
    },
    {
        "name": "黄朽葉色",
        "hex": "#d3a243",
        "RGB": [
            67,
            162,
            211
        ]
    },
    {
        "name": "山吹茶",
        "hex": "#c89932",
        "RGB": [
            50,
            153,
            200
        ]
    },
    {
        "name": "芥子色",
        "hex": "#d0af4c",
        "RGB": [
            76,
            175,
            208
        ]
    },
    {
        "name": "豆がら茶",
        "hex": "#8b968d",
        "RGB": [
            141,
            150,
            139
        ]
    },
    {
        "name": "麹塵",
        "hex": "#6e7955",
        "RGB": [
            85,
            121,
            110
        ]
    },
    {
        "name": "山鳩色",
        "hex": "#767c6b",
        "RGB": [
            107,
            124,
            118
        ]
    },
    {
        "name": "利休鼠",
        "hex": "#888e7e",
        "RGB": [
            126,
            142,
            136
        ]
    },
    {
        "name": "海松茶",
        "hex": "#5a544b",
        "RGB": [
            75,
            84,
            90
        ]
    },
    {
        "name": "藍海松茶",
        "hex": "#56564b",
        "RGB": [
            75,
            86,
            86
        ]
    },
    {
        "name": "藍媚茶",
        "hex": "#56564b",
        "RGB": [
            75,
            86,
            86
        ]
    },
    {
        "name": "千歳茶",
        "hex": "#494a41",
        "RGB": [
            65,
            74,
            73
        ]
    },
    {
        "name": "岩井茶",
        "hex": "#6b6f59",
        "RGB": [
            89,
            111,
            107
        ]
    },
    {
        "name": "仙斎茶",
        "hex": "#474b42",
        "RGB": [
            66,
            75,
            71
        ]
    },
    {
        "name": "黒緑",
        "hex": "#333631",
        "RGB": [
            49,
            54,
            51
        ]
    },
    {
        "name": "柳煤竹",
        "hex": "#5b6356",
        "RGB": [
            86,
            99,
            91
        ]
    },
    {
        "name": "樺茶色",
        "hex": "#726250",
        "RGB": [
            80,
            98,
            114
        ]
    },
    {
        "name": "空五倍子色",
        "hex": "#9d896c",
        "RGB": [
            108,
            137,
            157
        ]
    },
    {
        "name": "生壁色",
        "hex": "#94846a",
        "RGB": [
            106,
            132,
            148
        ]
    },
    {
        "name": "肥後煤竹",
        "hex": "#897858",
        "RGB": [
            88,
            120,
            137
        ]
    },
    {
        "name": "媚茶",
        "hex": "#716246",
        "RGB": [
            70,
            98,
            113
        ]
    },
    {
        "name": "白橡",
        "hex": "#cbb994",
        "RGB": [
            148,
            185,
            203
        ]
    },
    {
        "name": "亜麻色",
        "hex": "#d6c6af",
        "RGB": [
            175,
            198,
            214
        ]
    },
    {
        "name": "榛色",
        "hex": "#bfa46f",
        "RGB": [
            111,
            164,
            191
        ]
    },
    {
        "name": "灰汁色",
        "hex": "#9e9478",
        "RGB": [
            120,
            148,
            158
        ]
    },
    {
        "name": "利休茶",
        "hex": "#a59564",
        "RGB": [
            100,
            149,
            165
        ]
    },
    {
        "name": "鶯茶",
        "hex": "#715c1f",
        "RGB": [
            31,
            92,
            113
        ]
    },
    {
        "name": "木蘭色",
        "hex": "#c7b370",
        "RGB": [
            112,
            179,
            199
        ]
    },
    {
        "name": "砂色",
        "hex": "#dcd3b2",
        "RGB": [
            178,
            211,
            220
        ]
    },
    {
        "name": "油色",
        "hex": "#a19361",
        "RGB": [
            97,
            147,
            161
        ]
    },
    {
        "name": "利休色",
        "hex": "#8f8667",
        "RGB": [
            103,
            134,
            143
        ]
    },
    {
        "name": "梅幸茶",
        "hex": "#887938",
        "RGB": [
            56,
            121,
            136
        ]
    },
    {
        "name": "璃寛茶",
        "hex": "#6a5d21",
        "RGB": [
            33,
            93,
            106
        ]
    },
    {
        "name": "黄海松茶",
        "hex": "#918754",
        "RGB": [
            84,
            135,
            145
        ]
    },
    {
        "name": "菜種油色",
        "hex": "#a69425",
        "RGB": [
            37,
            148,
            166
        ]
    },
    {
        "name": "青朽葉",
        "hex": "#ada250",
        "RGB": [
            80,
            162,
            173
        ]
    },
    {
        "name": "根岸色",
        "hex": "#938b4b",
        "RGB": [
            75,
            139,
            147
        ]
    },
    {
        "name": "鶸茶",
        "hex": "#8c8861",
        "RGB": [
            97,
            136,
            140
        ]
    },
    {
        "name": "柳茶",
        "hex": "#a1a46d",
        "RGB": [
            109,
            164,
            161
        ]
    },
    {
        "name": "海松色",
        "hex": "#726d40",
        "RGB": [
            64,
            109,
            114
        ]
    },
    {
        "name": "鶯色",
        "hex": "#928c36",
        "RGB": [
            54,
            140,
            146
        ]
    },
    {
        "name": "緑黄色",
        "hex": "#dccb18",
        "RGB": [
            24,
            203,
            220
        ]
    },
    {
        "name": "鶸色",
        "hex": "#d7cf3a",
        "RGB": [
            58,
            207,
            215
        ]
    },
    {
        "name": "抹茶色",
        "hex": "#c5c56a",
        "RGB": [
            106,
            197,
            197
        ]
    },
    {
        "name": "若草色",
        "hex": "#c3d825",
        "RGB": [
            37,
            216,
            195
        ]
    },
    {
        "name": "黄緑",
        "hex": "#b8d200",
        "RGB": [
            0,
            210,
            184
        ]
    },
    {
        "name": "若芽色",
        "hex": "#e0ebaf",
        "RGB": [
            175,
            235,
            224
        ]
    },
    {
        "name": "若菜色",
        "hex": "#d8e698",
        "RGB": [
            152,
            230,
            216
        ]
    },
    {
        "name": "若苗色",
        "hex": "#c7dc68",
        "RGB": [
            104,
            220,
            199
        ]
    },
    {
        "name": "青丹",
        "hex": "#99ab4e",
        "RGB": [
            78,
            171,
            153
        ]
    },
    {
        "name": "草色",
        "hex": "#7b8d42",
        "RGB": [
            66,
            141,
            123
        ]
    },
    {
        "name": "苔色",
        "hex": "#69821b",
        "RGB": [
            27,
            130,
            105
        ]
    },
    {
        "name": "萌黄",
        "hex": "#aacf53",
        "RGB": [
            83,
            207,
            170
        ]
    },
    {
        "name": "苗色",
        "hex": "#b0ca71",
        "RGB": [
            113,
            202,
            176
        ]
    },
    {
        "name": "若葉色",
        "hex": "#b9d08b",
        "RGB": [
            139,
            208,
            185
        ]
    },
    {
        "name": "松葉色",
        "hex": "#839b5c",
        "RGB": [
            92,
            155,
            131
        ]
    },
    {
        "name": "夏虫色",
        "hex": "#cee4ae",
        "RGB": [
            174,
            228,
            206
        ]
    },
    {
        "name": "鶸萌黄",
        "hex": "#82ae46",
        "RGB": [
            70,
            174,
            130
        ]
    },
    {
        "name": "柳色",
        "hex": "#a8c97f",
        "RGB": [
            127,
            201,
            168
        ]
    },
    {
        "name": "青白橡",
        "hex": "#9ba88d",
        "RGB": [
            141,
            168,
            155
        ]
    },
    {
        "name": "柳鼠",
        "hex": "#c8d5bb",
        "RGB": [
            187,
            213,
            200
        ]
    },
    {
        "name": "裏葉柳",
        "hex": "#c1d8ac",
        "RGB": [
            172,
            216,
            193
        ]
    },
    {
        "name": "山葵色",
        "hex": "#a8bf93",
        "RGB": [
            147,
            191,
            168
        ]
    },
    {
        "name": "老竹色",
        "hex": "#769164",
        "RGB": [
            100,
            145,
            118
        ]
    },
    {
        "name": "白緑",
        "hex": "#d6e9ca",
        "RGB": [
            202,
            233,
            214
        ]
    },
    {
        "name": "淡萌黄",
        "hex": "#93ca76",
        "RGB": [
            118,
            202,
            147
        ]
    },
    {
        "name": "柳染",
        "hex": "#93b881",
        "RGB": [
            129,
            184,
            147
        ]
    },
    {
        "name": "薄萌葱",
        "hex": "#badcad",
        "RGB": [
            173,
            220,
            186
        ]
    },
    {
        "name": "深川鼠",
        "hex": "#97a791",
        "RGB": [
            145,
            167,
            151
        ]
    },
    {
        "name": "若緑",
        "hex": "#98d98e",
        "RGB": [
            142,
            217,
            152
        ]
    },
    {
        "name": "浅緑",
        "hex": "#88cb7f",
        "RGB": [
            127,
            203,
            136
        ]
    },
    {
        "name": "薄緑",
        "hex": "#69b076",
        "RGB": [
            118,
            176,
            105
        ]
    },
    {
        "name": "青鈍",
        "hex": "#6b7b6e",
        "RGB": [
            110,
            123,
            107
        ]
    },
    {
        "name": "青磁鼠",
        "hex": "#bed2c3",
        "RGB": [
            195,
            210,
            190
        ]
    },
    {
        "name": "薄青",
        "hex": "#93b69c",
        "RGB": [
            156,
            182,
            147
        ]
    },
    {
        "name": "錆青磁",
        "hex": "#a6c8b2",
        "RGB": [
            178,
            200,
            166
        ]
    },
    {
        "name": "緑青色",
        "hex": "#47885e",
        "RGB": [
            94,
            136,
            71
        ]
    },
    {
        "name": "千歳緑",
        "hex": "#316745",
        "RGB": [
            69,
            103,
            49
        ]
    },
    {
        "name": "若竹色",
        "hex": "#68be8d",
        "RGB": [
            141,
            190,
            104
        ]
    },
    {
        "name": "緑",
        "hex": "#3eb370",
        "RGB": [
            112,
            179,
            62
        ]
    },
    {
        "name": "常磐色",
        "hex": "#007b43",
        "RGB": [
            67,
            123,
            0
        ]
    },
    {
        "name": "千草鼠",
        "hex": "#bed3ca",
        "RGB": [
            202,
            211,
            190
        ]
    },
    {
        "name": "千草色",
        "hex": "#92b5a9",
        "RGB": [
            169,
            181,
            146
        ]
    },
    {
        "name": "青磁色",
        "hex": "#7ebea5",
        "RGB": [
            165,
            190,
            126
        ]
    },
    {
        "name": "青竹色",
        "hex": "#7ebeab",
        "RGB": [
            171,
            190,
            126
        ]
    },
    {
        "name": "常磐緑",
        "hex": "#028760",
        "RGB": [
            96,
            135,
            2
        ]
    },
    {
        "name": "木賊色",
        "hex": "#3b7960",
        "RGB": [
            96,
            121,
            59
        ]
    },
    {
        "name": "天鵞絨",
        "hex": "#2f5d50",
        "RGB": [
            80,
            93,
            47
        ]
    },
    {
        "name": "虫襖",
        "hex": "#3a5b52",
        "RGB": [
            82,
            91,
            58
        ]
    },
    {
        "name": "革色",
        "hex": "#475950",
        "RGB": [
            80,
            89,
            71
        ]
    },
    {
        "name": "深緑",
        "hex": "#00552e",
        "RGB": [
            46,
            85,
            0
        ]
    },
    {
        "name": "鉄色",
        "hex": "#005243",
        "RGB": [
            67,
            82,
            0
        ]
    },
    {
        "name": "萌葱色",
        "hex": "#006e54",
        "RGB": [
            84,
            110,
            0
        ]
    },
    {
        "name": "花緑青",
        "hex": "#00a381",
        "RGB": [
            129,
            163,
            0
        ]
    },
    {
        "name": "翡翠色",
        "hex": "#38b48b",
        "RGB": [
            139,
            180,
            56
        ]
    },
    {
        "name": "青緑",
        "hex": "#00a497",
        "RGB": [
            151,
            164,
            0
        ]
    },
    {
        "name": "水浅葱",
        "hex": "#80aba9",
        "RGB": [
            169,
            171,
            128
        ]
    },
    {
        "name": "錆浅葱",
        "hex": "#5c9291",
        "RGB": [
            145,
            146,
            92
        ]
    },
    {
        "name": "青碧",
        "hex": "#478384",
        "RGB": [
            132,
            131,
            71
        ]
    },
    {
        "name": "御召茶",
        "hex": "#43676b",
        "RGB": [
            107,
            103,
            67
        ]
    },
    {
        "name": "湊鼠",
        "hex": "#80989b",
        "RGB": [
            155,
            152,
            128
        ]
    },
    {
        "name": "高麗納戸",
        "hex": "#2c4f54",
        "RGB": [
            84,
            79,
            44
        ]
    },
    {
        "name": "百入茶",
        "hex": "#1f3134",
        "RGB": [
            52,
            49,
            31
        ]
    },
    {
        "name": "錆鼠",
        "hex": "#47585c",
        "RGB": [
            92,
            88,
            71
        ]
    },
    {
        "name": "錆鉄御納戸",
        "hex": "#485859",
        "RGB": [
            89,
            88,
            72
        ]
    },
    {
        "name": "藍鼠",
        "hex": "#6c848d",
        "RGB": [
            141,
            132,
            108
        ]
    },
    {
        "name": "錆御納戸",
        "hex": "#53727d",
        "RGB": [
            125,
            114,
            83
        ]
    },
    {
        "name": "舛花色",
        "hex": "#5b7e91",
        "RGB": [
            145,
            126,
            91
        ]
    },
    {
        "name": "熨斗目花色",
        "hex": "#426579",
        "RGB": [
            121,
            101,
            66
        ]
    },
    {
        "name": "御召御納戸",
        "hex": "#4c6473",
        "RGB": [
            115,
            100,
            76
        ]
    },
    {
        "name": "鉄御納戸",
        "hex": "#455765",
        "RGB": [
            101,
            87,
            69
        ]
    },
    {
        "name": "紺鼠",
        "hex": "#44617b",
        "RGB": [
            123,
            97,
            68
        ]
    },
    {
        "name": "藍鉄",
        "hex": "#393f4c",
        "RGB": [
            76,
            63,
            57
        ]
    },
    {
        "name": "青褐",
        "hex": "#393e4f",
        "RGB": [
            79,
            62,
            57
        ]
    },
    {
        "name": "褐返",
        "hex": "#203744",
        "RGB": [
            68,
            55,
            32
        ]
    },
    {
        "name": "褐色",
        "hex": "#4d4c61",
        "RGB": [
            97,
            76,
            77
        ]
    },
    {
        "name": "月白",
        "hex": "#eaf4fc",
        "RGB": [
            252,
            244,
            234
        ]
    },
    {
        "name": "白菫色",
        "hex": "#eaedf7",
        "RGB": [
            247,
            237,
            234
        ]
    },
    {
        "name": "白花色",
        "hex": "#e8ecef",
        "RGB": [
            239,
            236,
            232
        ]
    },
    {
        "name": "藍白",
        "hex": "#ebf6f7",
        "RGB": [
            247,
            246,
            235
        ]
    },
    {
        "name": "白藍",
        "hex": "#c1e4e9",
        "RGB": [
            233,
            228,
            193
        ]
    },
    {
        "name": "水色",
        "hex": "#bce2e8",
        "RGB": [
            232,
            226,
            188
        ]
    },
    {
        "name": "瓶覗",
        "hex": "#a2d7dd",
        "RGB": [
            221,
            215,
            162
        ]
    },
    {
        "name": "秘色色",
        "hex": "#abced8",
        "RGB": [
            216,
            206,
            171
        ]
    },
    {
        "name": "空色",
        "hex": "#a0d8ef",
        "RGB": [
            239,
            216,
            160
        ]
    },
    {
        "name": "勿忘草色",
        "hex": "#89c3eb",
        "RGB": [
            235,
            195,
            137
        ]
    },
    {
        "name": "青藤色",
        "hex": "#84a2d4",
        "RGB": [
            212,
            162,
            132
        ]
    },
    {
        "name": "白群",
        "hex": "#83ccd2",
        "RGB": [
            210,
            204,
            131
        ]
    },
    {
        "name": "浅縹",
        "hex": "#84b9cb",
        "RGB": [
            203,
            185,
            132
        ]
    },
    {
        "name": "薄花色",
        "hex": "#698aab",
        "RGB": [
            171,
            138,
            105
        ]
    },
    {
        "name": "納戸色",
        "hex": "#008899",
        "RGB": [
            153,
            136,
            0
        ]
    },
    {
        "name": "浅葱色",
        "hex": "#00a3af",
        "RGB": [
            175,
            163,
            0
        ]
    },
    {
        "name": "花浅葱",
        "hex": "#2a83a2",
        "RGB": [
            162,
            131,
            42
        ]
    },
    {
        "name": "新橋色",
        "hex": "#59b9c6",
        "RGB": [
            198,
            185,
            89
        ]
    },
    {
        "name": "天色",
        "hex": "#2ca9e1",
        "RGB": [
            225,
            169,
            44
        ]
    },
    {
        "name": "露草色",
        "hex": "#38a1db",
        "RGB": [
            219,
            161,
            56
        ]
    },
    {
        "name": "青",
        "hex": "#0095d9",
        "RGB": [
            217,
            149,
            0
        ]
    },
    {
        "name": "薄藍",
        "hex": "#0094c8",
        "RGB": [
            200,
            148,
            0
        ]
    },
    {
        "name": "縹色",
        "hex": "#2792c3",
        "RGB": [
            195,
            146,
            39
        ]
    },
    {
        "name": "紺碧",
        "hex": "#007bbb",
        "RGB": [
            187,
            123,
            0
        ]
    },
    {
        "name": "薄群青",
        "hex": "#5383c3",
        "RGB": [
            195,
            131,
            83
        ]
    },
    {
        "name": "薄花桜",
        "hex": "#5a79ba",
        "RGB": [
            186,
            121,
            90
        ]
    },
    {
        "name": "群青色",
        "hex": "#4c6cb3",
        "RGB": [
            179,
            108,
            76
        ]
    },
    {
        "name": "杜若色",
        "hex": "#3e62ad",
        "RGB": [
            173,
            98,
            62
        ]
    },
    {
        "name": "瑠璃色",
        "hex": "#1e50a2",
        "RGB": [
            162,
            80,
            30
        ]
    },
    {
        "name": "薄縹",
        "hex": "#507ea4",
        "RGB": [
            164,
            126,
            80
        ]
    },
    {
        "name": "瑠璃紺",
        "hex": "#19448e",
        "RGB": [
            142,
            68,
            25
        ]
    },
    {
        "name": "紺瑠璃",
        "hex": "#164a84",
        "RGB": [
            132,
            74,
            22
        ]
    },
    {
        "name": "藍色",
        "hex": "#165e83",
        "RGB": [
            131,
            94,
            22
        ]
    },
    {
        "name": "青藍",
        "hex": "#274a78",
        "RGB": [
            120,
            74,
            39
        ]
    },
    {
        "name": "深縹",
        "hex": "#2a4073",
        "RGB": [
            115,
            64,
            42
        ]
    },
    {
        "name": "紺色",
        "hex": "#223a70",
        "RGB": [
            112,
            58,
            34
        ]
    },
    {
        "name": "紺青",
        "hex": "#192f60",
        "RGB": [
            96,
            47,
            25
        ]
    },
    {
        "name": "留紺",
        "hex": "#1c305c",
        "RGB": [
            92,
            48,
            28
        ]
    },
    {
        "name": "濃藍",
        "hex": "#0f2350",
        "RGB": [
            80,
            35,
            15
        ]
    },
    {
        "name": "鉄紺",
        "hex": "#17184b",
        "RGB": [
            75,
            24,
            23
        ]
    },
    {
        "name": "漆黒",
        "hex": "#0d0015",
        "RGB": [
            21,
            0,
            13
        ]
    },
    {
        "name": "淡藤色",
        "hex": "#bbc8e6",
        "RGB": [
            230,
            200,
            187
        ]
    },
    {
        "name": "藤色",
        "hex": "#bbbcde",
        "RGB": [
            222,
            188,
            187
        ]
    },
    {
        "name": "紅掛空色",
        "hex": "#8491c3",
        "RGB": [
            195,
            145,
            132
        ]
    },
    {
        "name": "紅碧",
        "hex": "#8491c3",
        "RGB": [
            195,
            145,
            132
        ]
    },
    {
        "name": "紺桔梗",
        "hex": "#4d5aaf",
        "RGB": [
            175,
            90,
            77
        ]
    },
    {
        "name": "花色",
        "hex": "#4d5aaf",
        "RGB": [
            175,
            90,
            77
        ]
    },
    {
        "name": "紺藍",
        "hex": "#4a488e",
        "RGB": [
            142,
            72,
            74
        ]
    },
    {
        "name": "紅桔梗",
        "hex": "#4d4398",
        "RGB": [
            152,
            67,
            77
        ]
    },
    {
        "name": "桔梗色",
        "hex": "#5654a2",
        "RGB": [
            162,
            84,
            86
        ]
    },
    {
        "name": "藤納戸",
        "hex": "#706caa",
        "RGB": [
            170,
            108,
            112
        ]
    },
    {
        "name": "紅掛花色",
        "hex": "#68699b",
        "RGB": [
            155,
            105,
            104
        ]
    },
    {
        "name": "紫苑色",
        "hex": "#867ba9",
        "RGB": [
            169,
            123,
            134
        ]
    },
    {
        "name": "白藤色",
        "hex": "#dbd0e6",
        "RGB": [
            230,
            208,
            219
        ]
    },
    {
        "name": "藤紫",
        "hex": "#a59aca",
        "RGB": [
            202,
            154,
            165
        ]
    },
    {
        "name": "菫色",
        "hex": "#7058a3",
        "RGB": [
            163,
            88,
            112
        ]
    },
    {
        "name": "青紫",
        "hex": "#674598",
        "RGB": [
            152,
            69,
            103
        ]
    },
    {
        "name": "菖蒲色",
        "hex": "#674196",
        "RGB": [
            150,
            65,
            103
        ]
    },
    {
        "name": "竜胆色",
        "hex": "#9079ad",
        "RGB": [
            173,
            121,
            144
        ]
    },
    {
        "name": "江戸紫",
        "hex": "#745399",
        "RGB": [
            153,
            83,
            116
        ]
    },
    {
        "name": "本紫",
        "hex": "#65318e",
        "RGB": [
            142,
            49,
            101
        ]
    },
    {
        "name": "葡萄色",
        "hex": "#522f60",
        "RGB": [
            96,
            47,
            82
        ]
    },
    {
        "name": "深紫",
        "hex": "#493759",
        "RGB": [
            89,
            55,
            73
        ]
    },
    {
        "name": "紫黒",
        "hex": "#2e2930",
        "RGB": [
            48,
            41,
            46
        ]
    },
    {
        "name": "紫",
        "hex": "#884898",
        "RGB": [
            152,
            72,
            136
        ]
    },
    {
        "name": "薄葡萄",
        "hex": "#c0a2c7",
        "RGB": [
            199,
            162,
            192
        ]
    },
    {
        "name": "紫紺",
        "hex": "#460e44",
        "RGB": [
            68,
            14,
            70
        ]
    },
    {
        "name": "暗紅色",
        "hex": "#74325c",
        "RGB": [
            92,
            50,
            116
        ]
    },
    {
        "name": "桑の実色",
        "hex": "#55295b",
        "RGB": [
            91,
            41,
            85
        ]
    },
    {
        "name": "古代紫",
        "hex": "#895b8a",
        "RGB": [
            138,
            91,
            137
        ]
    },
    {
        "name": "茄子紺",
        "hex": "#824880",
        "RGB": [
            128,
            72,
            130
        ]
    },
    {
        "name": "二藍",
        "hex": "#915c8b",
        "RGB": [
            139,
            92,
            145
        ]
    },
    {
        "name": "京紫",
        "hex": "#9d5b8b",
        "RGB": [
            139,
            91,
            157
        ]
    },
    {
        "name": "蒲葡",
        "hex": "#7a4171",
        "RGB": [
            113,
            65,
            122
        ]
    },
    {
        "name": "若紫",
        "hex": "#bc64a4",
        "RGB": [
            164,
            100,
            188
        ]
    },
    {
        "name": "紅紫",
        "hex": "#b44c97",
        "RGB": [
            151,
            76,
            180
        ]
    },
    {
        "name": "梅紫",
        "hex": "#aa4c8f",
        "RGB": [
            143,
            76,
            170
        ]
    },
    {
        "name": "菖蒲色",
        "hex": "#cc7eb1",
        "RGB": [
            177,
            126,
            204
        ]
    },
    {
        "name": "紅藤色",
        "hex": "#cca6bf",
        "RGB": [
            191,
            166,
            204
        ]
    },
    {
        "name": "浅紫",
        "hex": "#c4a3bf",
        "RGB": [
            191,
            163,
            196
        ]
    },
    {
        "name": "紫水晶",
        "hex": "#e7e7eb",
        "RGB": [
            235,
            231,
            231
        ]
    },
    {
        "name": "薄梅鼠",
        "hex": "#dcd6d9",
        "RGB": [
            217,
            214,
            220
        ]
    },
    {
        "name": "暁鼠",
        "hex": "#d3cfd9",
        "RGB": [
            217,
            207,
            211
        ]
    },
    {
        "name": "牡丹鼠",
        "hex": "#d3ccd6",
        "RGB": [
            214,
            204,
            211
        ]
    },
    {
        "name": "霞色",
        "hex": "#c8c2c6",
        "RGB": [
            198,
            194,
            200
        ]
    },
    {
        "name": "藤鼠",
        "hex": "#a6a5c4",
        "RGB": [
            196,
            165,
            166
        ]
    },
    {
        "name": "半色",
        "hex": "#a69abd",
        "RGB": [
            189,
            154,
            166
        ]
    },
    {
        "name": "薄色",
        "hex": "#a89dac",
        "RGB": [
            172,
            157,
            168
        ]
    },
    {
        "name": "薄鼠",
        "hex": "#9790a4",
        "RGB": [
            164,
            144,
            151
        ]
    },
    {
        "name": "鳩羽鼠",
        "hex": "#9e8b8e",
        "RGB": [
            142,
            139,
            158
        ]
    },
    {
        "name": "鳩羽色",
        "hex": "#95859c",
        "RGB": [
            156,
            133,
            149
        ]
    },
    {
        "name": "桔梗鼠",
        "hex": "#95949a",
        "RGB": [
            154,
            148,
            149
        ]
    },
    {
        "name": "紫鼠",
        "hex": "#71686c",
        "RGB": [
            108,
            104,
            113
        ]
    },
    {
        "name": "葡萄鼠",
        "hex": "#705b67",
        "RGB": [
            103,
            91,
            112
        ]
    },
    {
        "name": "濃色",
        "hex": "#634950",
        "RGB": [
            80,
            73,
            99
        ]
    },
    {
        "name": "紫鳶",
        "hex": "#5f414b",
        "RGB": [
            75,
            65,
            95
        ]
    },
    {
        "name": "濃鼠",
        "hex": "#4f455c",
        "RGB": [
            92,
            69,
            79
        ]
    },
    {
        "name": "藤煤竹",
        "hex": "#5a5359",
        "RGB": [
            89,
            83,
            90
        ]
    },
    {
        "name": "滅紫",
        "hex": "#594255",
        "RGB": [
            85,
            66,
            89
        ]
    },
    {
        "name": "紅消鼠",
        "hex": "#524748",
        "RGB": [
            72,
            71,
            82
        ]
    },
    {
        "name": "似せ紫",
        "hex": "#513743",
        "RGB": [
            67,
            55,
            81
        ]
    },
    {
        "name": "灰黄緑",
        "hex": "#e6eae3",
        "RGB": [
            227,
            234,
            230
        ]
    },
    {
        "name": "蕎麦切色",
        "hex": "#d4dcd6",
        "RGB": [
            214,
            220,
            212
        ]
    },
    {
        "name": "薄雲鼠",
        "hex": "#d4dcda",
        "RGB": [
            218,
            220,
            212
        ]
    },
    {
        "name": "枯野色",
        "hex": "#d3cbc6",
        "RGB": [
            198,
            203,
            211
        ]
    },
    {
        "name": "潤色",
        "hex": "#c8c2be",
        "RGB": [
            190,
            194,
            200
        ]
    },
    {
        "name": "利休白茶",
        "hex": "#b3ada0",
        "RGB": [
            160,
            173,
            179
        ]
    },
    {
        "name": "茶鼠",
        "hex": "#a99e93",
        "RGB": [
            147,
            158,
            169
        ]
    },
    {
        "name": "胡桃染",
        "hex": "#a58f86",
        "RGB": [
            134,
            143,
            165
        ]
    },
    {
        "name": "江戸鼠",
        "hex": "#928178",
        "RGB": [
            120,
            129,
            146
        ]
    },
    {
        "name": "煤色",
        "hex": "#887f7a",
        "RGB": [
            122,
            127,
            136
        ]
    },
    {
        "name": "丁子茶",
        "hex": "#b4866b",
        "RGB": [
            107,
            134,
            180
        ]
    },
    {
        "name": "柴染",
        "hex": "#b28c6e",
        "RGB": [
            110,
            140,
            178
        ]
    },
    {
        "name": "宗伝唐茶",
        "hex": "#a16d5d",
        "RGB": [
            93,
            109,
            161
        ]
    },
    {
        "name": "砺茶",
        "hex": "#9f6f55",
        "RGB": [
            85,
            111,
            159
        ]
    },
    {
        "name": "煎茶色",
        "hex": "#8c6450",
        "RGB": [
            80,
            100,
            140
        ]
    },
    {
        "name": "銀煤竹",
        "hex": "#856859",
        "RGB": [
            89,
            104,
            133
        ]
    },
    {
        "name": "黄枯茶",
        "hex": "#765c47",
        "RGB": [
            71,
            92,
            118
        ]
    },
    {
        "name": "煤竹色",
        "hex": "#6f514c",
        "RGB": [
            76,
            81,
            111
        ]
    },
    {
        "name": "焦茶",
        "hex": "#6f4b3e",
        "RGB": [
            62,
            75,
            111
        ]
    },
    {
        "name": "黒橡",
        "hex": "#544a47",
        "RGB": [
            71,
            74,
            84
        ]
    },
    {
        "name": "憲法色",
        "hex": "#543f32",
        "RGB": [
            50,
            63,
            84
        ]
    },
    {
        "name": "涅色",
        "hex": "#554738",
        "RGB": [
            56,
            71,
            85
        ]
    },
    {
        "name": "檳榔子染",
        "hex": "#433d3c",
        "RGB": [
            60,
            61,
            67
        ]
    },
    {
        "name": "黒鳶",
        "hex": "#432f2f",
        "RGB": [
            47,
            47,
            67
        ]
    },
    {
        "name": "赤墨",
        "hex": "#3f312b",
        "RGB": [
            43,
            49,
            63
        ]
    },
    {
        "name": "黒紅",
        "hex": "#302833",
        "RGB": [
            51,
            40,
            48
        ]
    },
    {
        "name": "白",
        "hex": "#ffffff",
        "RGB": [
            255,
            255,
            255
        ]
    },
    {
        "name": "胡粉色",
        "hex": "#fffffc",
        "RGB": [
            252,
            255,
            255
        ]
    },
    {
        "name": "卯の花色",
        "hex": "#f7fcfe",
        "RGB": [
            254,
            252,
            247
        ]
    },
    {
        "name": "白磁",
        "hex": "#f8fbf8",
        "RGB": [
            248,
            251,
            248
        ]
    },
    {
        "name": "生成り色",
        "hex": "#fbfaf5",
        "RGB": [
            245,
            250,
            251
        ]
    },
    {
        "name": "乳白色",
        "hex": "#f3f3f3",
        "RGB": [
            243,
            243,
            243
        ]
    },
    {
        "name": "白練",
        "hex": "#f3f3f2",
        "RGB": [
            242,
            243,
            243
        ]
    },
    {
        "name": "素色",
        "hex": "#eae5e3",
        "RGB": [
            227,
            229,
            234
        ]
    },
    {
        "name": "白梅鼠",
        "hex": "#e5e4e6",
        "RGB": [
            230,
            228,
            229
        ]
    },
    {
        "name": "白鼠",
        "hex": "#dcdddd",
        "RGB": [
            221,
            221,
            220
        ]
    },
    {
        "name": "絹鼠",
        "hex": "#dddcd6",
        "RGB": [
            214,
            220,
            221
        ]
    },
    {
        "name": "灰青",
        "hex": "#c0c6c9",
        "RGB": [
            201,
            198,
            192
        ]
    },
    {
        "name": "銀鼠",
        "hex": "#afafb0",
        "RGB": [
            176,
            175,
            175
        ]
    },
    {
        "name": "薄鈍",
        "hex": "#adadad",
        "RGB": [
            173,
            173,
            173
        ]
    },
    {
        "name": "薄墨色",
        "hex": "#a3a3a2",
        "RGB": [
            162,
            163,
            163
        ]
    },
    {
        "name": "錫色",
        "hex": "#9ea1a3",
        "RGB": [
            163,
            161,
            158
        ]
    },
    {
        "name": "素鼠",
        "hex": "#9fa0a0",
        "RGB": [
            160,
            160,
            159
        ]
    },
    {
        "name": "鼠色",
        "hex": "#949495",
        "RGB": [
            149,
            148,
            148
        ]
    },
    {
        "name": "源氏鼠",
        "hex": "#888084",
        "RGB": [
            132,
            128,
            136
        ]
    },
    {
        "name": "灰色",
        "hex": "#7d7d7d",
        "RGB": [
            125,
            125,
            125
        ]
    },
    {
        "name": "鉛色",
        "hex": "#7b7c7d",
        "RGB": [
            125,
            124,
            123
        ]
    },
    {
        "name": "鈍色",
        "hex": "#727171",
        "RGB": [
            113,
            113,
            114
        ]
    },
    {
        "name": "墨",
        "hex": "#595857",
        "RGB": [
            87,
            88,
            89
        ]
    },
    {
        "name": "丼鼠",
        "hex": "#595455",
        "RGB": [
            85,
            84,
            89
        ]
    },
    {
        "name": "消炭色",
        "hex": "#524e4d",
        "RGB": [
            77,
            78,
            82
        ]
    },
    {
        "name": "藍墨茶",
        "hex": "#474a4d",
        "RGB": [
            77,
            74,
            71
        ]
    },
    {
        "name": "羊羹色",
        "hex": "#383c3c",
        "RGB": [
            60,
            60,
            56
        ]
    },
    {
        "name": "蝋色",
        "hex": "#2b2b2b",
        "RGB": [
            43,
            43,
            43
        ]
    },
    {
        "name": "黒",
        "hex": "#2b2b2b",
        "RGB": [
            43,
            43,
            43
        ]
    },
    {
        "name": "烏羽色",
        "hex": "#180614",
        "RGB": [
            20,
            6,
            24
        ]
    },
    {
        "name": "鉄黒",
        "hex": "#281a14",
        "RGB": [
            20,
            26,
            40
        ]
    },
    {
        "name": "濡羽色",
        "hex": "#000b00",
        "RGB": [
            0,
            11,
            0
        ]
    },
    {
        "name": "黒壇",
        "hex": "#250d00",
        "RGB": [
            0,
            13,
            37
        ]
    },
    {
        "name": "憲法黒茶",
        "hex": "#241a08",
        "RGB": [
            8,
            26,
            36
        ]
    },
    {
        "name": "暗黒色",
        "hex": "#16160e",
        "RGB": [
            14,
            22,
            22
        ]
    }
]
}
