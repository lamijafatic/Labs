$(document).ready(function() {

  $("main#spapp > section").height($(document).height() - 60);

 // initialize

 
  var app = $.spapp({ pageNotFound: "error_404" }); // initialize
  app.route({
    view: "home1",
    load: "home1.html",
  });
  
  app.route({
    view: "pozadinski11",
    load: "o_nama.html",
  });

  app.route({
    view: "pozadinski22",
    load: "aktuelno.html",
  });

  app.route({
    view: "pridruzi_se1",
    load: "pridruzi_se.html",
  });
  app.route({
    view: "univerziteti1",
    load: "spacex.html",
  });
  app.route({
    view: "admin",
    load: "admin.html",
  });

  app.route({
    view: "table",
    load: "logged.html",
  });
  app.route({
    view: "viewmore",
    load: "view_more.html",
  });
  // run app
  app.run();
});