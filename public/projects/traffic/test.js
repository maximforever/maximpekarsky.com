var dogs = [];

function Dog(name){
    this.name = name;
    this.age = Math.floor(Math.random()*100);

    this.bark = function(){
        console.log("Woof! My name is " + this.name);
    };

    this.friends = function(mainDog){
        self = this;
        dogs.forEach(function(dog){
            console.log("My name is " + self.name + " and I'm friends with " + dog.name);
        })
    }
}

ruffy = new Dog("ruffy");
rex = new Dog("rex");
spot = new Dog("spot");

dogs.push(ruffy, rex, spot);

ruffy.bark();
ruffy.friends();