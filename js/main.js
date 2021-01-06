var x = 0;
var words = [
"любовь",
"боль",
"мир",
"футбол",
"семья"
],
word = words[Math.floor(Math.random() * words.length)],
answer = [];
for(var i = 0; i < word.length; i++) {
    answer[i] = " _ ";
}
var lastLetter = word.length;
if(x != 1) {
    while (lastLetter > 0) {
        alert(answer.join(" "));
        var letter = prompt("Введите букву или нажмите Отмена для выхода из игры");
        if (letter === null) {
            
            break;
        } else if (letter.length !== 1) {
            alert("Введите только одну букву");
        }          else {
            for(var j = 0; j < word.length; j++) {
                if (word[j] === letter) {
                    answer[j] = letter;
                    lastLetter--;
                }
            }
        }
    } 
    alert (answer.join(" "));
    alert("Поздравляем!Было загадано слово " + answer.join(""));
} else {
    alert("До свидания");
}