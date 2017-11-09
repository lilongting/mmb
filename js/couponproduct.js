/**
 * Created by msi on 2017/11/8.
 */
$(function () {
  var couponid = Route.getParam("couponid");
    $.ajax({
      type:"get",
      url:Route.baseUrl+"/getcouponproduct",
      data:{
        couponid:couponid
      },
      dataType:"json",
      success:function (data) {
        console.log(data);
        $(".main_list>ul").html(template("tpl",data));
      }
    })
})