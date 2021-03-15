function compute() {
    p = document.getElementById("principal").value;
    if (p <= 0) {
        alert("Enter a positive value");
        document.getElementById("principal").focus();
        return false;
    }

    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    var interest = +p * +r * +y / 100;
    var total = +interest + +p;
    var d = new Date();
    var year = d.getFullYear();
    var derivedyear = +year + +y;


    var resultText = "If you deposit " + p + ",<br>"
        + "at an interest rate of " + r + "%.<br>"
        + "You will receive an amount of " + interest + ",<br>"
        + "in the year " + derivedyear;

    document.getElementById("result").innerHTML = resultText;
}

function updateRange() {
    r = document.getElementById("rate").value;
    document.getElementById("rangeSpan").textContent = r + "%";
}