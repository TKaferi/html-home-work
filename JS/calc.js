function plus() {
    var first = parseFloat(document.forms[0]['firstNum'].value);
    var second = parseFloat(document.forms[0]['secondNum'].value);
    document.forms[0]['result'].value = first + second;
}

