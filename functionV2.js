function makeSandwichWith(deliMeat){
get one slice of bread;
add turkey;
put one slice of bread on top;
}

//to run the function you would just write makeTurkeySandwich()

makeSandwichWith____
get one slice of bread
add _____ //yet undetermined deliMeat
put one slice of bread on top

//makeSandwichWith(ham) and makeSandwichWith__ham__ are basically the same. Ham is a variable
//if ham isnt a variable then you need to put it between quotation marks when its inside of the parenthesis



var exampleArray = ["item1", "item2", "item3"]
function displayStuff() {
    console.log("my stuff:", exampleArray);
}

//TO DISPLAY ITEMS:
//first, copy/paste the entire above array+function into the repl line. After that, when you write displayThing(), you will get back 'my stuff: ['item1', item2', 'item3']'


var exampleArray = ["item1", "item2", "item3"]
function addStuff() {
    exampleArray.push("new item");
}

//TO ADD ITEMS
//first copy/paste the entire above function (and array, if you havent done that already)
//after that, you enter addStuff() to make the function actually do its thing.
//then, when you enter the array name on the repl line or displayStuff(), it'll show an additional item at the end of line called 'new item'
//every time you run the addStuff() function, it adds the same item. Do it twice, and you've added two items named 'new item' to the exampleArray

function addStuff() {
    exampleArray.push("new item");
    displayStuff();
}

//TO IMPROVE UPON YOUR LAST FUNCTION:
//first copy/paste the entire above function (and array, if you havent done that already)
//by adding displayStuff() feature to the same function, you can see what you've done immediately after you do it

function addStuff(stuff) {
    exampleArray.push(stuff);
    displayStuff();
}

//TO FURTHER IMPROVE UPON YOUR LAST FUNCTION:
//first copy/paste the entire above function (and array, if you havent done that already)
//by adding stuff inside of the parenthesis as a variable that opens you up to write in whatever you want on the repl line so you're not add the same item over and over again.
//now on the repl line you'll write addStuff() and whatever you enter inside of the parenthesis as an arguement (inside of quotaion marks) will be what's added to the array


function changeStuff() {
    exampleArray[0] = "some new value"
    
    updated and improved:
    
function changeStuff(position, newValue) {
    exampleArray[position] = newValue;
}

    updated and MORE improved:
    
    function changeStuff(position, newValue) {
    exampleArray[position] = newValue;
    displayStuff()
}

//TO CHANGE AN ITEM:
//if you dont enter any parameter, the function will add 'some new value' to the beginning of the array, every time (because the array is set to [0])
//first copy/paste the entire above function (and array, if you havent done that already)
//enter the improved version of the changeStuff function and it allows you the flexability to enter whatever postioning for the item you're changing and the new value you're giving it

function deleteStuff(position) {
    exampleArray.splice(position, 1);
    displayStuff()
}

//TO DELETE AN ITEM
//first copy/paste the entire above function (and array, if you havent done that already)
//after entering the function above for the first time onto the repl line, writing deleteStuff() with a number inside of the parenthesis to specify the positioning will delete one item. I suppose I could customize those features as needed
//for this example I added in the displayStuff() function right away since I knew that would just make thing convenient







//IMPORTANT TAKEAWAY: 
//you can put a function inside of another function.
//functions can take multiple parameters





//TO ADD ITEMS: