let dayElem = document.querySelectorAll("input")[0];
let monthElem = document.querySelectorAll("input")[1];
let yearElem = document.querySelectorAll("input")[2];

let para = document.getElementsByClassName("need");

dayElem.addEventListener("change", function(e) {
    if (e.target.value > 30) {
        para[0].innerHTML = "Must be a valid day";
        document.querySelector(".span3").innerText = "";
    } else {
        para[0].innerHTML = "";
    }
    calculateAge();
});

monthElem.addEventListener("change", function(e) {
    if (e.target.value > 12) {
        para[1].innerHTML = "Must be a valid month";
    } else {
        para[1].innerHTML = "";
    }
    calculateAge();
});

yearElem.addEventListener("change", function(e) {
    if (e.target.value < 1920) {
        para[2].innerHTML = "Must be in the past";
    } else {
        para[2].innerHTML = "";
    }
    calculateAge();
});

const calculateAge = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // getMonth() returns month index (0-11), so add 1
    const currentDay = currentDate.getDate();

    const inputYear = parseInt(yearElem.value);
    const inputMonth = parseInt(monthElem.value);
    const inputDay = parseInt(dayElem.value);

    if (!isNaN(inputYear) && !isNaN(inputMonth) && !isNaN(inputDay)) {
        let calculatedYear = currentYear - inputYear;
        let calculatedMonth = currentMonth - inputMonth;
        let calculatedDay = currentDay - inputDay;

        if (calculatedDay < 0) {
            calculatedDay += 30; // Assume 30 days in a month for simplicity
            calculatedMonth -= 1;
        }
        if (calculatedMonth < 0) {
            calculatedMonth += 12;
            calculatedYear -= 1;
        }

        document.querySelector(".span1").innerText = calculatedYear;
        document.querySelector(".span2").innerText = calculatedMonth;
        document.querySelector(".span3").innerText = calculatedDay;
    }
}
