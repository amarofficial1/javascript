//create a rectangle object with length and breadth, add methods to calculate area & perimeter

rectangle={
    length: 50, breadth:30,
    area:()=>{
        console.log("Area of rectangle= "+(rectangle.length*rectangle.breadth))
    },
    perimeter:()=>{
        console.log("Perimeter of rectangle= "+(2*(rectangle.length+rectangle.breadth)))
    }
}
console.log(rectangle)
rectangle.area()
rectangle.perimeter()
