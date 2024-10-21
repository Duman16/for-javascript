const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0),

    registerNewAnswer: function () {
        const optionsString = this.options.join('\n'); 
        const promptMessage = `${this.question}\n${optionsString}\n(Write option number)`;

        const answer = Number(prompt(promptMessage));

        if (!isNaN(answer) && answer >= 0 && answer < this.answers.length) {
            this.answers[answer]++; // Увеличиваем количество ответов для выбранной опции
            this.displayResults(); // Выводим результаты после добавления нового ответа
        } else {
            console.log("Invalid option. Please select a valid number.");
        }
    },

    displayResults: function (type = 'array') {
        // Если type равен 'string', вывод результат в строковом формате
        if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        } else {
            console.log(this.answers);
        }
    }
    
};

// Находит кнопку с классом poll-button добавляет обработчик клика, который вызывает метод registerNewAnswer
document.querySelector('.poll-button').addEventListener('click', function () {
    poll.registerNewAnswer();
});

const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];

poll.answers = testData1;
poll.displayResults('array');  
poll.displayResults('string'); 

poll.answers = testData2;
poll.displayResults('array');  
poll.displayResults('string'); 



