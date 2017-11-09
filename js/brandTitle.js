/**
 * Created by msi on 2017/11/9.
 */
$(function () {
    $.ajax({
      type:"get",
      url:Route.baseUrl+ "/getbrandtitle",
      dataType:"json",
      success:function (data) {
        console.log(data);
        $(".category_list").html(template("tpl",data));
      }
    })
})