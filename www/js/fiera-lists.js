function loadEventi(){
    var lista=$("#eventi ul");
    $.each(eventi,function(name,v){
        lista.append("<li><a href='#dettagli'>"+s[name.toString()]+"</a></li>");
    });
}

function loadOspiti(){
    
}

function loadLuoghi(){
    var lista=$("#naviga ul");
    //alert(lista);
    //alert(luoghi_lucca);
    for(var i=0;i<luoghi_lucca.length;i++){
        //alert(luoghi_lucca[i].name);
        lista.append("<li class='show'><a href='#' onclick='changeValue(\""+luoghi_lucca[i].name+"\")'>"+luoghi_lucca[i].name+"</a></li>");
    }
    //$.each(luoghi_lucca,function(i){
       
    //    lista.append("<li><a href='#'>"+i+"</a></li>");
    //});
};

function loadLists(){
    loadEventi();
    loadOspiti();
    loadLuoghi();
}