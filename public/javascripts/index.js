function loadJssdk(res){
  console.log(res)
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: res.datas.appId, // 必填，公众号的唯一标识
      timestamp: res.datas.timestamp, // 必填，生成签名的时间戳
    nonceStr: res.datas.noncestr, // 必填，生成签名的随机串
    signature: res.datas.signature, // 必填，签名，见附录1
    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage','previewImage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
});
  wx.ready(function(){
    previewImage();
    wx.onMenuShareTimeline({
      title: '医睦科技6月期刊之BMP', // 分享标题
      link: 'http://www.immortalshealth.com/paper', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: 'http://www.immortalshealth.com/paper/images/wxBmp.jpg' // 分享图标
    });
    wx.onMenuShareAppMessage({
      title: '医睦科技6月期刊之BMP', // 分享标题
      desc: '', // 分享描述
      link: 'http://www.immortalshealth.com/paper', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: 'http://www.immortalshealth.com/paper/images/wxBmp.jpg' // 分享图标
    });
  });
}
function previewImage(){
  let ImageSrcs=[];
  let http='http://www.immortalshealth.com/paper/images/';
  for (var i=1;i<=64;i++) {
    ImageSrcs.push(http+i+".png");
  }
  wx.previewImage({
    current: ImageSrcs,
    urls: ImageSrcs
  });
}

document.getElementById("imgs").onclick = function(e){
  previewImage()
};

function getWxJssdk(){
//  fetch("/paper/initWx?url="+encodeURIComponent(location.href.split('#')[0]),{
//    method:"GET",
//  }).then((res)=>{
//    return res.json();
//}).then(function(res){
//    if(res.status == 1){
//      loadJssdk(res)
//    }
//  })
  $.ajax({
    type: "GET",
    url:"/paper/initWx?url="+encodeURIComponent(location.href.split('#')[0]),
    success: (res)=> {
      if(res.status == 1){
        loadJssdk(res)
      }
    }
  })
}
getWxJssdk();