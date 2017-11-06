/**
 * Created by msi on 2017/11/5.
 */
$(function () {
  //渲染商品展示
  $.ajax({
    type: "get",
    url:Route.baseUrl+ "/getmoneyctrl",
    dataType: "json",
    success: function (data) {
      // console.log(data);
      $(".mmb_product_list>ul").html(template("tpl", data));
      // $(".mmb_product_list>ul a>.pic").each(function (i,e) {
      //   $(this).prepend(data.result[i].productImgSm);
      // })
    }
  })
  //渲染导航
  $.ajax({
    type: "get",
    url: Route.baseUrl+"/getindexmenu",
    dateType: "json",
    success: function (data) {
      console.log(data);
      $(".nav_row").html(template("tpl2", data));
      $(".nav_row li").each(function (i, e) {
        if (i > 7) {
          $(".nav_row li").eq(i).addClass("hide");
          $(".nav_row li").eq(7).on("click",function () {
            $(".nav_row li").eq(i).toggleClass("hide");
          })
        }
      })
    }
  })
});