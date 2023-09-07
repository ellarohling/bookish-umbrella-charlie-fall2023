$(document).ready(function () {
  //click on an image, get a message

  $("#memeOne").click(function () {
    $("#outputDiv").hide();

    console.log("user clicked memeOne 2");
    $("#outputMsg").text("I'll go without!");
    $("#outputDiv").toggle();
  });

  $("#memeTwo").click(function () {
    $("#outputDiv").hide();
    console.log("user clicked dogeTwo 2");
    $("#outputMsg").text("Oh well!");
    $("#outputDiv").toggle();
  });
});