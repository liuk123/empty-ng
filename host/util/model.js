function Restult(resultCode,resultMsg,data){
  this.resultCode = data==null?0:resultCode
  this.resultMsg = resultMsg
  this.data = data
}

module.exports = {
  Restult
}