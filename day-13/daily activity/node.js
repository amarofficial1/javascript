import read from "readline"
let book = new Map()
let rl = read.createInterface({ input: process.stdin, output: process.stdout })
let display = () => {
    console.log(" ")
    console.log("Menu")
    console.log("1.Add Book")
    console.log("2.Remove Book")
    console.log("3.Search Book")
    console.log("4.Update Book")
    console.log("5.Display all Books")
    console.log("6.exit")
    console.log(" ")


    rl.question("Enter your Choice: ", (ch) => {
        console.log(" ")
        switch (ch) {
            case '1':
                rl.question("Enter the Bookname= ", (bname) => {
                    if (bname.trim() !== "") {
                        let bid = book.size + 1
                        book.set(bid, bname)
                        console.log("Book Added Successfully")
                    }
                    else
                        console.log("Enter a valid answer")
                    display()
                })
                    break
            case '2':
                if (book.size > 0) {
                    for (let i of book) {
                        console.log(`Book ID= ${i[0]}, Book Name= ${i[1]}`)
                    }
                    console.log(" ")
                    rl.question("Enter the Book ID of the book you want to delete:", (tid) => {
                        if (Number(tid) > book.size)
                        {
                        console.log("Invalid Book id")
                            display()
                        }
                        else
                        {
                            console.log(" ")
                        book.delete(Number(tid))
                        console.log("Book Deleted Successfully")
                        display()

                        }
                    })
                }
                else {
                    console.log("Cannot Delete,Book Library empty")
                    console.log("")
                    display()
                }
                break

            case '3':
                if (book.size > 0) {
                    rl.question("Enter the name of the book: ", (bname) => {
                        let a = 0
                        for (let i of book) {
                            if (i[1] == bname.trim()) {
                                console.log("Book Found.")
                                console.log(`Book ID: ${i[0]}, BookName: ${i[1]}`)
                                a++
                            }
                        }
                        if (a == 0)
                            console.log("Book not Found.")
                display()
                    })
                }
                else
                {
                    console.log(" Cannot search Book Library Empty")
                display()}
                break

            case '4':
                if (book.size != 0) {
                    for (let i of book) {
                        console.log(`Book ID= ${i[0]}, Book Name= ${i[1]}`)
                    }
                    console.log(" ")
                    rl.question("Enter the BookID of the book you want to Modify: ", (tid) => {
                        console.log(" ")
                        if (Number(tid) > book.size) {
                            console.log("Invalid book id")
                            display()
                        }
                        else {
                            rl.question("Enter the new Bookname: ", (tid2) => {
                                book.set(Number(tid),tid2)
                                    console.log("Book updated Successfully")
                                display()
                            })
                        }

                    })
                }
                else {
                    console.log("Cannot Update, Book Library empty")
                    console.log("")
                    display()
                }
                break
            case '5':
                if (book.size != 0) {
                    for (let i of book) {
                        console.log(`Book ID= ${i[0]}, BookName= ${i[1]}`)
                    }
                }
                else
                    console.log("Book Library Empty")
                display()
                break
            case '6':
                console.log("Book Library exited.")
                rl.close()
                break
            default:
                console.log("Enter a valid option")
                display()
                break
        }
    }
    )
}
display()