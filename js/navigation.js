/*
function show(idname){
    console.log(idname);
    $('.show').removeClass('show');
    $(idname).addClass('show');
    return false;
}
*/
/*
let curr_div = "#about";

function show(idname){
    document.getElementById(curr_div).style.display = "none";
    document.getElementById(idname).style.display = "block";
    curr_div = idname;
    return false;
}
*/        

let curr_div = "about";

function show(idname){
    console.log("idname: ", idname);
    console.log("curr_div: ", curr_div);
    let element1 = document.getElementById(curr_div);
    console.log(element1);
    document.getElementById(curr_div).style.display = "none";
    document.getElementById(idname).style.display = "block";
    curr_div = idname;
    return false;
}