

var navItem = document.querySelectorAll('.tabNav a');
var itemTab = document.querySelectorAll('.itemTab');

document.querySelector('.tabNav').onclick = function (e) {
  var target = e.target;
  for (var i = 0; i < navItem.length; i++) {
    itemTab[i].classList.remove('show');
    if (target === navItem[i]) {
      showTab(i);
    }
  }
  for (var i = 0; i < itemTab.length; i++) {
    navItem[i].classList.remove('active');
    if (target === navItem[i]) {
      activTab(i);
    }
  }

}

function showTab(i) {
  itemTab[i].classList.add('show');
}
function activTab(i) {
  navItem[i].classList.add('active');
}
