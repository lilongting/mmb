/**
 * Created by msi on 2017/11/6.
 */
(function (win) {
  var Route = {
    baseUrl: "http://192.168.32.53:9090/api",
    getParamObj: function () {
      // location.search
      var obj = {};
      var search = location.search;
      search = search.slice(1);
      var arr = search.split("&");
      for (var i = 0; i < arr.length; i++) {
        var key = arr[i].split("=")[0];
        // decodeURI()转换成文字
        var value = decodeURI(arr[i].split("=")[1]);
        obj[key] = value;
      }
      return obj;
    },
    getParam: function (key) {
      return this.getParamObj()[key];
    },
  }

  window.Route = Route;
})(window);