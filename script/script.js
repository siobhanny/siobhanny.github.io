function showMessage() {
    let age = 17;
    let Name = "James"

    if (age >= 18) {
        alert("Hello " + Name + " you can now drive :)");

    }
    else {
        alert("Hello kid, " + Name + " you cannot drive yet :(");
        let years = 18 - age;
        alert("Please come back after " + years + " years");
    }

    for (let i = 0; i<=1; i = i+1) 
    {
        alert("Hey, stop clicking me!");

    }

}

function changeColor()
{
    document.getElementById("main").style.color ="white";
    document.getElementById("main").style.width= "40%";
}

function resetColor()
{
    document.getElementById("main").style.color ="black";
    document.getElementById("main").style.width= "90%";
}

function changeToPuppy()
{
    document.getElementById("puppy").src ="dog-3937719_1280.jpg";
}

function changeToAdult()
{
    document.getElementById("puppy").src ="https://cdn.pixabay.com/photo/2022/10/20/19/31/dog-7535633_1280.jpg";
}