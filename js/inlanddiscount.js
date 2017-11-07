/**
 * Created by msi on 2017/11/7.
 */
$(function () {
  $.ajax({
    type: "get",
    url: Route.baseUrl + "/getinlanddiscount",
    dataType: "json",
    success: function (data) {
      console.log(data);
      $("#main>ul").html(template("tpl",data));
    }
  })
})