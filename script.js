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
    document.getElementById("result").innerText = "\n\nIf you deposit " + principal + ",\n\
    at an interest rate of " + rate + "%.\n\
    You will receive an amount of " + interest + ",\n\
    in the year " + year;
    return true;
}

function updateRate() {
    let rate = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rate+'%';
}
        