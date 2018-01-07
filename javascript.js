$(window).on("load", visCV);

function visCV() {
    console.log("1");
    $(".timeline").hide();
}



function dropDown() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function fold() {
    var x = document.getElementById("timeline");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }

}



function visCV() {
    var x = document.getElementById("timeline");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
