students = [
    {name: "Beer", score: 52},
    {name: "Eric", score: 67},
    {name: "Coke", score: 73},
    {name: "Vodka", score: 48},
    {name: "Wine", score: 89},
    {name: "Whiskey", score: 36},
    {name: "Champagne", score: 61},
    {name: "Mocktail", score: 72}
]

function filterPassedStudents() {
    students.forEach(students => {
        if (students.score >= 50) {
            console.log(`Student ${students.name} passed with score ${students.score}`);
        }
    })
}

filterPassedStudents()