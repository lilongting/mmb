/**
 * Created by msi on 2017/11/6.
 */
$(function () {
  var id = Route.getParam("productid");
  // console.log(id);
  //渲染面包屑导航
  $.ajax({
    type: "get",
    url: Route.baseUrl + "/getproduct",
    data: {
      productid: id
    },
    dataType: "json",
    success: function (data) {
      console.log(data);
      $(".xuanran").html(template("tpl", data));
    }
  });
  
})