/**
 * Created by msi on 2017/11/7.
 */
$(function () {
  var id = Route.getParam("pageid") || 1;

  $.ajax({
    type: "get",
    url: Route.baseUrl + "/getmoneyctrl",
    data: {
      pageid: id
    },
    dataType: "json",
    success: function (data) {
      console.log(data);
      $(".product_list_ul").html(template("tpl", data))
      $("#selectPage").html(template("tpl2", data))
      var pageCount = Math.ceil(data.totalCount / data.pagesize)
      data.pages = pageCount;
      data.id = id;
    }
  });
  // var pages = data.pages;
  $(".prev").on("click", function () {
    id--;
    if (id < 1) {
      id = 1;
    }
    location.href = "http://www.mmb.com/moneyctrl.html?pageid=" + id;
  });
  $(".next").on("click", function () {
    id++;
    if (id < 1) {
      id = 1;
    }
    location.href = "http://www.mmb.com/moneyctrl.html?pageid=" + id;
  })

})