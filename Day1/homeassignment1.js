function isOddOrEven(number){
    if(number % 2 === 0){
return "Even"
    }
    else{
        return "Odd"
    }
}
console.log(isOddOrEven(6))
console.log(isOddOrEven(7));

function negativePositive(number){
    if(number > 0){
        return "postive number"
    }
    else if (number < 0){
        return "negative number"
    }
    else{
        return "Zero"
    }
}
console.log(negativePositive(1))
console.log(negativePositive(-1))
console.log(negativePositive(0));

function studentGrade(score){
    let grade
    switch(true){
  case(score >= 90 && score <= 100):
  grade = "A"
  break
  case(score >= 80 && score <= 89):
  grade = "B"
  break
  case(score >= 60 && score <= 79 ):
        grade ="c"
        break
        case(score >= 35 && score <= 59 ):
        grade ="D"
        break
        case(score >= 0 && score <= 34 ):
        grade ="F"
        default:
    }
    return grade
}
console.log(studentGrade(17))
console.log(studentGrade(47))
console.log(studentGrade(71))
console.log(studentGrade(86))
console.log(studentGrade(99))