// Global variable

var start = 60;
var correct = 0;
var wrong = 0;
var empty = 0;

// Control what is seen and start the function

$(document).ready(function() {


  $("#page1").hide();
  $("#last").hide();
  $("#timer").hide();
  $("#final").hide();

  // Start button is clicked

    $("#start").on("click", function() {
    $("#timer").show();
    $("#final").show();
    $("#page1").show();
    $("#trivia").hide();
    $("#start").hide();
    $("#first").hide();

    startCountdown();

  });

  function countdown() {
    start--;
    $('#timer').html(start + " Seconds");

    if (start == -1) {
      timeUp();

      $("#timer").hide();
      $("#page1").hide();
      $("#page2").hide();
      $("#page3").hide();
      $("#page4").hide();
      $("#page5").hide();
      $("#last").show();
    }

    $("#final").on("click", function(){

			start = 0;

			});


  }

  function startCountdown() {

    setInterval(countdown, 1000);

  }


  function timeUp() {

    var one = $('input:radio[name="one"]:checked').val();
    var two = $('input:radio[name="theworldandthensome"]:checked').val();
    var three = $('input:radio[name="three"]:checked').val();
    var four = $('input:radio[name="four"]:checked').val();
    var five = $('input:radio[name="five"]:checked').val();
    var six = $('input:radio[name="six"]:checked').val();
    var seven = $('input:radio[name="seven"]:checked').val();
    var eight = $('input:radio[name="eight"]:checked').val();
    var nine = $('input:radio[name="nine"]:checked').val();
    var ten = $('input:radio[name="ten"]:checked').val();
// Check for the right answer

    if (one == undefined) {
      empty++;
    } else if(one == "china") {
      correct++;
    } else {
      wrong++;
    }
console.log(one);

    if (two == undefined) {
      empty++;
    } else if (two == "italy") {
      correct++;
    } else {
      wrong++;
    }


    if (three == undefined) {
      empty++;
    } else if (three == "peru") {
      correct++;
    } else {
      wrong++;
    }


    if (four == undefined) {
      empty++;
    } else if (four == "germany") {
      correct++;
    } else {
      wrong++;
    }


    if (five == undefined) {
      empty++;
    } else if (five == "russia") {
      correct++;
    } else {
      wrong++;
    }

    if (six == undefined) {
      empty++;
    } else if (five == "japan") {
      correct++;
    } else {
      wrong++;
    }

    if (seven == undefined) {
      empty++;
    } else if (five == "india") {
      correct++;
    } else {
      wrong++;
    }

    if (eight == undefined) {
      empty++;
    } else if (five == "france") {
      correct++;
    } else {
      wrong++;
    }

    if (nine == undefined) {
      empty++;
    } else if (five == "andorra") {
      correct++;
    } else {
      wrong++;
    }

    if (five == undefined) {
      empty++;
    } else if (five == "bolivia") {
      correct++;
    } else {
      wrong++;
    }


    $("#correct").html(correct);
    $("#wrong").html(wrong);
    $("#empty").html(empty);
    $("#last").show();


$("#last").show();
  }

});

$("#new").on("click", function(){

  location.reload();

  });
