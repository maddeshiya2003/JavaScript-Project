document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("question-form");
    const resultSection = document.getElementById("result");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Calculate and display the result based on user responses
        const q1 = document.getElementById("q1").value;
        // Repeat similar lines for q2 to q10

        // Add your logic here to determine the result based on the responses

        const resultText = "Your result text goes here."; // Replace with your calculated result

        // Display the result and show the result section
        resultSection.innerHTML = `
            <h2>Result</h2>
            <p>${resultText}</p>
        `;
        resultSection.style.display = "block";

        // Scroll to the result section for a better user experience
        resultSection.scrollIntoView({ behavior: "smooth" });
    });
});
