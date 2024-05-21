
//Part 1.

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  };

// Part2.

function findprime()
{
 let m = 2
for (let n = 2; n < p ;n++)
if (n % 2 === 1 && n % 3 <= m && n % 1 === 0)  
    console.log("isPrime",n)
else{(n % 2 === 0 && n % 4 === 0 && n % 3 === 0 && n % 1 === 0)
    console.log("isNotPrime",n);}

}
findprime(p = 24)

//Answer from class
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }}
    return true;

// part 3

let csvData = "ID, Name, Occupation, Age \\n42, Bruce, Knight, 41\\n57, Bob, Fry Cook, 19\\n63, Blaine, Quiz Master, 58\\98, Bill, Doctor's Assistant, 26";

let csvArr = csvData.split("\\n");

let formCsvData = "";

for (let i = 0; i < csvArr.length; i++) {
    formCsvData += csvArr[i];
    if (i < csvArr.length - 1) {
        formCsvData += "\n";
    }
}

console.log(formCsvData);
