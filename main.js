const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__container h2", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header__container .btn", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header__container img", {
    ...scrollRevealOption,
    origin: "right",
});

// why container 

ScrollReveal().reveal(".why__container .section__header", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".why__container p", {
    ...scrollRevealOption,
    delay: 1000,
});

// ScrollReveal().reveal(".why__container li", {
//     ...scrollRevealOption,
//     delay: 1500,
//     interval: 500,
// });

ScrollReveal().reveal(".why__container img", {
    ...scrollRevealOption,
    origin: "left",
});