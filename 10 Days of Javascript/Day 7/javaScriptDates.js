function getDayName(dateString) {
    const dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const date = new Date(dateString);

    return dayNames[date.getDay()];
}

console.log(getDayName("10/11/2009"));
console.log(getDayName("11/10/2010"));