// document.querySelector(".btn-login").addEventListener("click", function () {
//   var email = document.querySelector("#email").value;
//   var senha = document.querySelector("#password").value;
//   var writer;

//   if (email.length < 3) {
//     writer = document.querySelector(".email-validation");
//     writer.innerHTML = "Email inválido! Mínimo de 3 caracteres.";
//     return;
//   }
//   if (senha.length < 3) {
//     writer = document.querySelector(".password-validation");
//     writer.innerHTML = "Senha inválida! Mínimo de 3 caracteres.";
//     return;
//   }
//   if (sessionStorage.getItem("login") == 1) return;

//   axios
//     .post("https://reqres.in/api/login", {
//       email: email,
//       password: senha,
//     })
//     .then(function (response) {
//       if (response.status == 200) {
//         loginSucessful(email);
//       }
//     })
//     .catch(function (error) {
//       writer = document.querySelector(".email-validation");
//       writer.innerHTML = "";
//       writer.innerHTML = "Login inválido!";
//       writer = document.querySelector(".password-validation");
//       writer.innerHTML = "";
//     });
// });

document.getElementById("email").addEventListener(
  "keyup", (event) => {
    var email = document.querySelector("#email").value;
    var writer = document.querySelector(".email-validation");
    if (email.length < 3) writer.innerHTML = "Email inválido! Mínimo de 3 caracteres.";
    else writer.innerHTML = "Email válido!";
  },
  false
);

document.getElementById("password").addEventListener(
  "keyup", (event) => {
    var senha = document.querySelector("#password").value;
<<<<<<< HEAD
    var writer = document.querySelector(".password-validation");
    if (senha.length < 3) writer.innerHTML = "Senha inválida! Mínimo de 3 caracteres.";
    else writer.innerHTML = "Senha válida!";
  },
  false
);

function cadastrar() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (!email || email.length <= 3 || typeof email === "undefined") {
      alert("Insira um e-mail válido");
      return false;
  }

  if (!password || password.length <= 3 || typeof password === "undefined") {
      alert("Insira uma senha válida");
      return false;
  }

  axios.post('http://localhost:8080/cadastrar', {email, password})
      .then(function (res){
          console.log(res.data)
          alert("Cadastrado com sucesso");
=======
    var writer;

    if (email.length < 3) {
      writer = document.querySelector(".email-validation");
      writer.innerHTML = "Email inválido! Mínimo de 3 caracteres.";
      return;
    }
    if (senha.length < 3) {
      writer = document.querySelector(".password-validation");
      writer.innerHTML = "Senha inválida! Mínimo de 3 caracteres.";
      return;
    }
    if (localStorage.getItem("login") == 1) return;

    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: senha,
      })
      .then(function (response) {
        if (response.status == 200) {
          loginSucessful(email);
        }
      })
      .catch(function (error) {
        writer = document.querySelector(".email-validation");
        writer.innerHTML = "";
        writer.innerHTML = "Login inválido!";
        writer = document.querySelector(".password-validation");
        writer.innerHTML = "";
>>>>>>> 42c46eae5724b3c6a4594b7f19dfb92d0e54373d
      });
}

function entrar() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  axios.post('http://localhost:8080/entrar', {email, password})
      .then(function (res){
          loginSucessful(res.data);
          alert("login funcionou");
      });
}

function loginSucessful(email) {
  var temp = document.querySelector(".login");
  temp.className = temp.className.replace("login", "hide-loggin");
  temp = document.querySelector(".hide-logged");
  temp.className = temp.className.replace("hide-logged", "logged");
  temp = document.querySelector(".div-logged");
  temp.innerHTML = "Bem-vindo";
  temp = document.querySelector(".hide-search");
  temp.className = temp.className.replace("hide-search", "search-field");
  sessionStorage.setItem("login", 1);
  sessionStorage.setItem("email", email);
}

function logged() {
  if (sessionStorage.getItem("login") == 1) {
    var temp = document.querySelector(".login");
    temp.className = temp.className.replace("login", "hide-loggin");
    temp = document.querySelector(".hide-logged");
    temp.className = temp.className.replace("hide-logged", "logged");
    temp = document.querySelector(".div-logged");
    temp.innerHTML = "Bem-vindo, " + sessionStorage.getItem("email");
    temp = document.querySelector(".hide-search");
    temp.className = temp.className.replace("hide-search", "search-field");
<<<<<<< HEAD
  }
}

function logout() {
  sessionStorage.clear();
  var temp = document.querySelector(".hide-loggin");
  temp.className = temp.className.replace("hide-loggin", "login");
  temp = document.querySelector(".logged");
  temp.className = temp.className.replace("logged", "hide-logged");
  temp = document.querySelector(".div-logged");
  temp.innerHTML = "";
  temp = document.querySelector(".search-container");
  temp.innerHTML = "";
  temp = document.querySelector(".search-field");
  temp.className = temp.className.replace("search-field", "hide-search");
  temp = document.querySelector("#email");
  temp.value = "";
  temp = document.querySelector("#password");
  temp.value = "";
  temp = document.querySelector(".email-validation");
  temp.innerHTML = "";
  temp = document.querySelector(".password-validation");
  temp.innerHTML = "";
  temp = document.querySelector("#search");
  temp.value = "";
}

document.querySelector(".btn-logout").addEventListener("click", function () {
  logout();
});

logged();

Object.size = function (obj) {
  var size = 0,
          key;
  for (key in obj) {
      if (obj.hasOwnProperty(key))
          size++;
  }
  return size;
};

function postar(){
  var comment = document.getElementById("post").value;
  var author = document.getElementById("name").value;

  if (!comment || comment.length < 1 || typeof comment === "undefined") {
      alert("O post deve ter um título/assunto");
      return false;
  }

  axios.post('http://localhost:8080/postar', {comment, author})
      .then(function (res){
          alert("Postagem feita");
          document.getElementById("post").value = "";
      });
}

function buscar(){
  var author = document.getElementById("search").value;
  var container = document.getElementById('lista');
  axios.post('http://localhost:8080/buscar', {author})
      .then(function (res){
          
          while (container.firstChild) {
              container.removeChild(container.firstChild);
          }

          var dataAlready = [];

          for (var i = 0; i < Object.size(res["data"]["dtbauthor"]); i++){
              dataAlready.push(res["data"]["dtbauthor"][i]["comment"].toString());
          }

          console.log(dataAlready);
          var li;
          for (var x = 0; x < dataAlready.length; x++) {
              li = document.createElement('li');
              li.innerHTML = dataAlready[x];
              container.appendChild(li);
          }

      });
}
=======
    localStorage.setItem("login", 1);
    localStorage.setItem("email", email);
  }
  
  function logged() {
    if (localStorage.getItem("login") == 1) {
      var temp = document.querySelector(".login");
      temp.className = temp.className.replace("login", "hide-loggin");
      temp = document.querySelector(".hide-logged");
      temp.className = temp.className.replace("hide-logged", "logged");
      temp = document.querySelector(".div-logged");
      temp.innerHTML = "Bem-vindo, " + localStorage.getItem("email");
      temp = document.querySelector(".hide-search");
      temp.className = temp.className.replace("hide-search", "search-field");
    }
  }
  
  function logout() {
    localStorage.clear();
    var temp = document.querySelector(".hide-loggin");
    temp.className = temp.className.replace("hide-loggin", "login");
    temp = document.querySelector(".logged");
    temp.className = temp.className.replace("logged", "hide-logged");
    temp = document.querySelector(".div-logged");
    temp.innerHTML = "";
    temp = document.querySelector(".search-container");
    temp.innerHTML = "";
    temp = document.querySelector(".search-field");
    temp.className = temp.className.replace("search-field", "hide-search");
    temp = document.querySelector("#email");
    temp.value = "";
    temp = document.querySelector("#password");
    temp.value = "";
    temp = document.querySelector(".email-validation");
    temp.innerHTML = "";
    temp = document.querySelector(".password-validation");
    temp.innerHTML = "";
    temp = document.querySelector("#search");
    temp.value = "";
  }
  
  document.querySelector(".btn-logout").addEventListener("click", function () {
    logout();
  });
  
  logged();

  var container = document.querySelector('ul');
  document.querySelector(".btn-search").addEventListener("click", function () {
    var query = document.querySelector('.search').value;
    axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
         .then(function (res) {
           console.log(res);
           var results = res.data.results;
           for (var index = 0; index < results.length && index < 10; index++) {
             var li = document.createElement('li');
                 img = document.createElement('img');
                 id_img = results[index].id;
             li.innerHTML = results[index].name;
             img.src = 'https://rickandmortyapi.com/api/character/avatar/' + id_img + '.jpeg';
             li.appendChild(img);
             container.appendChild(li);
           }
         })
  });
>>>>>>> 42c46eae5724b3c6a4594b7f19dfb92d0e54373d
