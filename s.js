fetch("nv.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("nv").innerHTML = data;
    });

const name = "enktorius   ";
let index = -1;
function changeTitle() {
    if (index < 0) {
        document.title = "H";
    }
    else {
        document.title += name[index];
    }
    index++;
    if (index >= name.length) {
        index = -1;
    }
}

setInterval(changeTitle, 500);