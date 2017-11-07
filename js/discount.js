/**
 * Created by msi on 2017/11/7.
 */
$(function () {
  var id = Route.getParam("productid");
  $.ajax({
    type: "get",
    url: Route.baseUrl + "/getdiscountproduct",
    data: {
      productid: id
    },
    dataType:"json",
    success:function (data) {
      console.log(data);
      $(".cu_content").html(template("tpl",data));
      $(".pl_content").html(template("tpl2",data));
    }
  })
})