var loc;
var geo;
//var lastDest;

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

function checkNavigation(srcTxt,txt,success,fail){
    var coords2=reverseGeo(txt);
    var src=reverseGeo(srcTxt);
    if(!fail){
        fail=function(coords1,coords2){};
    }
    
    if(!src && !coords2){
        fail(src,coords);
    }else if(!src){
        fail(src,{lat:coords2.lat,lon:coords2.lon});
    }else if(!coords2){
        fail({lat:src.lat,lon:src.lon},coords2);
        
    }else if(success){
        success({lat:src.lat,lon:src.lon},{lat:coords2.lat,lon:coords2.lon});  
    }
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
        fail({lat:loc.coords.lat,lon:loc.coords.lon},coords2);
        
    }else if(success){
        success({lat:loc.coords.latitude,lon:loc.coords.longitude},{lat:coords2.lat,lon:coords2.lon});  
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

function navigateFromPosition(txtSrc,txt){
    checkNavigation(txtSrc,txt,
                                  function(coords1,coords2){
                                    doMarkers(coords1.lat,coords1.lon,coords2.lat,coords2.lon);
                                  },
                                  function(coords1,coords2){}
    );                                      
}

function navigate(){
    navigateFromMyCurrentPosition(lastDest);
}

function navigateSrc(){
    navigateFromPosition(lastSrc,lastDest);
}

function checkSearchButton(txt){
    checkNavigationFromMyPosition(txt,
                                  function(coords1,coords2){
                                    lastDest=txt;
                                    $('#naviga_cerca').on('click',navigate);
                                    $('#naviga_cerca').addClass('show');
                                  },
                                  function(coords1,coords2){
                                    $('#naviga_cerca').removeClass('show');
                                  }
    ); 
}
function checkSearchButtonSrc(txtSrc,txt){
    checkNavigationFromMyPosition(txtSrc,txt,
                                  function(coords1,coords2){
                                    lastDest=txt;
                                    lastSrc=txtSrc;
                                    $('#naviga_cerca').on('click',navigateSrc);
                                    $('#naviga_cerca').addClass('show');
                                  },
                                  function(coords1,coords2){
                                    $('#naviga_cerca').removeClass('show');
                                  }
    ); 
}

function doMarkers(lat1,lon1,lat2,lon2){

    /*cgt_GraphHopperUI837_click1175(window.graphopperUI.this$0834,L.latLng(lat1, lon1));
    cgt_GraphHopperUI837_click1175(window.graphopperUI.this$0834,L.latLng(lat2, lon2));*/
    cgt_GraphHopperUI849_click1181(window.graphopperUI.this$0846,L.latLng(lat1, lon1));
    cgt_GraphHopperUI849_click1181(window.graphopperUI.this$0846,L.latLng(lat2, lon2));
}