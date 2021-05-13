'use strict'

function signup(){
    $('#signupButton').on('click', function(event){
        $('.Logo').remove();
        $('#pageContent').empty();
        $('#pageContent').append(`
            <div class="alert alert-success" role="alert" id="succ">
                <p id="txt">
                    <strong>Success!</strong> You have been signed up successfully!
                </p>
            </div>
            <div class="alert " role="alert" id="fail">
                <p id="txt">
                    <strong>Sorry!</strong> You have entered an invalid E-mail.
                </p>
            </div>
            <hgroup>
                <h1>Subscribe</h1>
            </hgroup>
            <form id= "emailForm">
                <div class="group">
                    <input type="email" name="email_add"><span class="highlight"></span><span class="bar"></span>
                    <label>Email</label>
                </div>
                <button value="submit" type="button" class="button buttonBlue" value= "submit_button" id="sub" onclick="saveToFirebase()">Subscribe
                </button>
            </form>
        `);
        event.preventDefault();
    })
}

function mission(){
    $('#missionButton').on('click', function(event){
        $('.Logo').remove();
        $('#pageContent').empty();
        $('#pageContent').append(`<h2 id="mission">Our Mission</h2>`);
    })
}

function program(){
    $('#programButton').on('click', function(event){
        $('.Logo').remove();
        $('#pageContent').empty();
        $('#pageContent').append(`<h2 id="program">Our Program</h2>`);
    })
}

function meetStaff(){
    $('#meetStaffButton').on('click', function(event){
        $('.Logo').remove();
        $('#pageContent').empty();
        $('#pageContent').append(`<h2 id="meetStaff">Our Staff</h2>`);
    })
}

function calendar(){
    $('#calendarButton').on('click', function(event){
        $('.Logo').remove();
        $('#pageContent').empty();
        $('#pageContent').append(`<h2 id="calendar">Calendar</h2>`);
    })
}

function reload(){
    $('#title').on('click', function(event){
        location.reload();
    })
}

function saveToFirebase(){
    const data = document.getElementById('emailForm').elements[0].value;
    if(ValidateEmail(data)){
    database.ref('emails').push({ email: data}).then(function(snapshot) {
      pass(); // some success method
      }, function(error) 
         {
            console.log('error' + error);
            fail(); // some error method
          });
     document.getElementById('frm1').reset();
    }

}

function ValidateEmail(mail){
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail))
        {
          pass();
          return (true);
        }
    else{
          fail();
          return (false);
          }
} 

function fail(){
    $('#fail').finish().show().delay(1000).fadeOut(6000);
}

function pass(){
    $('#succ').finish().show().delay(1000).fadeOut(6000);
}

$(function(){
    console.log("Homepage Loaded")
    signup();
    mission();
    program();
    meetStaff();
    calendar();
    reload();
})