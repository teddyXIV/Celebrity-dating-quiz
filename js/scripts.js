function hideResults() {
    document.getElementById("TaylorSwift").setAttribute("class", "hidden");
    document.getElementById("JulioRodriguez").setAttribute("class", "hidden");
    document.getElementById("Beyonce").setAttribute("class", "hidden");
    document.getElementById("HarryStyles").setAttribute("class", "hidden");
}

window.onload = function () {
    document.querySelector("form").onsubmit = function (event) {
        event.preventDefault();
        hideResults();
        const age = parseInt(document.querySelector("input#age").value);
        const favColor = document.querySelector("select#colors").value;
        const favMusic = document.querySelector("select#music").value;

        if (age >= 25 && age <= 35 && (favColor === "Green" || favColor === "Red") && favMusic === "Pop") {
            document.getElementById("TaylorSwift").removeAttribute("class");
        } else if (age >= 20 && age <= 25 && (favColor === "Green" || favColor === "Blue")) {
            document.getElementById("JulioRodriguez").removeAttribute("class");
        } else if (age >= 35 && age <= 50 && (favColor === "Yellow" || favColor === "Blue") && (favMusic === "Jazz" || favMusic === "Hiphop")) {
            document.getElementById("Beyonce").removeAttribute("class");
        } else if (age >=18 && age <= 70) {
            document.getElementById("HarryStyles").removeAttribute("class");
        } else {
            document.getElementById("error-message").removeAttribute("class");
        }
};
}