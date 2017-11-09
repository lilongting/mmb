/**
 * Created by msi on 2017/11/7.
 */
$(function () {
  var pd = Route.getParam("pageid") || 0;

  $.ajax({
    type: "get",
    url: Route.baseUrl + "/getmoneyctrl",
    data: {
      pageid: pd
    },
    dataType: "json",
    success: function (data) {
      console.log(data);
      $(".product_list_ul").html(template("tpl", data))
      var pageCount = Math.ceil(data.totalCount / data.pagesize)
      data.pages = pageCount;
      data.pd = pd;
      // var arr = [pd,pageCount];
      // console.log(arr);
      // $("#selectPage").html(template("tpl2", {arr:arr}))
      //注意代码的前后顺序
      $("#selectPage").html(template("tpl2", data))
      $(".next").on("click", function () {
        pd++;
        if (pd> data.pages) {
          pd = data.pages;
        }
        location.href = "http://www.mmb.com/moneyctrl.html?pageid=" + pd;
      })
    }
  });
  // var pages = data.pages;
  $(".prev").on("click", function () {
    pd--;
    if (pd < 1) {
      pd = 1;
    }
    location.href = "http://www.mmb.com/moneyctrl.html?pageid=" + pd;
  });
  $("#selectPage").on("change",function () {
    var val = $(this).val();
    location.href = "http://www.mmb.com/moneyctrl.html?pageid=" + val;
  })


})