let questionCount = 0;

function addQuestion() {
    questionCount++;
    const questionsContainer = document.getElementById("questionsContainer");

    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    questionDiv.innerHTML = `
        <h3>سؤال ${questionCount}:</h3>
        <label for="question${questionCount}">نص السؤال:</label><br>
        <input type="text" id="question${questionCount}" required><br><br>
        
        <label for="options${questionCount}">الخيارات (اكتب الخيارات مفصولة بفواصل):</label><br>
        <input type="text" id="options${questionCount}" required><br><br>
        
        <label for="correctOption${questionCount}">الإجابة الصحيحة (أدخل رقم الخيار الصحيح):</label><br>
        <input type="number" id="correctOption${questionCount}" min="1" required><br><br>
    `;

    questionsContainer.appendChild(questionDiv);
}

document.getElementById("testForm").addEventListener("submit", function (e) {
    e.preventDefault();
    // هنا يمكنك جمع بيانات الاختبار والأسئلة وإرسالها إلى الخادم أو حفظها بصيغة JSON
});
