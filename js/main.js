let links = document.getElementById("icon");
links.onclick = function(){
document.getElementById("span2").classList.toggle("span2");
document.getElementById("span1").classList.toggle("span1");
document.getElementById("span3").classList.toggle("span3");
document.getElementById("icon").classList.toggle("icon1");
document.getElementById("links").classList.toggle("links1");
console.log("aaaaa")
}
let span = document.querySelector(".scrol");
window.onscroll = function(){
        if(this.scrollY >= 1000){
            span.classList.add("scroll");
        }else{
            span.classList.remove("scroll");

        }
}
span.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

// let nav = document.getElementById("parent");
// window.onscroll = function(){
//     if (this.scrollY > 400){
//         nav.classList.add("fix");

//     }else{
//         nav.classList.remove("fix")

//     }
// }