
function findMinMax(arr) {
    if (arr.length === 0) return "Масив порожній";
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }
    return "Мінімальне число: " + min + ", Максимальне число: " + max;
}

function compareObjects(obj1, obj2) {
    return obj1.name === obj2.name && obj1.age === obj2.age;
}


function checkRange(number, min, max) {
    return number >= min && number <= max;
}

let isJobDone = true;
isJobDone = !isJobDone;


function getGrade(score) {
    if (score >= 90) return "Відмінно";
    if (score >= 75) return "Добре";
    if (score >= 60) return "Задовільно";
    return "Незадовільно";
}

function gradeTernary(score) {
    return score >= 90 ? "Відмінно" : score >= 75 ? "Добре" : score >= 60 ? "Задовільно" : "Незадовільно";
}

function getSeasonIf(month) {
    if (month === 12 || month === 1 || month === 2) return "Зима";
    if (month >= 3 && month <= 5) return "Весна";
    if (month >= 6 && month <= 8) return "Літо";
    if (month >= 9 && month <= 11) return "Осінь";
    return "Невірний місяць";
}

function getSeasonTernary(month) {
    return (month === 12 || month <= 2) ? "Зима" :
        (month <= 5) ? "Весна" :
            (month <= 8) ? "Літо" :
                (month <= 11) ? "Осінь" : "Невірний місяць";
}

console.log("1. Макс/Мін:", findMinMax([10, 5, 22, 1, 7]));
console.log("2. Порівняння об'єктів:", compareObjects({name: "Ann", age: 20}, {name: "Ann", age: 20}));
console.log("3. Чи в діапазоні (25 в 10-50):", checkRange(25, 10, 50));
console.log("4. Стан після NOT:", isJobDone);
console.log("5. Оцінка (if, 82):", getGrade(82));
console.log("6. Оцінка (?, 62):", gradeTernary(62));
console.log("7. Сезон (if, 4-й місяць):", getSeasonIf(6));
console.log("8. Сезон (?, 11-й місяць):", getSeasonTernary(11));
