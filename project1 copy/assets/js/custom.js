$(document).ready(function() {

  $("main#spapp > section").height($(document).height() - 60);

 // initialize

 
  var app = $.spapp({ pageNotFound: "error_404" }); // initialize
  app.route({
    view: "page1",
    load: "home.html",
  });
  
  app.route({
    view: "page2",
    load: "o_nama.html",
  });

  app.route({
    view: "page3",
    load: "aktuelnosti.html",
  });

  app.route({
    view: "page4",
    load: "pridruzi_se.html",
  });

  // run app
  app.run();
});