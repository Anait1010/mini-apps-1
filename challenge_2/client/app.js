$(document).ready(function(){
  
  $('form').on('submit', function(event) {
    event.preventDefault();
    var myForm  = document.getElementById('form');
    var formData = new FormData(myForm);

    $.ajax({
      type: "POST",
      url: '/fileData',
      data: formData,
      success: function(csvJSON) {
        $('body').html(csvJSON);
      }, //catches the data that server sends
    });
  });   
});

