/*
 * Programming Quiz: I Got Bills (6-9)
 */

var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90,
29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

const totals = bills.map(value => {
    value *= 1.15;
    value = parseFloat(value.toFixed(2));
    return value;
});

console.log(totals);

// your code goes here