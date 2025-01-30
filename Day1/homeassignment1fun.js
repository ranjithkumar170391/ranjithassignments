function userProfile(name){
   console.log(`Hello, ${name}!`)
}
userProfile("Ranjith");



const double = (num) => num * 2;
console.log(double(5));



setTimeout(function() {
    console.log("This message is delayed by 2 seconds");
}, 2000);

function getUserData(callback) {
    setTimeout(() => {
        const user = {
            name: "Ranjith",
            age: 30
        };
        callback(user);
    }, 3000);
}

function displayUserData(user) {
    console.log(`User's Name: ${user.name}`);
    console.log(`User's Age: ${user.age}`);
}
getUserData(displayUserData);
