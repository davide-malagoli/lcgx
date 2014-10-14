$(document).on('click', '#amici', function() {
        loadAmici();
    });

function loadAmici(){
 
    openFB.init("778667338858322");
    openFB.login("publish_stream,publish_actions,offline_access",function(){intel.xdk.notification.alert("ok")},function(){intel.xdk.notification.alert("No"); });
}