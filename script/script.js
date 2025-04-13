let count = 0;
function showMessage() {
    for (let i = 1; i <= 5; i++) {
        count++;
        alert("Dog merch is sold out (" + count + ")");
    }
}

function changeColor() {
    document.getElementById("main").style.color = "orange";
    document.getElementById("main").style.fontSize = "large";
    document.getElementById("main").style.fontWeight = "bold";
}

function resetColor() {
    document.getElementById("main").style.color = "black";
    document.getElementById("main").style.width = "90%";
}

function changeToPuppy() {
    document.getElementById("puppy").src = "https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351_1280.jpg";
}

function changeToAdult() {
    document.getElementById("puppy").src = "https://cdn.pixabay.com/photo/2017/10/30/08/12/dog-2901704_1280.jpg";
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onload = function () {
    let mybutton = document.getElementById("arrowBtn");

    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

}

function showMany() {
    const messages = [
        "So, you want to adopt a dog?",
        "Okay, yay we're sending you a dog!",
        "They're on their way :)"
    ];

    for (let i = 0; i < messages.length; i++) {
        alert(messages[i]);
    }

}

document.getElementById('hoverButton').onmouseover = function () {
    this.style.backgroundColor = "#ff3f04";
}
document.getElementById('hoverButton').onmouseleave = function () {
    this.style.backgroundColor = "#805142";
}

