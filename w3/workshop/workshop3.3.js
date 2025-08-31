const students = [
    {name: "Beer", grade: 2.75},
    {name: "Eric", grade: 3.18},
    {name: "Coke", grade: 3.29},
    {name: "Vodka", grade: 1.73}
];

students.forEach((students, index) =>{
    console.log(`Student ${index}: ${students.name}, Grade: ${students.grade}`);
})

function showStudentCount() {
    console.log(`Total Students: ${students.length}`)
}

showStudentCount()