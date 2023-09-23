// Replace this with the actual results data
// For example:
// const resultsData = {
//     totalQuestions: 5,
//     correctAnswers: 3,
//     questionsMissed: ["سؤال 2", "سؤال 4"],
// };

const resultsContainer = document.getElementById("resultsContainer");

function displayResults() {
    resultsContainer.innerHTML = `
        <h2>نتائج الاختبار</h2>
        <p>عدد الأسئلة الكلي: ${resultsData.totalQuestions}</p>
        <p>عدد الإجابات الصحيحة: ${resultsData.correctAnswers}</p>
        <p>الأسئلة التي أجاب عليها بشكل غير صحيح: ${resultsData.questionsMissed.join(", ")}</p>
    `;
}

// Call the function to display results when the page loads
window.addEventListener("load", displayResults);
