i = 0 //initialization
say 'hey'
if i < 3 //condition
increase i by 1 //final-expression

//the above is written in pseudo code and its basically telling the computer to do what's below.

0 "hey"
1 "hey"
2 "hey"
3

for (initialization; condition; final expression) {
    console.log("hey")
}

//the above and the below are essentially the same thing

for (i = 0; i < 3; i++) {
    console.log("hey")
}

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
//LOOPING THROUGH AN ARRAY:
//do the below
//fun-fact: if you dont put [i] after 'testArray' in the console.log, you'll get the array 3 times. 
//if you DO include it, then you get each item displayed (only once tho)
//the code below works because there are 3 items in the array but if there were more than 3, it wouldnt work.

var testArray = ["item1", "item2", "item3"]
for (i = 0; i < 3; i++) { //an improvement upon this code would be to use 'i < testArray.length' instead of i < 3 
    console.log(testArray[i])
}

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

var object = {
    key: [],
    displayStuff: function() {
        console.log('my stuff:'); //console.log('my stuff:', this.key); used to be the line and this.key was deleted
        for (var i = 0; i < this.key.length; i++) { //this line and console.log was added to the older boolean code
            console.log(this.key[i].keyText);
        }
    },
    addKey: function(keyText) {
        this.key.push({
            keyText: keyText,
            completed: false,
        });
        this.displayStuff();
    },
    changeKey: function(position, keyText) {
        this.key[position].keyText = keyText;
        this.displayStuff();
    },
    deleteKey: function(position) {
        this.key.splice(position, 1);
        this.displayStuff();
    },
    toggleCompleted: function(position) {
        var something = this.key[position];
        something.completed = !something.completed;
        this.displayStuff();
    }
};

//GETTING A LOOP TO SHOW WHAT'S INSIDE OF 'keyText'
//in this code 'key' is empty so first you need to create items by doing object.addKey("something")
//if you do it twice you'll see that the displayStuff feature is st ill working and showing what's inside of addKey/keyText object
//you'll also see that the for loop is working and will show 'something' as well as the other thing you add

//there was a change done to 'console.log('my stuff:');' and I made a note of the change. What's seen is the most recent code
//after the change, you see 'my stuff:' followed by the listed items in the array

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

displayStuff should tell you when your array is late:

    var object = {
        key: [],
        displayStuff: function() {
            if (this.key.length === 0) {
                console.log("The array is empty!") //if array is empty, say so
            }
            else {
                console.log('my stuff:');
                for (var i = 0; i < this.key.length; i++) {
                    console.log(this.key[i].keyText); //if array is not empty, show me array
                }
            }
        },
        addKey: function(keyText) {
            this.key.push({
                keyText: keyText,
                completed: false,
            });
            this.displayStuff();
        },
        changeKey: function(position, keyText) {
            this.key[position].keyText = keyText;
            this.displayStuff();
        },
        deleteKey: function(position) {
            this.key.splice(position, 1);
            this.displayStuff();
        },
        toggleCompleted: function(position) {
            var something = this.key[position];
            something.completed = !something.completed;
            this.displayStuff();
        }
    };

displayStuff should tell you when your array is late WITH IF STATEMENTS
//if you write 'object.displayStuff()' onto repl line, you will get back "The array is empty!"
//you can use object.addKey("blahblahblah") to add something and it will display it via the for loop
// if you then use object.deleteKey(0) you'll get "The array is empty!" again


-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

if (condition) {
    //code that runs if condition is true
}
else {
    //code that runs if condition is false
}


the above is the most basic example of an
if statement at work

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

displayStuff() SHOULD SHOW IF AN ITEM HAS BEEN COMPLETED:

var object = {
        key: [],
        displayStuff: function() {
            if (this.key.length === 0) {
                console.log("The array is empty!") //if array is empty, say so
            }
            else {
                console.log('my stuff:');
                for (var i = 0; i < this.key.length; i++) {
                    if (this.key[i].completed === true) {
                        console.log("(x)"
                            this.key[i].keyText)
                    }
                    else {
                        console.log("( )", this.key[i].keyText)
                    }
                }
        }
    },
    addKey: function(keyText) {
        this.key.push({
            keyText: keyText,
            completed: false,
            });
            this.displayStuff();
        },
        changeKey: function(position, keyText) {
            this.key[position].keyText = keyText;
            this.displayStuff();
        },
        deleteKey: function(position) {
            this.key.splice(position, 1);
            this.displayStuff();
        },
        toggleCompleted: function(position) {
            var something = this.key[position];
            something.completed = !something.completed;
            this.displayStuff();
        }
};


COULDNT MAKE THIS WORK ON REPL LINE BECAUSE i KEPT GETTING '...' AFTER i ENTERED, INSTEAD OF undefined

