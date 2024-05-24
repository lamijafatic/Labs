
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
  // Event delegacija za otvaranje modala na klik slike
  $(document).on('click', '.grid-item img', function(){
      var imgSrc = $(this).attr('src');
      $('#modal-image2').attr('src', imgSrc);
      $('#modal2').css('display', 'block');
  });

  // Event delegacija za zatvaranje modala pritiskom na gumb za zatvaranje
  $(document).on('click', '.close', function(){
      $('#modal2').css('display', 'none');
  });

  // Event delegacija za zatvaranje modala klikom izvan sadržaja moda
  $(document).on('click', function(event){
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
    $(document).on('click', '.accordion-title', function(){
        console.log('Accordion title clicked');
        $(this).toggleClass('active');
        $(this).next('.accordion-content').toggleClass('show');
        $(this).parent().siblings().find('.accordion-content').removeClass('show');
        $(this).parent().siblings().find('.accordion-title').removeClass('active');
    });
});

$(document).ready(function() {
  // Dodajemo event listener na dokument za slučaj da se elementi dinamički učitavaju
  $(document).on('click', '#blog-toggle', function() {
      const blogContent = document.getElementById('holder');
      const desni = document.getElementById('desno');
      const arrow = document.querySelector('.arrow');


      if (blogContent && desni && arrow) {
          if (blogContent.style.display === 'none' || !blogContent.style.display) {
              blogContent.style.display = 'flex'; // Prikazi sadrzaj bloga
              desni.style.display = "block";
              arrow.innerHTML = '&#9660;'; // Promijeni strelicu prema dolje
          } else {
              blogContent.style.display = 'none';
              desni.style.display = "none"; // Sakrij sadrzaj bloga
              arrow.innerHTML = '&#9650;'; // Vrati strelicu prema gore
          }
      } else {
          console.error('Elementi nisu pronađeni!');
      }
  });
});

/*------------------------------------------------------------------------------------------------------------*/

$(document).ready(function() {
  // Dodajemo event listener na dokument za slučaj da se forma dinamički učita nakon klika
  $(document).on('submit', '.blog-forma', function(e) {
      e.preventDefault(); // Spriječava osvježavanje stranice prilikom submitanja forme

      const name = document.getElementById('name-form').value;
      const surname = document.getElementById('surname-form').value;
      const comment = document.getElementById('comment-form').value;
      const desnoDiv = document.getElementById('desno');

      // Prikazujemo podatke iz JSON datoteke u desnom divu
      $.ajax({
          url: "./data/blog.json",
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

/*
$(document).ready(function(){
  $(document).on('submit', '.loginForm', function(e) {
  
    e.preventDefault(); // Prevent the form from submitting normally

    // Get the values from username and password fields
    var username = document.getElementById("username666").value;
    var password = document.getElementById("password666").value;

    // Check if username and password are "admin"
    if (username === "admin" && password === "admin") {
      // Redirect to logged.html
      window.location.href = "#table";
    } else {
      // If not "admin", you can handle invalid login here, for example, display an error message
      alert("Invalid username or password. Please try again.");
    }
  });
});*/