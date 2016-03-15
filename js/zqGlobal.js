/**
 * Created by qizim on 2016-03-06.
 */

function init(){
    $("#zqNumFoodRating").on("change", calculateRating);
    $("#zqNumServRating").on("change", calculateRating);
    $("#zqNumValueRating").on("change", calculateRating);
    $("#zqNumEditFoodRating").on("change", calculateEditRating);
    $("#zqNumEditServRating").on("change", calculateEditRating);
    $("#zqNumEditValueRating").on("change", calculateEditRating);
    $("#zqBtnSave").on("click", zqBtnSave_click);
    $("#zqBtnEditUpdate").on("click", zqBtnEditUpdate_click);
    $("#zqBtnSaveDefaults").on("click", zqBtnSaveDefaults_click);
}
function calculateRating()
{
    $("#zqTxtAllRating").val(getAllRating($("#zqNumFoodRating").val(),$("#zqNumServRating").val(),$("#zqNumValueRating").val())+"%");
}

function calculateEditRating()
{
    $("#zqTxtEditAllRating").val(getAllRating($("#zqNumEditFoodRating").val(),$("#zqNumEditServRating").val(),$("#zqNumEditValueRating").val())+"%");
}

function zqBtnEditUpdate_click(){
    if(doValidate_ZQFrmEdit()){

        console.info("Form Edit is valid.");
    }
}
function zqBtnSave_click(){
    if(doValidate_ZQFrmAdd()){
        console.info("Form Add is valid.");
    }
}

function zqBtnSaveDefaults_click(){
    localStorage.setItem("DefaultEmail", $("#zqTxtDefaultEmail").val());
    alert("Default reviewer email saved.");
}
function showDiv (box) {
    var chboxs = document.getElementsByName("zqCbAddRating");

    var chboxedit = document.getElementsByName("zqCbEditAddRating");
    var vis = "none";
    for(var i=0;i<chboxs.length;i++) {
        if(chboxs[i].checked){
            vis = "block";
            break;
        }
    }
    for(var i=0;i<chboxedit.length;i++) {
        if(chboxedit[i].checked){
            vis = "block";
            break;
        }
    }
    document.getElementById(box).style.display = vis;
}


$(document).ready(function () {
    init();
    showDiv();
});
