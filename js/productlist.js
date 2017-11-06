/**
 * Created by msi on 2017/11/6.
 */
$(function () {
  var id = Route.getParam("categoryid");
  // console.log(id);
  //渲染面包屑导航
  $.ajax({
    type: "get",
    url: Route.baseUrl + "/getcategorybyid",
    data: {
      categoryid: id
    },
    dataType: "json",
    success: function (data) {
      // console.log(data);
      $(".product_title").html(template("tpl", data));
    }
  });
  //渲染商品列表
  var page = 1;
  var maxPage = 3;
  function render() {
    $.ajax({
      type: "get",
      url: Route.baseUrl + "/getproductlist",
      data: {
        categoryid: id,
        pageid: page
      },
      dataType: "json",
      success: function (data) {
        console.log(data);
        $(".product_list>ul").html(template("tpl2", data));
      }
    });
  }

  render();

  $(".page .prev").on("click", function () {
    page--;
    if (page <= 1) {
      page = 1;
    }
    render();
  });
  $(".page .next").on("click", function () {
    page++;
    if (page > maxPage) {
      page = maxPage;
    }
    render();
  })
});