// Завдання 4. Користувач з клавіатури вводить числа. Порахувати їхню суму і вивести на екран, щойно користувач введе нуль.

{
    let number;
    let sum = 0;
    do {
        number = +prompt("Enter number");
        sum += number;
    } while (number != 0);
    document.write("Result :: " + sum + "<br>");
}