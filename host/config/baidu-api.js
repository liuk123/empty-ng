module.exports = {
  baiduAi:[
    {
      url: 'https://aip.baidubce.com/rpc/2.0/nlp/v1/news_summary',
      key: 'newsSummary',
      amount: -1, // 减去金额
      appKey: 'hxlK3qprM5wXf9hDnW6gCgz8',
      secretKey: '011vxI5Cks5yUyylXHkaVqw8ZmHKcDxX',
      contentType: 'application/json'
    },{
      url: 'https://aip.baidubce.com/rpc/2.0/nlp/v2/comment_tag',
      key: 'commentTag',
      amount: -1,
      appKey: 'hxlK3qprM5wXf9hDnW6gCgz8',
      secretKey: '011vxI5Cks5yUyylXHkaVqw8ZmHKcDxX',
      contentType: 'application/json'
    },{
      url: 'https://aip.baidubce.com/rest/2.0/ocr/v1/accurate_basic',
      key: 'ocrImage',
      amount: -5,
      appKey: 'b6cBFiYxfA1YTVt12jfMEaYb',
      secretKey: 'Ii43aq7C1DsaqtMqrkhH2VPlGzMugcQR',
      contentType: 'application/x-www-form-urlencoded'
    },
  ]
}