/**
 * Created by msi on 2017/11/7.
 */
$(function () {

  var ul = document.querySelector(".nav_tiltle>ul");
  var lis = ul.children;
  $.ajax({
    type: "get",
    url: Route.baseUrl + "/getbaicaijiatitle",
    dataType: "json",
    success: function (data) {
      console.log(data);
      $(".nav_tiltle>ul").html(template("tpl", data))
      $(lis[0]).siblings().removeClass("active")
      render(0);
    }
  });

  $(".nav_tiltle").on("click", "li", function () {
    // console.log("haha");
    $(this).addClass("active").siblings().removeClass("active");
    var titleid = $(this).data('titleid');
    render(titleid);
    // location.href = "/baicaijia.html?titleid=" + titleid;
  })

  function render(titleid) {
    $.ajax({
      type: "get",
      url: Route.baseUrl + "/getbaicaijiaproduct",
      data: {
        titleid: titleid
      },
      dataType: "json",
      success: function (data) {
        console.log(data);
        $(".list>ul").html(template("tpl2", data));
      }
    });
  }
  new IScroll('.nav_tiltle',{
    scrollX:true,
    scrollY:true
  });
});
