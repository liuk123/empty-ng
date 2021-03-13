import { Component, OnInit } from '@angular/core';
import { ArtList } from '../model/artlist.model';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.less']
})
export class BlogHomeComponent implements OnInit {

  listData:ArtList[]=listData
  listData1:ArtList[]=listData1
  tagData=tagData
  constructor() { }

  ngOnInit(): void {
  }
  open(e){}
  selectEvent(e){}

}

let carouselData = [
  {
    
    index: 0,
    title: '标题1',
    desc: '分享别人的生活家，小巧精致、舒适恰意。多看看别人的房间，再对比自己的，这是努力向前的动力。',
    tag: '生活',
    imgUrl: 'http://lackk.com/url/?a=now01bg',
  },
  {
    index: 1,
    title: '标题2',
    desc: '这是一个描述',
    tag: '生活',
    imgUrl: 'http://lackk.com/url/?a=now01bg',
  },
  {
    index: 2,
    title: '标题3',
    desc: '这是一个描述',
    tag: '生活',
    imgUrl: 'http://lackk.com/url/?a=now01bg',
  },
  {
    index: 3,
    title: '标题4',
    desc: '这是一个描述',
    tag: '生活',
    imgUrl: 'http://lackk.com/url/?a=now01bg',
  },
  {
    index: 4,
    title: '标题5',
    desc: '这是一个描述',
    tag: '生活',
    imgUrl: 'http://lackk.com/url/?a=now01bg',
  },
]

let listData=[
  { 
    id:'',
    title:'Tatsuro Suzuki 痴迷于黑白风白风格的城市街道街格的城市街道街拍',
    desc:'Tatsuro Suzuki 主要以拍摄街道人物，通过黑白照片，展现了日本东京城市生活的人生百态。',
    author:'lackk',
    imgUrl:'http://lackk.com/wp-content/uploads/2019/08/Tatsuo-Suzuki-09.jpg',
    content:'Tatsuro Suzuki 主要以拍摄街道人物，通过黑白照片展现了日本东京城市生活的人生百态。像许多街头摄影师一样，铃木从在外面拍摄的机会中获得灵感。那是遇到谁的第一次遇到的时候会突然一瞥的瞬间。',
    tag:['艺术','图片'],
  },
  { 
    id:'',
    title:'Tatsuro Suzuki 痴迷于黑白风白风格的城市街道街格的城市街道街拍',
    desc:'Tatsuro Suzuki 主要以拍摄街道人物，通过黑白照片，展现了日本东京城市生活的人生百态。',
    author:'lackk',
    imgUrl:'http://lackk.com/wp-content/uploads/2019/08/Tatsuo-Suzuki-09.jpg',
    content:'Tatsuro Suzuki 主要以拍摄街道人物，通过黑白照片展现了日本东京城市生活的人生百态。像许多街头摄影师一样，铃木从在外面拍摄的机会中获得灵感。那是遇到谁的第一次遇到的时候会突然一瞥的瞬间。',
    tag:['艺术','图片'],
  },
  { 
    id:'',
    title:'Tatsuro Suzuki 痴迷于黑白风白风格的城市街道街格的城市街道街拍',
    desc:'Tatsuro Suzuki 主要以拍摄街道人物，通过黑白照片，展现了日本东京城市生活的人生百态。',
    author:'lackk',
    imgUrl:'http://lackk.com/wp-content/uploads/2019/08/Tatsuo-Suzuki-09.jpg',
    content:'Tatsuro Suzuki 主要以拍摄街道人物，通过黑白照片展现了日本东京城市生活的人生百态。像许多街头摄影师一样，铃木从在外面拍摄的机会中获得灵感。那是遇到谁的第一次遇到的时候会突然一瞥的瞬间。',
    tag:['艺术','图片'],
  },
  { 
    id:'',
    title:'Tatsuro Suzuki 痴迷于黑白风白风格的城市街道街格的城市街道街拍',
    desc:'Tatsuro Suzuki 主要以拍摄街道人物，通过黑白照片，展现了日本东京城市生活的人生百态。',
    author:'lackk',
    imgUrl:'http://lackk.com/wp-content/uploads/2019/08/Tatsuo-Suzuki-09.jpg',
    content:'Tatsuro Suzuki 主要以拍摄街道人物，通过黑白照片展现了日本东京城市生活的人生百态。像许多街头摄影师一样，铃木从在外面拍摄的机会中获得灵感。那是遇到谁的第一次遇到的时候会突然一瞥的瞬间。',
    tag:['艺术','图片'],
  },
  { 
    id:'',
    title:'Tatsuro Suzuki 痴迷于黑白风白风格的城市街道街格的城市街道街拍',
    desc:'Tatsuro Suzuki 主要以拍摄街道人物，通过黑白照片，展现了日本东京城市生活的人生百态。',
    author:'lackk',
    imgUrl:'http://lackk.com/wp-content/uploads/2019/08/Tatsuo-Suzuki-09.jpg',
    content:'Tatsuro Suzuki 主要以拍摄街道人物，通过黑白照片展现了日本东京城市生活的人生百态。像许多街头摄影师一样，铃木从在外面拍摄的机会中获得灵感。那是遇到谁的第一次遇到的时候会突然一瞥的瞬间。',
    tag:['艺术','图片'],
  },
  { 
    id:'',
    title:'Tatsuro Suzuki 痴迷于黑白风白风格的城市街道街格的城市街道街拍',
    desc:'Tatsuro Suzuki 主要以拍摄街道人物，通过黑白照片，展现了日本东京城市生活的人生百态。',
    author:'lackk',
    imgUrl:'http://lackk.com/wp-content/uploads/2019/08/Tatsuo-Suzuki-09.jpg',
    content:'Tatsuro Suzuki 主要以拍摄街道人物，通过黑白照片展现了日本东京城市生活的人生百态。像许多街头摄影师一样，铃木从在外面拍摄的机会中获得灵感。那是遇到谁的第一次遇到的时候会突然一瞥的瞬间。',
    tag:['艺术','图片'],
  },
  { 
    id:'',
    title:'Tatsuro Suzuki 痴迷于黑白风白风格的城市街道街格的城市街道街拍',
    desc:'Tatsuro Suzuki 主要以拍摄街道人物，通过黑白照片，展现了日本东京城市生活的人生百态。',
    author:'lackk',
    imgUrl:'http://lackk.com/wp-content/uploads/2019/08/Tatsuo-Suzuki-09.jpg',
    content:'Tatsuro Suzuki 主要以拍摄街道人物，通过黑白照片展现了日本东京城市生活的人生百态。像许多街头摄影师一样，铃木从在外面拍摄的机会中获得灵感。那是遇到谁的第一次遇到的时候会突然一瞥的瞬间。',
    tag:['艺术','图片'],
  },
  { 
    id:'',
    title:'Tatsuro Suzuki 痴迷于黑白风白风格的城市街道街格的城市街道街拍',
    desc:'Tatsuro Suzuki 主要以拍摄街道人物，通过黑白照片，展现了日本东京城市生活的人生百态。',
    author:'lackk',
    imgUrl:'http://lackk.com/wp-content/uploads/2019/08/Tatsuo-Suzuki-09.jpg',
    content:'Tatsuro Suzuki 主要以拍摄街道人物，通过黑白照片展现了日本东京城市生活的人生百态。像许多街头摄影师一样，铃木从在外面拍摄的机会中获得灵感。那是遇到谁的第一次遇到的时候会突然一瞥的瞬间。',
    tag:['艺术','图片'],
  },
]

let listData1=[
  {
    id:'',
    title:'快乐就完了',
    desc:'集众多网站导航优点于一身,可自定义添加网站,设置快捷键,更换背景。',
  },{
    id:'',
    title:'快乐就完了',
    desc:'集众多网站导航优点于一身,可自定义添加网站,设置快捷键,更换背景。',
  },{
    id:'',
    title:'快乐就完了',
    desc:'集众多网站导航优点于一身,可自定义添加网站,设置快捷键,更换背景。',
  },
]

let tagData=[
  {
    id: 1,
    name: "软件",
    icon: "dribbble"
  },
  {
    id: 2,
    name: "图片",
    icon: "dribbble"
  },
  {
    id: 3,
    name: "音乐",
    icon: "dribbble"
  },
  {
    id: 4,
    name: "学习",
    icon: "dribbble"
  },
  {
    id: 5,
    name: "文章",
    icon: "dribbble"
  },
  {
    id: 6,
    name: "创意",
    icon: "dribbble"
  },
  {
    id: 7,
    name: "设计",
    icon: "dribbble"
  },
  {
    id: 8,
    name: "灵感",
    icon: "dribbble"
  },
]
