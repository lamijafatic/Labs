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
  const blogContent = document.getElementById('blog-content');
  const arrow = document.querySelector('.arrow');

  blogHeader.addEventListener('click', function() {
      if (blogContent.style.display === 'none' || !blogContent.style.display) {
          blogContent.style.display = 'block'; // Prikazi sadrzaj bloga
          arrow.innerHTML = '&#9660;'; // Promijeni strelicu prema dolje
      } else {
          blogContent.style.display = 'none'; // Sakrij sadrzaj bloga
          arrow.innerHTML = '&#9650;'; // Vrati strelicu prema gore
      }
  });
});
/*------------------------------------------------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.blog-forma');
  const desnoDiv = document.getElementById('desno');

  form.addEventListener('submit', function(e) {
      e.preventDefault(); // Spriječava osvježavanje stranice prilikom submitanja forme

      const name = document.getElementById('name-form').value;
      const surname = document.getElementById('surname-form').value;
      const comment = document.getElementById('comment-form').value;
      
      // Kreiramo JSON objekt
      const jsonData = {
          "name": name,
          "surname": surname,
          "comment": comment
      };

      // Spremamo JSON objekt u JSON datoteku
      $.ajax({
          url: "blog.json",
          type: "POST",
          contentType: "application/json",
          data: JSON.stringify(jsonData),
          success: function() {
              // Čistimo polja forme
              document.getElementById('name-form').value = '';
              document.getElementById('surname-form').value = '';
              document.getElementById('comment-form').value = '';

              // Dodajemo komentar u desni div
              const div = document.createElement('div');
              div.innerHTML = `<p><strong>Korisnik:</strong> ${name} ${surname}</p><br>
                               <p><strong>Komentar:</strong> ${comment}</p>`;
              desnoDiv.appendChild(div);
              desnoDiv.style.display = 'block';
          },
          error: function(xhr, status, error) {
              console.error('Error:', error);
          }
      });
  });

  // Prikazujemo podatke iz JSON datoteke u desnom divu
  $.ajax({
      url: "blog.json",
      type: "GET",
      dataType: "json",
      success: function(data) {
          data.forEach(function(item) {
              const div = document.createElement('div');
              div.innerHTML = `<p><strong>Korisnik:</strong> ${item.name} ${item.surname}</p>
                               <p><strong>Komentar:</strong> ${item.comment}</p>`;
              desnoDiv.appendChild(div);
          });
      },
      error: function(xhr, status, error) {
          console.error('Error:', error);
      }
  });
});


