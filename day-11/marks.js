let stud = [
    { name: "amar", mark: 100 },
    { name: "jain", mark: 50 },
    { name: "ron", mark: 60 },
    { name: "riju", mark: 80 },
    { name: "dona", mark: 90 },
]
for (i of stud)
    console.log(i)
console.log("Students with marks above 80:")
j = 0
for (i = 0; i < stud.length; i++) {
    if (stud[i].mark > 80) {
        console.log(stud[i].name)
        j++
    }
}
if (j == 0)
    console.log("none")