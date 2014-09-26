var loc;
var geo;

/*function u(pos){
    location=pos;
};*/

function initGeo(){
    geo= intel.xdk.geolocation.watchPosition(function(pos){
        //location=pos;
        //alert(pos);
        loc=pos;
        //$("#pos").html(loc.coords.latitude);
        //alert("c");
        //alert(loc);
    },function(){
        $("#pos").html("error");
    },
    {enableHighAccuracy:true}                                        
    );
};