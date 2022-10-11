const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('result')
const scoreText = document.querySelector('.score')

const CorrectAnswers = ['C', 'A', 'B', 'C']

form.addEventListener('submit', event => {
    event.preventDefault()

 let score = 0

 const answersUser =  [
   form.inputQuestion1.value,
   form.inputQuestion2.value,
   form.inputQuestion3.value,
   form.inputQuestion4.value,
 ]

 answersUser.forEach((userAnswer, index) => {
    if(userAnswer === CorrectAnswers[index]){
      score += 25
    }
 })

 scrollTo(0,100)
 finalResult.classList.remove('d-none')

 let counter = 0

 const timer = setInterval(() => {
  if(counter === score){
    clearInterval(timer)
  } 

  finalResult.querySelector('span').textContent = `${counter}%`
   counter++
 },10)

})


