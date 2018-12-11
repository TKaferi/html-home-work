function plus() {
    var first = parseFloat(document.forms[0]['firstNum'].value);
    var second = parseFloat(document.forms[0]['secondNum'].value);
    document.forms[0]['result'].value = first + second;
}

/*
var xhr = new XMLHttpRequest();
xhr.open('GET', 'phones.json', false);
xhr.send();

//xhr.onload = function() {
    if (xhr.status != 200) {
        console.log(xhr.status + ': ' + xhr.statusText);
    } else {
        console.log(xhr.responseText);
        var obj = JSON.parse(xhr.responseText);
        for (var i = 0; i < obj.length; i++) {
            document.write(obj[i].age + '<br />');
        }
    }
//}
*/
var promise	= fetch('phones.json');
promise.then(function(response) {
    //var obj = response.json();
    return response.json();
})
.then(function(data) {
    alert(data[0].id);
});

