
let month = +prompt("Enter number of month");
let start = +prompt("enter start day");

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        month = 31; break;
    case 4: case 6: case 9: case 11:
        month = 30; break;
    case 2: {
        let year = +prompt("Enter current year");
        month = year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ? 29 : 28;
    }
}

let day = 0;
let counter = 0;
let weekend = 0;
document.write("<table>")
document.write("<tr><td>Mo</td><td>Mo</td><td>Mo</td><td>Mo</td><td>Mo</td><td>Mo</td><td>Mo</td> </tr>")

for (let i = 0; i < month; i++) {
    if (counter % 7 == 0) {
        document.write("<tr>")
    }

    if (i == 0) {
        for (let j = 0; j < start - 1; j++) {
            document.write("<td></td>")
            counter++;
        }
    }
    day++;
    document.write(`<td>${day < 10 ? "0" : ""}${day}</td>`);
    counter++;
    if (counter % 7 == 0) {
        console.log(day, " " , weekend);
        weekend++;
        if(day > 1){
            weekend++;
            console.log(day-1, " " , weekend);
        }
    }
    if (day == month) {
        while (counter % 7 != 0) {
            document.write("<td></td>")
            counter++;
        }
    }
    if (counter % 7 == 0) {
        document.write("</tr>")
    }
}

document.write("</table>")
console.log(weekend);