/**
 * Created by msi on 2017/11/6.
 */
$(function () {
  var id = Route.getParam("categoryid");
  var page = Route.getParam("pageid");
  var category = Route.getParam("category");
  var categoryid = Route.getParam("categoryid");
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
        data.categoryid =categoryid;
        $(".product_list>ul").html(template("tpl2", data));
        var maxPage = Math.ceil(data.totalCount / data.pagesize);
        data.maxPage = maxPage;
        data.page = page;
        console.log(data);
        $("#selectPage").html(template("tpl3", data));
        $(".page .next").on("click", function () {
          page++;
          if (page > data.maxPage) {
            page = data.maxPage;
          }
          location.href = "http://www.mmb.com/productlist.html?categoryid=" + id + "&category=" + category + "&pageid=" + page;
        })
      }
    });
  }

  render();

  $("#prev").on("click", function () {
    page--;
    if (page < 1) {
      page = 1
    }
    location.href = "http://www.mmb.com/productlist.html?categoryid=" + id + "&category=" + category + "&pageid=" + page;
  });
  $("#selectPage").on("change", function () {
    var value = $(this).val();
    location.href = "http://www.mmb.com/productlist.html?categoryid=" + id + "&category=" + category + "&pageid=" + value;
  })
});