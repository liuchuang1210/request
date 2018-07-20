/**
 * Created by liuch on 2018/7/2.
 */

//封装ajax
function myAjax(url,token,type,method,dataType,params,resolve,reject){
  $.ajax({
    url:url,
    contentType:type,
    headers:{
      'Authorization':token
    },
    type:method,
    dataType:dataType,
    data:params,
    success:function(data){
      resolve(data)
    },error:function(data){
      reject(data)
    }
  })
}
//return一个promise
function getInfoRequest(url,token,type,method,dataType,params){

    return new Promise(function(resolve,reject){
      myAjax(url,token,type,method,dataType,params,resolve,reject)
    })


}
//在async函数中执行ajax 获取data
// getInfo 参数 http请求url，xsytoken，contentType，请求方式，dataType，参数
//返回值  服务器返回信息


async function request(url,token,type,method,dataType,params) {
  try{
    return getInfoRequest(url,token,type,method,dataType,params)
  }catch(e){
    return e
  }
}

export default request
