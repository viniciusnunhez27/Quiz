const form = document.querySelector('.quiz-form')
const textScore = document.querySelector('.score')

const anserwsCorrect = ['C', 'A', 'B', 'C']

form.addEventListener('submit', event => {
    event.preventDefault()


let score = 0

 const userAnswers =  [
   form.inputQuestion1.value,
   form.inputQuestion2.value,
   form.inputQuestion3.value,
   form.inputQuestion4.value,
 ]

 userAnswers.forEach((userAnswer, index) => {
    if(userAnswer === anserwsCorrect[index]){
      score += 25
    }
 })

  textScore.innerHTML = `<h3>Seu score é: ${score}</h3`  


})

  
