$(document).ready(function () {
    $(".nav__burger").click(function () {
        $(".nav__burger, .nav-list").toggleClass("active");
        $("body").toggleClass("lock");
    });
});

function goToPage(url) {
    window.location.href = url;
}
