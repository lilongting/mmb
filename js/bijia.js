/**
 * Created by msi on 2017/11/6.
 */
$(function () {
  var id = Route.getParam("productid");
  // console.log(id);
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
  $.ajax({
    type: "get",
    url: Route.baseUrl + "/getproductcom",
    data:{
      productid: id
    },
    dataType: "json",
    success: function (data) {
      // console.log(data);
      $(".bijia_com_list").html(template("tpl2", data));
    }
  })
  
})