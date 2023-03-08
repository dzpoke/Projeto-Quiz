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


const correctAnswers = ['C', 'A', 'C', 'B', 'C']
const form = document.querySelector('form')
const boxPoint = document.querySelector('.hiddenBoxPoint')
const boxPouppop = document.querySelector('.box-poup-pop')
const poupPop = document.querySelector('.box-points-oks')
const button = document.querySelector('button')

form.addEventListener('submit', event => {
    event.preventDefault()
    event.stopPropagation()
    let score = 0

    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
        form.inputQuestion5.value
    ]    

    userAnswers.forEach((userAnswer, index) => {
        if(userAnswer === correctAnswers[index]){
            let lenghtArray = userAnswers.length
            score += 100 / Number(lenghtArray) 
        }
        
    })
    boxPoint.classList.remove('hiddenBoxPoint')
    boxPoint.classList.add('visibleBoxPoint')
    // boxPoint.setAttribute('class','visibleBoxPoint')
    poupPop.innerHTML = `<p> ${score} pontos </p>` 

    console.log(event)
    
})


