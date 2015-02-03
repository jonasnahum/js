for (var number = 0; number < 101; number = number + 1)
{
  if((number %3==0) && (number %5==0))
  {
    console.log("FizzBuzz ");
    continue;
  }
  if(number %3==0)
  {
    console.log("Fizz");
    continue;
  }
  if(number %5==0)
  {
    console.log("Buzz");
    continue;
  }
console.log(number);
}




