module.exports = {
  // link: 'http://39.103.199.186:8090',
  // origin: 'http://www.cicode.cn'
  link: 'http://localhost:8090',
  origin: 'http://localhost:4200',
  baseUrl:'/api',

  baiduAi:[
    {
      url: 'https://aip.baidubce.com/rpc/2.0/nlp/v1/news_summary',
      key: 'newsSummary',
      amount: -1,
    },{
      url: 'https://aip.baidubce.com/rpc/2.0/nlp/v2/comment_tag',
      key: 'commentTag',
      amount: -1
    },

  ]
}