let words = ["весна","літо","зима","осінь","температура","погода","хмара","сонце"];
let number = Math.floor(Math.random() * words.length);
let word = words[number]
//alert(word);
let answer = [];
for (let i = 0; i < word.length; i++) {
    if(i == 0){
        answer[i] = word[i].toUpperCase();
        continue;
    }
    if(i == word.length - 1){
        answer[i] = word[i];
        continue;
    }
    answer[i] = "_";
}
let count = word.length - 2;
let error = [];
while(count > 0 && error.length < 6){
    alert(answer.join(" ") + "\nError " + "("+error.length+") :: " + error.join(", "));
    let symbol = prompt("Введіть букву");
    if(symbol == null) break;
    if(symbol.length != 1)
        alert("Введіть один символ");
    else{
        let flag = false;
        for (let i = 0; i < word.length; i++) {
            if(word[i].toLowerCase() == symbol.toLowerCase()){
                count--;
                flag = true;
                if(i == 0){
                    answer[i] = symbol.toUpperCase();
                    continue;
                }
                answer[i] = symbol.toLowerCase();
            } 
        }
        if(!flag){
            error.push(symbol);
        }
    }
}
if(count == 0){
    document.write(`<h1 style = "color:green;"> Вітаю!!!! Ви перемогли. </h1>`)
}
else{
    document.write(`<h1 style = "color:red;"> Ви програли.<br> Ваше слово ${word}</h1>`)
}