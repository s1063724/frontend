let load = document.createElement("div");
load.setAttribute("id", "load");
let loadBox = document.createElement("div");
loadBox.setAttribute("class", "loader");
load.appendChild(loadBox);

document.getElementsByTagName("body")[0].appendChild(load);

setTimeout(function () {
    load.remove();
}, 3000)