/**
 * Created by plter on 8/25/14.
 */

if(!window.oojs){
    window.oojs = {};
}

(function () {

    oojs.copyFields = function (dist,src) {
        for(var k in src){
            dist[k] = src[k];
        }
    };

    var jsMap = {};
    oojs.loadJs = function (file) {
        if(!jsMap[file]){
            jsMap[file] = 1;

            var s = document.createElement("script");
            s.src = file;
            document.head.appendChild(s);
        }
    };
}());