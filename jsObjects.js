/*
 * Programming Quiz: Umbrella (7-1)
 */

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    close: function(){
        if (umbrella.isOpen === true) {
            umbrella.isOpen = false;
            return "Closed the umbrella!";
        } else {
            return "Umbrella is already closed!";
        }
    }
    // your code goes here
};


var umbrellaEs6 = {
    color: "pink",
    isOpen: true,
    open: () => {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    close: () => {
        if (umbrella.isOpen === true) {
            umbrella.isOpen = false;
            return "Closed the umbrella!";
        } else {
            return "Umbrella is already closed!";
        }
    }
    // your code goes here
};

/*
 * Programming Quiz: Menu Items (7-2)
 */

const breakfast = {
    name : "The Lumberjack",
    price : "$9.95",
    ingredients : ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
    
};
// your code goes here


/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: (amount) => {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: (amount) =>{
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: ()=>{
        return `Welcome!
        Your balance is currently \$${savingsAccount.balance} and your interest rate is ${savingsAccount.interestRatePercent}%.`;
    }
};

console.log(savingsAccount.printAccountSummary());


/*
 * Programming Quiz: Facebook Friends (7-5)

 Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1

 */

const facebookProfile = {
    name : "Thorsten",
    friends : 2,
    messages : ["test", "text"],
    postMessage : message => {
        facebookProfile.messages.push(message);
    },
    deleteMessage : index => {
        facebookProfile.messages.splice(index,1);
    },
    addFriend : () => {
        facebookProfile.friends++;
    },
    removeFriend : () => {
        facebookProfile.friends--;
    }
};

console.log(facebookProfile);
facebookProfile.deleteMessage(0);
console.log(facebookProfile);


/*
 * Programming Quiz: Donuts Revisited (7-6)
 Use the forEach() method to loop over the array and print out the following donut summaries using console.log.

Jelly donuts cost $1.22 each
Chocolate donuts cost $2.45 each
Cider donuts cost $1.59 each
Boston Cream donuts cost $5.99 each
 */

var donutsObj= [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

donutsObj.forEach((element)=>{
    console.log(`${element.type} donuts cost $${element.cost} each`);
});