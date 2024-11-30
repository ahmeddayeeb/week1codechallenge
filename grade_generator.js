// Student Grade Generator
function getStudentGrade() {
    let marks = parseFloat(prompt("Enter student marks (0-100):"));
    if (marks > 79) {
        console.log("A");
    } else if (marks >= 60) {
        console.log("B");
    } else if (marks >= 49) {
        console.log("C");
    } else if (marks >= 40) {
        console.log("D");
    } else {
        console.log("E");
    }
}

getStudentGrade();
