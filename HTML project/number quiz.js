
// position of where the user in which question 
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
// this is a multidimensional array with 4 inner array elements with 5 elements inside
var questions = [
    ["what is No.1 in chinese?", "一 (壹)", "三 (參)", "四 (肆)", "A"],
    ["what is No.十 (拾) ?", "8", "10", "6", "B"],
    ["Please select the correct answer:<br/> <audio class=\"myaudio\" controls preload=\"auto\"> "
    +  " <source src=\"numpers/number4.mp3\" type=\"audio/mp3\">"
    +  " Your browser does not support the audio element.</audio>"
    , "四 (肆)", "八 (捌)", "三 (參)", "A"],
    ["what is No.七 (柒)?", "6", "4", "7", "C"]
];
/*
<audio class=\"myaudio\" controls preload=\"auto\"> "
         +  " <source src=\"numpers/number4.mp3\" type=\"audio/mp3\">"
         +  " Your browser does not support the audio element.</audio>"


*/
function get(x) {
    return document.getElementById(x);
}
function renderQuestion() {
    test = get("test");
    if (pos >= questions.length) {
        test.innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct</h2>";
        get("test_status").innerHTML = "Test completed";
        // resets to restart the test
        pos = 0;
        correct = 0;
        // stops rest of renderQuestion function running when test is completed
        return false;
    }
    get("test_status").innerHTML = "Question " + (pos + 1) + " of " + questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    test.innerHTML = "<h3>" + question + "</h3>";
    // the += appends to the data we started on the line above
    test.innerHTML += "<input type='radio' name='choices' value='A'> " + chA + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> " + chB + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> " + chC + "<br><br>";
    test.innerHTML += "<button id='myButton' onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer() {

    choices = document.getElementsByName("choices");

    for (var i = 0; i < choices.length; i++) {

        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
    // checks if answer matches the correct choice
    if (choice == questions[pos][4]) {

        correct++;
    }

    pos++;

    renderQuestion();

}
window.addEventListener("load", renderQuestion, false);
