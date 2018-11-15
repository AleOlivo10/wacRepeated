var myCar = {
    color: "red",
    wheels: 4,
    headlights: "off",
    seats: "leather"
}

//to get features of myCar, enter name of variable onto repl line. to access a specific value, such as color write myCar.color and terminal will give 'red'


//you can place fuctions inside of objects. This is called a Method, as seen below:

    var me = {
    skin: "brown", 
    sex: "female", 
    name: "alejandra", 
    sayName: function() {
        console.log(this.name);
    }
}

//by putting 'this' in as a parameter, it clarifies that 'this' is going to be used to refer to the entire object


var object = {
    key: ['value1', 'value2', 'value3'],
    displayStuff: function() {
        console.log('my stuff:', this.key);
    }
}

//TO DISPLAY
//writing in object.displayStuff() will display the values


var object = {
    key: ['value1', 'value2', 'value3'],
    displayStuff: function() {
        console.log('my stuff:', this.key);
    },
    addKey: function(key) {
     this.key.push(key);
     this.displayStuff();
    }
};

//TO ADD STUFF
//the display feature works just fine now that i'm adding something.
//when I write in object.addKey("plunker") into the repl line, it displays the original array + the newest addition

var object = {
    key: ['value1', 'value2', 'value3'],
    displayStuff: function() {
        console.log('my stuff:', this.key);
    },
    addKey: function(key) {
     this.key.push(key);
     this.displayStuff();
    },
    changeKey: function(position, newValue) {
    this.key[position] = newValue;
    this.displayStuff();
    }
};

//TO CHANGE STUFF
//when I write in object.changeKey(0, 'first') on the repl line, it displays the array but the first item now say 'first' instead of 'value1'

var object = {
    key: ['value1', 'value2', 'value3'],
    displayStuff: function() {
        console.log('my stuff:', this.key);
    },
    addKey: function(key) {
     this.key.push(key);
     this.displayStuff();
    },
    changeKey: function(position, newValue) {
    this.key[position] = newValue;
    this.displayStuff();
    },
    deleteKey: function(position) {
    this.key.splice(position, 1);
    this.displayStuff();
    }
};

//TO DELETE STUFF:
//write in object.deleteKey(#) and this will delete whichever number is inside of the parenthesis
//the number references a position in the object array



