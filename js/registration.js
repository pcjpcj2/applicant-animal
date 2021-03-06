$(function(){
  // Select Dog to Cat
  $("#pettype").click(function(){
    $(".catsonly  input").val('None');
    $(".catsonly").slideUp('fast');
  });
  // Select Cat to Dog
  $("#pettype1").click(function(){
    $(".catsonly  input").val('');
    $(".catsonly").slideDown('fast');
  });
});

// Error Check Start
// Click Button call fnCheck

$('#applicant-form input[type=submit]').click(function(){
  validation = $.fnCheck();
  if(validation){
    return true;
  }else{
    return false;
  }

});

// All input form check
$.fnCheck = function(){
  // Input Text should not blank
  $("#applicant-form input[type='text']").map(function(){
    if( $(this).val().length == 0 ){
      $.fnAddError($(this));
    }else{
      $.fnRemoveError($(this));
    }
  });

  // Input phone, Pet's Age sholud only numbers
  $("#phone, #petage").map(function(){
    if(!$.isNumeric($(this).val())){
      $.fnAddError($(this));
    }else{
     $.fnRemoveError($(this));
    }
  });

  if(!$("#applicant-form input[type='text'], input[type='number']").hasClass('error')){
    return true;
  }else{
    return false;
  }
}


// Add error class for not validated input
$.fnAddError = function(input){
  input.addClass('error');
}
$.fnRemoveError = function(input){
  input.removeClass('error');
}
// Error Check End

