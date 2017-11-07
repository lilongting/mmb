/**
 * Created by msi on 2017/11/7.
 */
$(function () {
  $.ajax({
    type:"get",
    url: Route.baseUrl +"/getbaicaijiatitle",
    dataType:"json",
    success:function (data) {
      console.log(data);
    }
  });
  $.ajax({
    type:"get",
    url: Route.baseUrl +"/getbaicaijiaproduct",
    data:{

    },
    dataType:"json",
    success:function (data) {
      console.log(data);
    }
  });
})