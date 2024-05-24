let UserService = {
  init: function () {
      let token = localStorage.getItem("user");
      if (token) {
          toastr.error('You are already logged in');

          setTimeout(function () {
              window.location.replace("index.html");
          }, 2000);

          return; // Da spriječimo izvršavanje ostatka koda
      }

      $("#loginForm").validate({
          submitHandler: function (form) {
              let entity = Object.fromEntries(new FormData(form).entries());
              console.log(entity)
              UserService.login(entity);
          },
      });
  },

  login: function (user) {
      console.log("provjerava se")
      let userFound = false;
      $.ajax({
          url: './data/users.json',
          type: 'GET',
          dataType: 'json',
          success: function (data) {
              console.log("provjerava se")
              data.forEach(element => {
                  if (element.email == user.email && element.password == user.password) {
                      userFound = true;

                      localStorage.setItem("user", JSON.stringify(element));
                      if (element.id == 1) {
                          window.location.replace("#table");
                      } else {
                          toastr.warning('You do not have permission to access managment system');
                          localStorage.clear();

                          setTimeout(function () {
                              window.location.replace("index.html");
                          }, 2000);
                      }
                  }
              });
              if (!userFound) {
                  toastr.error('Invalid credentials');
              }
          },
          error: function (xhr, status, error) {
              console.error('Error fetching data from file:', error);
          }
      });
  },
     logout: function () {
    localStorage.clear();
    window.location.replace("#admin");
  }
}
