$(document).ready(function() {
  toastr.options = {
    "positionClass": "toast-top-right",
    "timeOut": "5000",
    "extendedTimeOut": "6000",
    "closeButton": true,
    "progressBar": true,
    "target": 'body'
};
toastr.info('Obaviještavamo vas da stranica neće raditi od 10.06. do 15.06. zbog ažuriranja.');


});



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
      $('.accordion').toggleClass('dark-mode2');
    });
  });
  
  $(document).ready(function(){
    $('.accordion-title').click(function(){
        $(this).toggleClass('active');
        $(this).next('.accordion-content').toggleClass('show');
        $(this).parent().siblings().find('.accordion-content').removeClass('show');
        $(this).parent().siblings().find('.accordion-title').removeClass('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const blogHeader = document.getElementById('blog-toggle');
  const blogContent = document.getElementById('holder');
  const desni=document.getElementById('desno');
  const arrow = document.querySelector('.arrow');

  blogHeader.addEventListener('click', function() {
      if (blogContent.style.display === 'none' || !blogContent.style.display) {
          blogContent.style.display = 'flex'; // Prikazi sadrzaj bloga
          desni.style.display="block";
          arrow.innerHTML = '&#9660;'; // Promijeni strelicu prema dolje
      } else {
          blogContent.style.display = 'none';
          desni.style.display="none"; // Sakrij sadrzaj bloga
          arrow.innerHTML = '&#9650;'; // Vrati strelicu prema gore
      }
  });
});
/*------------------------------------------------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', function() {
 
  const form = document.querySelector('.blog-forma');
  
  form.addEventListener('submit', function(e) {
      e.preventDefault(); // Spriječava osvježavanje stranice prilikom submitanja forme

      const name = document.getElementById('name-form').value;
      const surname = document.getElementById('surname-form').value;
      const comment = document.getElementById('comment-form').value;
      const desnoDiv = document.getElementById('desno');

   

  // Prikazujemo podatke iz JSON datoteke u desnom divu
  $.ajax({
      url: "blog.json",
      type: "GET",
      dataType: "json",
      success: function(data) {
        toastr.success('Data Loaded!');
    

          data.forEach(function(item) {
              const div = document.createElement('div');
              div.innerHTML = `<p>Korisnik:<strong> ${item.name} ${item.surname}</strong></p>
                               <span><strong>Komentar:</strong> ${item.comment}</span>`;
              div.classList.add('podaci_blog');
              desnoDiv.appendChild(div);
              desnoDiv.style.display = "block"; 
          });
         
      },
      error: function(xhr, status, error) {
          console.error('Error:', error);
      }
  });
});
});


