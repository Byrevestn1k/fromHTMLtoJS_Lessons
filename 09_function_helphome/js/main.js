// Напишіть функцію для перевірки спаму в переданому
// рядку. Функція повертає true, якщо рядок містить спам.
// Спамом вважати наступні слова: 100% безкоштовно,
// збільшення продажів, тільки сьогодні, не видаляйте, ххх.
// Функція має бути нечутливою до регістру.

let spam = ["100% безкоштовно","збільшення продажів","тільки сьогодні","не видаляйте","ххх"];
let noSpam = "Lorem ipsum ххх dolor sit amet, consectetur adipiscing elit. Aenean id nibh quam. Donec faucibus orci ac lectus rhoncus accumsan. Suspendisse maximus enim blandit, iaculis mi non, accumsan nulla.";
let line = "Lorem ipsum dolor тільки сьогодні sit amet, consectetur adipiscing elit. Aenean id nibh quam. Donec faucibus orci ac lectus rhoncus accumsan. збільшення продажів Suspendisse maximus enim blandit, iaculis mi non, accumsan nulla."

let findSpam = (line, spam) =>{
    for (let i = 0; i < spam.length; i++) {
        if((line.toLowerCase()).indexOf(spam[i].toLowerCase()) != -1)
            return true;
    }
    return false;
}

console.log(findSpam(line,spam));
console.log(findSpam(noSpam,spam));

// Напишіть функцію скорочення рядка. Функція приймає
// рядок та його максимальну довжину. Якщо довжина рядка більша, ніж максимальна, необхідно відкинути зайві
// символи, додавши замість них трикрапку.
// Наприклад: truncate("Hello, world!", 8) має повернути
// "Hello...".
let number = 5;
let truncate = (line, number) =>{
    if(line.length <= number){
        return line;
    }
    let truncLine = "";
    for (let i = 0; i < number; i++) {
        if(i < (number - 3)){
            truncLine += line[i];
            continue;
        }

        truncLine+='.'; 
    }
    return truncLine;
}


console.log(truncate("Hello World",number))