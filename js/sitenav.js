/**
 * Created by msi on 2017/11/9.
 */
$(function () {

  $.ajax({
    type: "get",
    url: Route.baseUrl + "/getsitenav",
    dataType:"json",
    success:function (data) {
      console.log(data);
      $(".link").html(template("tpl",data));
    }
  })

})