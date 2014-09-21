function loadEventi(){
    var lista=$("#eventi ul");
    $.each(eventi,function(name,v){
        lista.append("<li><a href='#dettagli'>"+s[name.toString()]+"</a></li>");
    });
}

function loadOspiti(){
    
}