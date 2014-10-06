var lastInput;

function hideShowNavigaListDest(){
    lastInput="dest";
    hideShowNavigaList();
    check
}

function hideShowNavigaListSrc(){
    lastInput="src";
    hideShowNavigaList();
}

function hideShowNavigaList(){
    $('#naviga_list').find('li').each(function(n,it){
        if($(it).text().toLowerCase().indexOf($('#destinazione').val())>(-1)){
            $(it).addClass('show');
        }else{
            $(it).removeClass('show');
        }
    });
}

function initHandlers(){
    $("#destinazione").on("input", hideShowNavigaListDest);
    $("#partenza_txt").on("input", hideShowNavigaListSrc);
};

function changeValue(text){
    if(lastInput=='src'){
        $('#partenza_txt').val(text);
    }else{
        $('#destinazione').val(text);
 
    }
}

