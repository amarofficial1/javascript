import read from "readline"
let rl = read.createInterface({ input: process.stdin, output: process.stdout })
let task = new Map()
let display = () => {
    console.log("Menu")
    console.log("1.Add task")
    console.log("2.View task")
    console.log("3.Delete task")
    console.log("4.Update task")
    console.log("5.Exit")

    rl.question("Enter your choice: ", (ch) => {
                    console.log("")
        
        switch (ch) {
            case '1':
                rl.question("Enter the Task: ", (t) => {
                    if (t.trim() !== "") {
                        let taskid = task.size + 1
                        task.set(taskid, t)
                        console.log(`Task added: [${taskid}] ${t}`)
                    }
                    else
                        console.log("Enter a valid task")
                    display()
                })
                break;
            case '2':
                if (task.size > 0) {
                    console.log("Tasks:")
                    for (let i of task)
                        console.log(`[${i[0]}]:${i[1]}`)
                }
                else
                    console.log("Task empty")
                display()
                break

            case '3':
                if (task.size > 0) {
                    for (let i of task) {
                        console.log(`task ID= ${i[0]}, task= ${i[1]}`)
                    }
                    console.log(" ")
                    rl.question("Enter the Task ID of the task you want to delete:", (tid) => {
                        if (Number(tid) > task.size)
                        {
                        console.log("Invalid Task id")
                            display()
                        }
                        else
                        {
                            console.log(" ")
                        task.delete(Number(tid))
                        console.log("Task Deleted Successfully")
                        display()

                        }
                    })
                }
                else {
                    console.log("Cannot Delete, Task empty")
                    console.log("")
                    display()
                }
                break
            case '4':
                if (task.size != 0) {
                    for (let i of task) {
                        console.log(`Task ID= ${i[0]}, Task= ${i[1]}`)
                    }
                    console.log(" ")
                    rl.question("Enter the taskID of the task you want to Modify: ", (tid) => {
                        console.log(" ")
                        if (Number(tid) > task.size) {
                            console.log("Invalid task id")
                            display()
                        }
                        else {
                            rl.question("Enter the new Task: ", (tid2) => {
                                task.set(Number(tid),tid2)
                                    console.log("Task updated Successfully")
                                display()
                            })
                        }

                    })
                }
                else {
                    console.log("Cannot Update, Task empty")
                    console.log("")
                    display()
                }
                break

            case '5':
                console.log("task manager exited.")
                rl.close()
                break
            default:
                console.log("Enter a valid option")
                display()
                break
        }
    })
}
display()