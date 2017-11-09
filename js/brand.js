/**
 * Created by msi on 2017/11/9.
 */
$(function () {
  var brandtitleid = Route.getParam("brandtitleid");
  //tpl
  $.ajax({
    type: "get",
    url: Route.baseUrl + "/getbrand",
    data: {
      brandtitleid: brandtitleid
    },
    dataType: "json",
    success: function (data) {
      // console.log(data);
      $(".category_list").html(template("tpl", data));
    }
  });
  //tpl2
  $.ajax({
    type: "get",
    url: Route.baseUrl + "/getbrandproductlist",
    data: {
      brandtitleid: brandtitleid,
      pagesize: 4
    },
    dataType: "json",
    success: function (data) {
      // console.log(data);
      $(".product_list>ul").html(template("tpl2", data));
      var productid = $(".product_list>ul").find("li").eq(0).data('productid');
      var img = $(".product_list>ul").find("li").eq(0).data('img');

      //tpl3
      $.ajax({
        type: "get",
        url: Route.baseUrl + "/getproductcom",
        data: {
          productid: productid
        },
        dataType: "json",
        success: function (data) {
          data.img =img;
          // console.log(data);
          $(".product_com>ul").html(template("tpl3",data));
        }
      })
    }
  });



})