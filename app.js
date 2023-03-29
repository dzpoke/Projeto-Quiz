/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. 
  Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, busque fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.
*/

// Variaveis globais

const correctAnswers = ['C', 'A', 'C', 'B', 'C']
const form = document.querySelector('form')
const button = document.querySelector('.btn-global')

const globalBox = document.querySelector('.global-box-poup-pop')
const boxPouppop = document.querySelector('.box-poup-pop')
const poupPoints = document.querySelector('.box-points')


// Invocao da Poup Pop

button.addEventListener('click', () => {
    globalBox.style.display = 'block'
 })

 // Interacao com o puop pop

globalBox.addEventListener('click', event => {

    const className =  event.target.classList[0]
    const arrayClass = ['global-box-poup-pop']
    const PoupPopTrue = arrayClass.some(arrayClas => arrayClas === className)
    
    if(PoupPopTrue){
        globalBox.style.display = 'none'
    }

 })

// Envio das respostas

 form.addEventListener('submit', event => {
    event.preventDefault()

     const userAnswers = [
         form.inputQuestion1.value,
         form.inputQuestion2.value,
         form.inputQuestion3.value,
         form.inputQuestion4.value,
         form.inputQuestion5.value
     ]
    
    let score = 0

    userAnswers.forEach((userAnswer, index) => {
        
        if(userAnswer === correctAnswers[index]){
            let lenghtArray = userAnswers.length
            score += 100 / Number(lenghtArray) 
        }
    })

    poupPoints.innerHTML = `<p class="userPoints" > ${score} pontos </p>` 

})

