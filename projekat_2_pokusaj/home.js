$(document).ready(function(){
    // Open modal on image click
    $('.grid-item img').click(function(){
      var imgSrc = $(this).attr('src');
      $('#modal-image2').attr('src', imgSrc);
      $('#modal2').css('display', 'block');
    });
  
    // Close modal when clicking on close button
    $('.close').click(function(){
      $('#modal2').css('display', 'none');
    });
  
    // Close modal when clicking outside of the modal content
    $(window).click(function(event){
      var modal = document.getElementById('myModal2');
      if (event.target == modal) {
        $('#modal2').css('display', 'none');
      }
    });
  });
  

  $(document).ready(function(){
    $('#theme-toggle').click(function(){
      $('body').toggleClass('dark-mode');
    });
  });
  