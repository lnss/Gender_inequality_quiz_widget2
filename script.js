var questions = [
{
question: "What is the main focus of SDG 5?",
options: ["Quality Education", "Climate Action", "Gender Equality", "Clean Water and Sanitation"],
answer: 2
},
{
question: "Which of the following is NOT a target of SDG 5?",
options: ["End all forms of discrimination against women and girls", "Ensure universal access to sexual and reproductive health services", "Eliminate child labor", "Promote women's leadership and participation in decision-making processes"],
answer: 2
},
{
question: "What is the global average percentage of women in parliament, as of 2021?",
options: ["14%", "24%", "34%", "44%"],
answer: 1
},
{
question: "Which region has the highest proportion of women in the labor force?",
options: ["North America", "Europe", "Sub-Saharan Africa", "Asia"],
answer: 2
},
{
question: "Which of the following is NOT a form of gender-based violence?",
options: ["Domestic violence", "Sexual harassment", "Female genital mutilation", "Age discrimination"],
answer: 3
},
{
  question: "Which of the following is a target of SDG 5?",
  options: ["Achieve gender equality and empower all women and girls", "Ensure access to quality education for all girls", "End poverty in all its forms everywhere", "Promote sustainable economic growth"],
  answer: 0
},
{
  question: "What does SDG 5 aim to achieve?",
  options: ["Promote gender equality", "End poverty", "Ensure access to clean water and sanitation", "Reduce inequality within and among countries"],
  answer: 0
},
{
  question: "What is the full name of SDG 5?",
  options: ["Sustainable Development Goal 5: Gender Equality", "Sustainable Development Goal 5: Quality Education", "Sustainable Development Goal 5: Affordable and Clean Energy", "Sustainable Development Goal 5: Climate Action"],
  answer: 0
},
{
  question: "Which of the following is a key principle of SDG 5?",
  options: ["Equal pay for equal work", "Access to clean energy", "Reducing greenhouse gas emissions", "Conservation of biodiversity"],
  answer: 0
},
{
  question: "Which of the following is NOT a focus area of SDG 5?",
  options: ["Equal access to education", "Ending violence against women", "Promoting women's economic empowerment", "Ensuring access to clean water and sanitation"],
  answer: 3
},
{
  question: "What is the deadline for achieving SDG 5?",
  options: ["2030", "2025", "2040", "2050"],
  answer: 0
},
{
  question: "Which of the following is a challenge in achieving SDG 5?",
  options: ["Gender-based violence", "Access to clean energy", "Sustainable consumption and production", "Reducing poverty"],
  answer: 0
},
{
  question: "Which of the following is a positive impact of achieving SDG 5?",
  options: ["Reduced poverty rates", "Increased political participation", "Improved access to clean water", "Enhanced biodiversity"],
  answer: 1
},
{
  question: "What is the role of men in achieving SDG 5?",
  options: ["Supporting gender equality and women's empowerment", "Promoting sustainable cities and communities", "Ensuring access to quality healthcare", "Reducing inequalities"],
  answer: 0
},
{
  question: "How does SDG 5 contribute to sustainable development?",
  options: ["By promoting gender equality and empowering women", "By addressing climate change", "By ensuring access to quality education", "By reducing inequalities"],
  answer: 0
}
];
var currentQuestion = 0;
var successCount = 0;
var failureCount = 0;
var quizContainer = document.getElementById("quiz-container");
var questionElement = document.getElementById("question");
var optionElements = document.getElementById("options");
var submitButton = document.getElementById("submit-btn");
var nextButton = document.getElementById("next-btn");
var resultElement = document.getElementById("result");


function displayQuestion() {
var currentQ = questions[currentQuestion];
questionElement.textContent = currentQ.question;
optionElements.innerHTML = "";
for (var i = 0; i < currentQ.options.length; i++) {
var li = document.createElement("li");
var input = document.createElement("input");
input.type = "radio";
input.name = "option";
input.value = i;
li.appendChild(input);
li.appendChild(document.createTextNode(currentQ.options[i]));
optionElements.appendChild(li);
}
}
function checkAnswer() {
var selectedOption = document.querySelector('input[name="option"]:checked');
if (selectedOption) {
var selectedAnswer = parseInt(selectedOption.value);
if (selectedAnswer === questions[currentQuestion].answer) {
successCount++;
resultElement.textContent = "Correct!";
} else {
failureCount++;
var correctAnswer = questions[currentQuestion].options[questions[currentQuestion].answer];
resultElement.textContent = "Wrong answer! The correct answer is: " + correctAnswer;
}
submitButton.disabled = true;
nextButton.disabled = false;
}
}
function displayResult() {
quizContainer.style.display = "none";
var scoreElement = document.getElementById("score");
scoreElement.textContent = "Success: " + successCount + " | Failure: " + failureCount;
}
submitButton.addEventListener("click", checkAnswer);
nextButton.addEventListener("click", function() {
currentQuestion++;
if (currentQuestion < questions.length) {
displayQuestion();
submitButton.disabled = false;
nextButton.disabled = true;
resultElement.textContent = "";
var scoreElement = document.getElementById("score");
scoreElement.textContent = "Success: " + successCount + " | Failure: " + failureCount;
} else {
currentQuestion = 0;
displayQuestion();
submitButton.disabled = false;
nextButton.disabled = true;
resultElement.textContent = "";
}
});
displayQuestion();

