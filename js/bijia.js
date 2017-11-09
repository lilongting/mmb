/**
 * Created by msi on 2017/11/6.
 */
$(function () {
  var id = Route.getParam("productid");
  var categoryid = Route.getParam("categoryid");
  var cate;
  $.ajax({
    type: "get",
    url: Route.baseUrl + "/getproduct",
    data: {
      productid: id
    },
    dataType: "json",
    success: function (data) {
      $(".xuanran").html(template("tpl", data));
      var arr = data.result[0].productName.split(" ");

      data.pro =arr[0];
      cate = data.pro;
    }
  });
  $.ajax({
    type: "get",
    url: Route.baseUrl + "/getproductcom",
    data: {
      productid: id
    },
    dataType: "json",
    success: function (data) {
      // console.log(data);
      $(".bijia_com_list").html(template("tpl2", data));
    }
  });
  $.ajax({
    type: "get",
    url: Route.baseUrl + "/getcategorybyid",
    data: {
      categoryid: categoryid
    },
    dataType: "json",
    success: function (data) {
      // console.log(data);
      data.pro = cate;
      console.log(data);
      $(".bijia_title").html(template("nav", data));
    }
  })
  
})