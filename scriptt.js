let currentQuestion = 0;
let correctAnswers = 0;
let testQuestions = [];

// Replace this with code to retrieve test questions from JSON or server
// For example:
// testQuestions = [
//     { question: "سؤال 1", options: ["خيار 1", "خيار 2", "خيار 3"], correctOption: 1 },
//     { question: "سؤال 2", options: ["خيار 1", "خيار 2", "خيار 3"], correctOption: 2 },
//     // Add more questions here
// ];

function loadQuestion() {
    const testContainer = document.getElementById("testContainer");
    if (currentQuestion < testQuestions.length) {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        const questionData = testQuestions[currentQuestion];
        questionDiv.innerHTML = `
            <h3>${questionData.question}</h3>
            ${questionData.options.map((option, index) => `
                <input type="radio" id="option${index + 1}" name="answer" value="${index + 1}">
                <label for="option${index + 1}">${option}</label><br>
            `).join("")}
        `;

        testContainer.innerHTML = "";
        testContainer.appendChild(questionDiv);
    } else {
        // No more questions, show results
        document.getElementById("results").style.display = "block";
        document.getElementById("results").innerHTML = `
            <h2>انتهى الاختبار!</h2>
            <p>عدد الإجابات الصحيحة: ${correctAnswers} من ${testQuestions.length}</p>
        `;
    }
}

function submitTest() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const selectedAnswer = parseInt(selectedOption.value);
        if (selectedAnswer === testQuestions[currentQuestion].correctOption) {
            correctAnswers++;
        }
        currentQuestion++;
        loadQuestion();
    }
}

// Load the first question when the page loads
window.addEventListener("load", loadQuestion);
