var object = {
        key: [],
        displayStuff: function() {
            if (this.key.length === 0) {
                console.log("The array is empty!") 
            }
            else {
                console.log('my stuff:');
                for (var i = 0; i < this.key.length; i++) {
                    if (this.key[i].completed === true) {
                        console.log("(x)", this.key[i].keyText);
                    }
                    else {
                        console.log("( )", this.key[i].keyText);
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
        },
        toggleAll: function() {                    
            var totalKey = this.key.length
            var completedKey = 0;
            for (var i = 0; i < totalKey; i++) {        
                if (this.key[i].completed === true) {
                    completedKey++;
                }
            }
            if (completedKey === totalKey) {                  
                for (var i = 0; i < totalKey; i++) {
                    this.key[i].completed = false;
                }
            }
            else {                                      
                for (var i = 0; i < totalKey; i++) {
                    this.key[i].completed = true;
                }
            }
        this.displayStuff();                        
    }
    };
    
    
    
1. we want to get access to the display items button-->
var displayItems = document.getElementById("displayItemsButton")-->
console.log(displayItemsButton);-->
2. we want to run displayKey method when someone clicks the display items button-->
