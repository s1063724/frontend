// menu設定
let nav = document.getElementsByTagName("nav")[0];
let menu = document.getElementsByTagName("menu")[0];
let bool = true;
let liList = document.getElementsByClassName("List");
nav.addEventListener("click", function () {
    if (bool) {
        menu.style.display = "block";
        this.children[0].style.transform = "rotate(0deg)";
        this.children[2].style.transform = "rotate(0deg)";
        this.children[1].style.opacity = 0;
        //Menu內容點選
    } else {
        menu.style.display = "none";
        this.children[0].style.transform = "rotate(0deg)";
        this.children[2].style.transform = "rotate(0deg)";
        this.children[1].style.opacity = 1;
    }
    bool = !bool;
    for (const lis of liList) {
        lis.addEventListener("click", function () {
            menu.style.display = "none";
            nav.children[0].style.transform = "rotate(0deg)";
            nav.children[2].style.transform = "rotate(0deg)";
            nav.children[1].style.opacity = 1;
        })
        bool = !bool;
    }
})

// gotop設定
let gotop = document.createElement("a");
gotop.setAttribute("id", "gotop");
gotop.setAttribute("href", "#");
gotop.setAttribute("class", "fa-solid fa-circle-up");
gotop.style.position = "fixed";
gotop.style.right = "1em";
gotop.style.bottom = "1em";
gotop.style.backgroundColor = "#00000088";
gotop.style.color = "#FFFFFF";
gotop.style.width = "2em";
gotop.style.height = "2em";
gotop.style.lineHeight = "2em";
gotop.style.textAlign = "center";
gotop.style.borderRadius = "10px";
gotop.style.display = "block";
// 防止被其他圖層蓋住  
gotop.style.zIndex = 50;
document.getElementsByTagName("body")[0].appendChild(gotop);

// YEAR設定
let FooterYears = document.getElementsByClassName("year");
for (const footeryear of FooterYears) {
    footeryear.textContent = new Date().getFullYear();
} 