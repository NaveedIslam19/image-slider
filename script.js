const button1 = document.querySelector("#btn1 img");
const button2 = document.querySelector("#btn2 img");
const gallery = document.querySelector(".gellery");

gallery.addEventListener("wheel", function (evt) {
    evt.preventDefault();
    gallery.scrollLeft += evt.deltaY;
    gallery.style.scrollBehavior = 'auto';
});

button1.addEventListener("click", function () {
    gallery.scrollLeft -= 900;
    gallery.style.scrollBehavior = 'smooth';
});

button2.addEventListener("click", function () {

    gallery.scrollLeft += 900;
    gallery.style.scrollBehavior = 'smooth';
});
