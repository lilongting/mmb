/**
 * Created by msi on 2017/11/8.
 */
$(function () {
  var data = {
    shopid: 0,
    areaid: 0
  }
  render(data);
  toggle(".gs-product .shop", "#shop");
  toggle(".gs-product .area", "#area");
  toggle(".gs-product .price", "#price");

  function toggle(sec1, sec2) {
    $(sec1).on("click", function () {
      $(sec2).toggleClass("on");

    });
    $(sec2).on("click", "a", function () {
      // $(this).addClass("on").siblings().removeClass("on").parent().parent().removeClass("on");
      $(this).parent().addClass("on");
      $(this).parent().siblings().removeClass("on")
      $(this).closest(".popbox ").removeClass("on");
      $(sec1).hasClass("shop")?  $(".filter .shop").html($(this).html() + "<i></i>"):"";
      $(sec1).hasClass("area")?  $(".filter .area").html($(this).html() + "<i></i>"):"";



      var arr = $(this).data();
      console.log($(this));
      console.log(arr);
      for (var k in arr) {
        if (k == "shopid") {
          data.shopid = arr[k];
        }
        if (k == "areaid") {
          data.areaid = arr[k];
        }
      }
      ;
      render(data);
    })
  };


  $.ajax({
    type: "get",
    url: Route.baseUrl + "/getgsshop",
    data: {},
    dataType: "json",
    success: function (data) {
      console.log(data);
      $("#shop>ul").html(template("sp", data));
    }
  })
  $.ajax({
    type: "get",
    url: Route.baseUrl + "/getgsshoparea",
    data: {},
    dataType: "json",
    success: function (data) {
      console.log(data);
      $("#area>ul").html(template("ar", data));
    }
  })

  function render(data) {
    $.ajax({
      type: "get",
      url: Route.baseUrl + "/getgsproduct",
      data: data,
      dataType: "json",
      success: function (msg) {
        // console.log(msg);
        $("#container").html(template("list", msg))
      }
    })
  };


})