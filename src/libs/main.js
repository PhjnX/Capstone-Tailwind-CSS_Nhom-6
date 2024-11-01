document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const header = document.getElementById("header-content");
    const hideAfterScroll = 100;

    window.addEventListener("scroll", function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > hideAfterScroll) {
            header.style.top = "-200px";
        } else if (scrollTop < lastScrollTop) {
            header.style.top = "-50px";
        }
        if (scrollTop === 0) {
            header.style.top = "0px";
        }
        lastScrollTop = scrollTop;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header-content");
    const scrollThreshold = 100; 

    window.addEventListener("scroll", function () {
        if (window.pageYOffset > scrollThreshold) {
            header.classList.add("fixed", "top-0");
            header.classList.remove("inline-block");
        } else {
            header.classList.remove("fixed", "top-0");
            header.classList.add("inline-block");
        }
    });
});