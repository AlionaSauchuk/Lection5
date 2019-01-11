$(document).ready(function () {

    for (var i = 0; i < 9; i++) {
        var newElement = document.createElement("div");
        newElement.setAttribute("id", "content"+i.toString());
        document.getElementById("container").appendChild(newElement);
        document.getElementById("content"+i.toString()).innerHTML = "<div class='card'>" +
            "<img id='img' src='/images/wpryytwwkeeqll6ww2dh.jpg'>" +
            "<div class='card-header'>" +
            "<span class='card-header-text'>Международное сотрудничество во всех сферах</span>" +
            "</div>" +
            "<div class='card-bottom'>" +
            "<span class='card-short-text'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, excepturi" +
            "distinctio minima commodi quisquam quam ab officia quae, eius cumque dolores pariatur nesciunt" +
            "voluptate accusamus? In quidem nulla ab pariatur!" +
            "</span>" +
            "<button class='btn-try'>Try</button>" +
            "</div>" +
            "</div>";
    }
});