function save() {
    var form1 = document.forms["airplane"];
    var obj = {};
    for (f of form1.elements) {
        if (f.type == "range" || f.type == "number") {
            obj[f.id] = parseInt(f.value);
        } else if (f.type == "text") {
            obj[f.id] = f.value;
        }
    }
    str = JSON.stringify(obj);
    localStorage.setItem("obj", str);
    //
    console.log(obj);
}