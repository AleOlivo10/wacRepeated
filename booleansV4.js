var object = {
    key: [],
    displayStuff: function() {
        console.log('my stuff:', this.key);
    },
    addKey: function(keyText) {     //the 'keyText' in value position is referencing the function parameter to the left. It can change
     this.key.push({                //if you make the parameter 'hello', then the 'keyText' value just became 'hello' too
         keyText: keyText,    //the 'keyText' in the key position is referencing the property. when using a dot notation, this is what's being referenced
         completed: false,
     });
     this.displayStuff();
    },
    changeKey: function(position, keyText) {    //This function now serves to effect the above one
    this.key[position].keyText = keyText;       //the '.keyText' references the above property. the '= keyText' is referencing the above parameter
    this.displayStuff();
    },
    deleteKey: function(position) {
    this.key.splice(position, 1);
    this.displayStuff();
    }
};

//ADDING STUFF
//when you write in object.addKey("something") on the repl line, you make 'something' part of an object within our original object
//addKey() now adds objects to the array

//WORKING WITH THE 'CHANGE KEY' METHOD
//the changeKey method should change the keyText property on each key object
//when I write object.changeKey(0, "something again") on the repl line, 'something again' becomes the new, changed value for the object within our object

//TOGGLE COMPLETED
//kinda like flipping a light switch. makes true a false, and vice versa
! this is the bang operator
whatever you write after ! it will make opposite
//if you write !true on the repl line, you will get back 'false'

var poe = false //when you write !poe on the repl line you will get 'true'

poe = !poe //now the repl line will say 'true' and have changed the status of var poe


var object = {
    key: [],
    displayStuff: function() {
        console.log('my stuff:', this.key);
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
    toggleCompleted : function(position) {      //this function is meant to switch the boolean value already set above
    var something = this.key[position];     //creating the 'something' variable makes it so you dont have to write out the whole something.completed = !something.completed later on in the code
    something.completed = !something.completed ;
    this.displayStuff();
    }
};

//MORE TOGGLE COMLETED INFO
//first, make sure you already have created a variable by doing object.addKey("whatever")
//then, when you write object.toggleCompleted(0) it will change the boolean value of 'whatever' from false to true (or from true to false if you started off with true)