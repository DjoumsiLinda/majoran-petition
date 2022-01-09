(function () {
    var overlay = document.querySelector("#overlay");
    let count = 2;
    $("table")
        .find("tr")
        .each(function () {
            if (count % 2 !== 0) {
                $(this).css("background", "#ffebe6");
            } else {
                $(this).css("background", "burlywood");
            }
            count++;
        });
    document
        .querySelector(".hamburgermenu")
        .addEventListener("click", function () {
            if (overlay.classList.contains("on")) {
                overlay.classList.remove("on");
            } else {
                overlay.classList.add("on");
            }
        });

    document.querySelector("#overlay").addEventListener("click", function () {
        overlay.classList.remove("on");
    });
    /*document.querySelector("#lef").addEventListener("click", function () {
        overlay.classList.remove("on");
    });*/
})();
