/**
 * Created by msi on 2017/11/6.
 */
$(function () {
  $.ajax({
    type: "get",
    url: Route.baseUrl + "/getcategorytitle",
    dataType: "json",
    success: function (data) {
      // console.log(data);
      $("#category .category_title").html(template("tpl", data));
      $(".category_title").on("click", ".category_title_a", function () {
        $(this).siblings(".category_content").toggleClass("hide")
        var id = $(this).data("id");
        $.ajax({
          type: "get",
          url: Route.baseUrl + "/getcategory",
          data: {
            titleid: id
          },
          dataType: "json",
          success: function (msg) {
            console.log(msg);
            $("#category .category_content").html(template("tpl2",msg));
          }
        })
      });
    }

  })
})