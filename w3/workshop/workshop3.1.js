let score = 62;
if (score <= 100) {
    if (score >= 80 && score <=100) {
        console.log("Grade A")
    }
    if (score >= 70 && score <= 79) {
        console.log("Grade B")
    }
    if (score >= 60 && score <= 69) {
        console.log("Grade C")
    }
    if (score >= 50 && score <= 59) {
        console.log("Grade D")
    }
    if (score < 50) {
        console.log("Grade F")
    }
}
if (score > 100) {
    console.log("Over score!")
}