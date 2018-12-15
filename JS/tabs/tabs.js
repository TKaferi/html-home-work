

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
    const elem3 = document.querySelector(".item3");
    users.forEach(element => {
      var div = document.createElement("p");
      div.innerHTML = element.company.name;
      elem3.appendChild(div);
    })
  });






