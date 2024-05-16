// Part1.

function findprime()
{
for (let n = 2; n < p ;n++)
if (n % 2 === 1 && n % 3 === 1 )
    console.log("isPrime",n)
else{(n % 2 === 0 && n % 3 === 0)}

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