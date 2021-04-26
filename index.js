'use strict'

function signup(){
    $('#signupButton').on('click', function(event){
        $('.Logo').remove();
        $('#pageContent').empty();
        $('#pageContent').append(`
            <div id="emailCapture">If you would like to be notified when we launch, please leave your email address here.
                <br /><br />
                <input type="text" id="emailAddress" size="40"/>
                <input type="button" id="btnSubmit" value="Submit"/>
                <div style="padding:10px;margin:10px;" id="emailResponse"></div>
             </div>`);
    })
}

function mission(){
    $('#missionButton').on('click', function(event){
        $('.Logo').remove();
        $('#pageContent').empty();
        $('#pageContent').append(`<h2 id="mission">Our Mission</h2>
        `);
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
    mission();
    reload();
})