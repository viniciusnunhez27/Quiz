const form = document.querySelector('.quiz-form')

const correctAnwsers = ['B', 'B', 'B' ,'B']

form.addEventListener('submit', event => {
   event.preventDefault()

   let score = 0 

   const userAnswers = [
      form.inputQuestion1.value,
      form.inputQuestion2.value,
      form.inputQuestion3.value,
      form.inputQuestion4.value,
   ]

userAnswers.forEach((userAnswer, index) => {
   if (userAnswer === correctAnwsers[index]){
    score += 25 
   }
 })
 console.log(score)
})


