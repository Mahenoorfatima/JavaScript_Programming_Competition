//Question # 01:

const arr = [-2 , 0 , -1];
const n = arr.length;

function maxSubarrayProduct(arr , n){
    let ans = -Infinity;
    let product = 1;

    for (let i=0; i<n; i++) {
        product *=arr[i];
        ans = Math.max(ans,product);
        if (arr[i] === 0) {
            product = 1;
        }
    }

    return ans;
}

console.log(`Maximum Subarray product is ${maxSubarrayProduct(arr , n)}`)


//Question # 02:

var toAdd = function(numbers, target) {
    for(let i=0; i<numbers.length; i++) {
        for(let j=i+1; j<numbers.length; j++) {
        if (numbers[i] + numbers[j] == target) {
            return [i ,j]
         }
        }
    }
};


console.log(toAdd([12 ,11 ,25 ,26],38));


//Question # 03: 

let string = "Welcome to this Javascript Guide!";
let reverseString = string.split(" ")
.map(function (word)
{
    return word.split("").reverse().join("")
});

console.log(reverseString.join(" "));


//Question # 04:

var library = [ 
    {
        author : 'Bill Gates' ,
        title : 'The Road Ahead' ,
        readingStatus: true
},
    {
        author : 'Steve Jobs' ,
        title : 'Walter Isaacson' ,
        readingStatus: true
},
    {
        author: 'Suzanne Collins' ,
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
}];

for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Already read " + book);
} else
    {
     console.log("You still need to read " + book);
}
}


//Question # 05:

function amountToCoins (amount , coins){

   if (amount === 0) {
        return [];
} else {
   if (amount >= coins[0]) {
   left = (amount - coins[0]);
    return [coins[0]].concat(amountToCoins(left,coins));
} else {
    coins.shift();
    return amountToCoins(amount,coins);
        }
    }
}

console.log(amountToCoins(46,[20, 10 , 5 , 2 ,1]));

