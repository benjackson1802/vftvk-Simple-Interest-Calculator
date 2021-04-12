let btnclear = document.querySelector("button");
let inputs = document.querySelectorAll("input");

function compute(){
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    const d = new Date(), addYears = years;
    d.setFullYear(d.getFullYear() + Number(years));
    interest = principal * years * rate/100

    if(principal <= 0){
        document.getElementById("error").innerHTML = "Enter a positive number";
    }

    document.getElementById("results").innerHTML = `
    If you deposit <strong>${principal}</strong>,
    at an interest rate of <strong>${rate}</strong>.
    You will receive an amount of <strong>${interest}</strong> ,
    in the year <strong> ${d.getFullYear()}</strong>.`

    document.getElementById("principal").focus();
} 

function slider(){
    var val = document.getElementById("rate").value
    document.getElementById('result').innerHTML = val + "%"
}