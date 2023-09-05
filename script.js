$( document ).ready(function() {
  
  $('#grumpycatpic').click( 
    function(
    ){
     //code goes here
      console.log("position: ", $('grumpycatpic').position() );
    }
  );
  
  $( "#grumpycatpic ").draggable({
    stop: function()}
    if( $('#grumpycatpic').position().left > 500){
       alert("you have wow ");
    }
  
  
}
  
});