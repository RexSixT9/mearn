//array creation
// var vehicle=[]; //declaration
var vehicle = ["car","bus","bike","plane",200000,567000] ; //initilization

//1 To fetch an item from an array
console.log(vehicle[0]);

//2 To find the length of the array
console.log(vehicle.length);

//3 Fetch every element of the array
console.log(vehicle);

//4 To insert a new element in an array
vehicle.push("5000");
console.log(vehicle);
// Or
vehicle[vehicle.length] = "10000";
console.log(vehicle);

//5 To get index position of values stored in an array


//6 Fetch one by one elements of the array
for(var i=0;i<vehicle.length;i++){
    console.log(vehicle[i]);
}