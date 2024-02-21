// Step 1: Define Quiz Data

const quizData = [
    {
        question: "What does HTML stands for?",
        options: [
            "Hypertext Markup Language" ,
            "Hyper Transfer Markup Language" ,
            "Hypertext Machine Language" ,
            "Hyperlink and Text Markup Language" ,
        ],

        correct: 0,
    },

    {
        question: "Which CSS property is used to control the spacing between elements",
        options: [
            "margin",
            "padding",
            "spacing",
            "border-spacing",
        ],

        correct: 1,
    },

    {
        question: "How to add background image in HTML?",
        options: [
            "<body background = 'img.png'>" ,
            "<img background = 'img.png'>" ,
            "<bg-image = 'img.png'>" ,
            "None of the above" ,
        ],

        correct: 1,
    },

    {
        question: "What are the types of unordered or bulleted list in HTML?",
        options: [
            "disc, square, triangle",
            "polygon, triangle, circle",
            "disc, circle, square",
            "all of the above",
        ],

        correct: 2,
    },

    {
        question: "Which HTML tag is used to creat an ordered list?",
        options: [
            "<ul>",
            "<ol>",
            "<li>",
            "<dbl>",
        ],

        correct: 1,
    },
]

// Step 2: JavaScript Initialization

const answerElm = document.querySelectorAll(".answer");
// const option-1 = document.querySelector("#option-1");
// const option-2 = document.querySelector("#option-2");
// const option-3 = document.querySelector("#option-3");
// const option-4 = document.querySelector("#option-4");

const [questionElm, option_1, option_2, option_3, option_4] = document.querySelectorAll(
    "#question , .option_1, .option_2, .option_3, .option_4"
    );

const submitBtn = document.querySelector('#submit');

let currentQuiz = 0;
let score = 0;

// Step 3: Load Quiz Function

const loadQuiz = () => {
    const {question, options} = quizData[currentQuiz];
    console.log(question);

    questionElm.innerText = question;
    // options.forEach((currOption, index) => {
    //         option_1.innerText = currOption;
    // });
    options.forEach((currOption, index) => {
        window[`option_${index + 1}`].innerText = currOption;
    });
};


loadQuiz();

// Step 4: Get Selected Answer Function ob BUtton Click

const getSelectedOption = () => {
//     let ans_index;
//     answerElm.forEach((currOption, index) => {
//         if(currOption.checked) {
//             ans_index = index;
//         }
//     });

//     return ans_index;
// }
// Another Method

let answerElement = Array.from(answerElm);
     return  answerElement.findIndex((currElm) => {
     currElm.checked;
});
};

// Deselected Answers

const deselectedAnswers = () => {
   return answerElm.forEach((customElements) => {
        customElements.checked = false;
    });
};


submitBtn.addEventListener('click', () => {
    const selectedOptionIdx = getSelectedOption();
    console.log(selectedOptionIdx);

    currentQuiz++;

    if(selectedOptionIdx === quizData[currentQuiz].correct) {
        score =+ 1;
    };

    if(currentQuiz < quizData.length) {
        deselectedAnswers();
        loadQuiz();
    };
});































