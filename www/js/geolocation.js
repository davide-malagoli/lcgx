var loc;
var geo;

/*function u(pos){
    location=pos;
};*/

function initGeo() {
    geo = intel.xdk.geolocation.watchPosition(function (pos) {
        //location=pos;
        //alert(pos);
        loc = pos;
        //$("#pos").html(loc.coords.latitude);
        //alert("c");
        //alert(loc);
    },function () {
        $("#pos").html("error");
    },
    {enableHighAccuracy:true}                                        
    );
};

function reverseGeo(txt){
    var coords;
    for(var i=0;i<luoghi_lucca.length;i++){
        if(luoghi_lucca[i].name==txt){
             coords={lat:luoghi_lucca[i].lat,lon:luoghi_lucca[i].lon};
            break;
        }
    }
    return coords;
}

function checkNavigationFromMyPosition(txt,success,fail){
    var coords2=reverseGeo(txt);
    if(!fail){
        fail=function(coords1,coords2){};
    }
    
    if(!loc && !coords2){
        fail(loc,coords);
    }else if(!loc){
        fail(loc,{lat:coords2.lat,lon:coords2.lon});
    }else if(!coords2){
        success({lat:loc.coords.lat,lon:loc.coords.lon},coords2);
        
    }else if(success){
        success({lat:loc.coords.lat,lon:loc.coords.lon},{lat:coords2.lat,lon:coords2.lon});  
    }
}

function navigateFromMyCurrentPosition(txt){
    checkNavigationFromMyPosition(txt,
                                  function(coords1,coords2){
                                    doMarkers(coords1.lat,coords1.lon,coords2.lat,coords2.lon);
                                  },
                                  function(coords1,coords2){}
    );                                      
}

function checkSearchButton(txt){
    checkNavigationFromMyPosition(txt,
                                  function(coords1,coords2){
                                    doMarkers(coords1.lat,coords1.lon,coords2.lat,coords2.lon);
                                  },
                                  function(coords1,coords2){}
    ); 
}

function doMarkers(lat1,lon1,lat2,lon2){

    cgt_GraphHopperUI837_click1175(window.graphopperUI.this$0834,L.latLng(lat1, lon1));
    cgt_GraphHopperUI837_click1175(window.graphopperUI.this$0834,L.latLng(lat2, lon2));

}