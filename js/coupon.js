/**
 * Created by msi on 2017/11/8.
 */
$(function () {
  $.ajax({
    type:"get",
    url:Route.baseUrl+"/getcoupon",
    dataTpye:"json",
    success:function (data) {
      console.log(data);
      $(".main>ul").html(template("tpl",data));
    }
  });
});