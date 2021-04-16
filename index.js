'use strict'

function signup(){
    $('#signup').on('click', function(event){
        $('.Logo').remove();
        $('#pageContent').append(`
            <div id="emailCapture">If you would like to be notified when we launch, please leave your email address here.
            <br /><br />
        <input type="text" id="emailAddress" size="40"/>
        <input type="button" id="btnSubmit" value="Submit"/>
        <div style="padding:10px;margin:10px;" id="emailResponse"></div>
    </div>`);
    })
}

function reload(){
    $('#title').on('click', function(event){
        location.reload();
    })
}

$(function(){
    console.log("Homepage Loaded")
    signup();
    reload();
})