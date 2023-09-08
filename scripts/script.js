$(document).ready(function () {
  //click on an image, get a message

  $("#memeOne").click(function () {
    $("#outputDiv").hide();

    console.log("user clicked memeOne");
    $("#outputMsg").text("I'll go without!");
    $("#outputDiv").toggle();
  });

  $("#memeTwo").click(function () {
    $("#outputDiv").hide();
    console.log("user clicked memeTwo");
    $("#outputMsg").text("Oh well!");
    $("#outputDiv").toggle();
  });
});