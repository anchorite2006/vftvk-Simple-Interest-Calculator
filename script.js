function compute()
{
    let principal = document.getElementById("principal").value;
    if (isNaN(principal) || principal <= 0) {
        alert("Please enter a positive number!");
        document.getElementById("principal").focus();
        return false;
    }
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = principal * years * rate / 100;
    let year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML = "<br><br>If you deposit " + "<mark>" + principal + "</mark>" + ",<br>\
    at an interest rate of <mark>" + rate + "%</mark>.<br>\
    You will receive an amount of <mark>" + interest + "</mark>,<br>\
    in the year <mark>" + year + "</mark>";
    return true;
}

function updateRate() {
    let rate = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rate+'%';
}
        