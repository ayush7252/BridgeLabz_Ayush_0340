const Animal = {
    speak(){
        console.log("Animal Make Sound");
    }
}

const Dog = Object.create(Animal);

Dog.bark = function(){
    console.log("woof !");
}

Dog.bark();

Dog.speak();