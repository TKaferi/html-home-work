

var navItem = document.querySelectorAll('.tabNav a');
var itemTab = document.querySelectorAll('.itemTab');
var arr = [];
var arr2 = [];

document.querySelector('.tabNav').onclick = function (e) {
  var target = e.target;
  for (var i = 0; i < navItem.length; i++) {
    itemTab[i].classList.remove('show');
    navItem[i].classList.remove('active');
    if (target === navItem[i]) {
      showTab(i);
    }
  }
}

function showTab(i) {
  itemTab[i].classList.add('show');
  navItem[i].classList.add('active');
}

var test = fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    var users = data;
    const elem = document.querySelector(".itemTab");
    users.forEach(element => {

      var div = document.createElement("p");
      div.innerHTML = element.name;
      elem.appendChild(div);
    })
    const elem1 = document.querySelector(".item1");
    users.forEach(element => {
      var div = document.createElement("p");
      div.innerHTML = element.username;
      elem1.appendChild(div)
    });
    const elem2 = document.querySelector(".item2");
    users.forEach(element => {
      var div = document.createElement("p");
      div.innerHTML = element.email;
      elem2.appendChild(div);
    })
    /*const elem3 = document.querySelector(".item3");
    users.forEach(element => {
      var div = document.createElement("p");
      div.innerHTML = companyToString(element.company);
      elem3.appendChild(div);
    })*/
  });

  function companyToString(company) {
    return company.name + ",  " + company.catchPhrase + ", ";
  }

  /*var login = document.querySelector(".login");
  var pass = document.querySelector(".password");
  var submit = document.querySelector(".submit");

  submit.onclick = function sendToServer () {
    if (login.value && pass.value) {
     
      fetch ('http://5c164f89e6694800138963b5.mockapi.io/api/v1/Brain_test', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                login: login.value, 
                password: pass.value 
            })
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        });
    } else {
        alert('enter login and password');
    }
};*/

$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    /*responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }*/
  })
});
