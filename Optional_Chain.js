const User = {
    name: "Ayush Kumar Singh",
    age : 21,
    email: "ayush@gmail.com",
    adress: {
        city: "Lucknow",
        state: "UP",
        country: "India"
    },
    getfullname : function() {
        return `${this.name}`;
    }
}

// console.log(User.adress?.['city']);

// console.log(User.getfullname?.());
