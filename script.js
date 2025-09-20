// ===========================
// Part 1: Variable Declarations & Conditionals
// ===========================

// Declare some variables
let name = "Elvis";
let age = 22;
let isStudent = true;

// Simple conditional check
if (isStudent && age < 25) {
    console.log(`${name} is a young student.`);
} else {
    console.log(`${name} is not a student or over 25.`);
}

// ===========================
// Part 2: Custom Functions
// ===========================

// Function 1: Greeting
function greetUser(userName) {
    return `Hello, ${userName}! Welcome to the assignment demo.`;
}

// Function 2: Sum calculator
function calculateSum(a, b) {
    return a + b;
}

// ===========================
// Part 3: Loops
// ===========================

// Loop Example 1: For loop
function showNumbers() {
    let list = document.getElementById("numberList");
    list.innerHTML = ""; // Clear previous content
    for (let i = 1; i <= 5; i++) {
        let li = document.createElement("li");
        li.textContent = `Number: ${i}`;
        list.appendChild(li);
    }
}

// Loop Example 2: While loop
function countdown(start) {
    let result = "";
    while (start > 0) {
        result += start + " ";
        start--;
    }
    return result;
}

// ===========================
// Part 4: DOM Interactions
// ===========================

// Interaction 1: Greeting Button
document.getElementById("greetBtn").addEventListener("click", function() {
    document.getElementById("message").textContent = greetUser(name);
});

// Interaction 2: Calculate Sum Button
document.getElementById("calcBtn").addEventListener("click", function() {
    let sum = calculateSum(10, 20);
    document.getElementById("result").textContent = `The sum of 10 + 20 is ${sum}`;
});

// Interaction 3: Show Numbers Button
document.getElementById("loopBtn").addEventListener("click", function() {
    showNumbers();
});
