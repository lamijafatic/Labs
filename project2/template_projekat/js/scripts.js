/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


document.addEventListener('DOMContentLoaded', function() {
    var portfolioItem = document.getElementById('portfolioItem1');
    var portfolioLink = portfolioItem.querySelector('#portfolio-link1');
    var portfolioModal = document.getElementById('portfolioModal1');

    // Event listener za klik na link
    portfolioLink.addEventListener('click', function(event) {
        event.preventDefault(); // Spriječava defaultno ponašanje linka
        openModal(portfolioModal);
    });

    // Event listener za prelazak mišem
    portfolioItem.addEventListener('mouseenter', function() {
        var portfolioHoverContent = portfolioItem.querySelector('#portfolio-hover-content1');
        portfolioHoverContent.style.display = 'block';
    });

    portfolioItem.addEventListener('mouseleave', function() {
        var portfolioHoverContent = portfolioItem.querySelector('#portfolio-hover-content1');
        portfolioHoverContent.style.display = 'none';
    });
});

// Funkcija za otvaranje modalnog prozora
function openModal(modal) {
    modal.style.display = 'block';
}
