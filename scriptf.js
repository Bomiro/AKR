// Replace this with the actual list of saved tests
// For example:
// const savedTests = [
//     { name: "اختبار 1", description: "وصف اختبار 1" },
//     { name: "اختبار 2", description: "وصف اختبار 2" },
// ];

const testsList = document.getElementById("testsList");

function displaySavedTests() {
    savedTests.forEach((test, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <a href="take_test.html?testIndex=${index}">${test.name}</a> - ${test.description}
        `;
        testsList.appendChild(listItem);
    });
}

// Call the function to display saved tests when the page loads
window.addEventListener("load", displaySavedTests);
