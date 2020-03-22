// question 1

var myFavouriteColour = "orange";
    console.log(myFavouriteColour);


// question 2

var person = {
    hobby: "tennis",
    country: "Sweden",   
};


// question 3

var outOfStock = true;
if(outOfStock === true) {
    console.log("Out of stock");
}
else {
    console.log("In stock");
}


// question 4

var numbers = [1, 2, 3, 4, 5];
console.log(numbers)

for(var i = 0; i < numbers; i++) {
    console.log(numbers[i]);
}


// question 5

for(var count = 15; count <=25; count++) {
    console.log(count);
}


// question 6

for(var count = 15; count <=25; count++) {
    if(count === 20) {
      console.log(count);
    }
  }


// question 7

var corona = [
    // person 1
    {
        gender: "male",
        age: 38,
        infected: "false"
    },
    // person 2
    {
        gender: "female",
        age: 64,
        infected: "true"
    }
];

for(var i = 0; i < corona.length; i++) {
    console.log(corona[i].age);
    console.log(corona[i].infected);
}


// question 8

function whatIDontLike(bugs) {
    console.log("I don't like " + bugs);
}

whatIDontLike("spiders");


// question 9

