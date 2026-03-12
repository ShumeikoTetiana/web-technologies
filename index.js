function task1() {
    let count = 0;
    let prev = 0;
    let curr = 1;
    let sum = 0;

    while (count < 10) {
        sum += prev;
        let next = prev + curr;
        prev = curr;
        curr = next;
        count++;
    }
    console.log("Завдання 1. Сума перших 10 чисел Фібоначчі:", sum);
}

function task2() {
    let sum = 0;
    for (let i = 2; i <= 1000; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) sum += i;
    }
    console.log("Завдання 2. Сума простих чисел від 1 до 1000:", sum);
}

function task3(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 1: dayName = "Понеділок"; break;
        case 2: dayName = "Вівторок"; break;
        case 3: dayName = "Середа"; break;
        case 4: dayName = "Четвер"; break;
        case 5: dayName = "П’ятниця"; break;
        case 6: dayName = "Субота"; break;
        case 7: dayName = "Неділя"; break;
        default: dayName = "Некоректне число";
    }
    console.log(`Завдання 3. День тижня для числа ${dayNumber}:`, dayName);
}

function task4(arr) {
    const result = arr.filter(str => str.length % 2 !== 0);
    console.log("Завдання 4. Рядки з непарною довжиною:", result);
    return result;
}

const task5 = (arr) => {
    const result = arr.map(num => num + 1);
    console.log("Завдання 5. Масив, збільшений на 1:", result);
    return result;
};

function task6(a, b) {
    const isTen = (a + b === 10) || Math.abs(a - b) === 10;
    console.log(`Завдання 6. Чи є сума або різниця чисел ${a} та ${b} рівною 10:`, isTen);
    return isTen;
}

task1();
task2();
task3(1);
task4(["JS", "Python", "C++", "Java", "PHP"]);
task5([5, 14, 99]);
task6(15, 5);