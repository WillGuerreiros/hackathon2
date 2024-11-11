import { currentQuestion } from "./CurrentQuestion.js"
import { currentUser } from "./CurrentUser.js";


export default function VerifyAnswer(answer) {
    console.log("recebeu answer", answer)
    // Procurar a explicação em false_answers
    let explanationObj = currentQuestion.falseAnswers.find(item => item.answer === answer);
    let preAnswer = "Resposta errada, pois: "

    // Se não encontrar em false_answers, procurar em true_answer
    if (!explanationObj) {
        explanationObj = currentQuestion.trueAnswers.find(item => item.answer === answer);
        preAnswer = "Resposta certa, já que "
        currentUser.addScore = 10
    }

    // Retorna a explicação se encontrar, ou uma mensagem caso não encontre
    return explanationObj ? alert(preAnswer + explanationObj.explanation ) : alert("Explicação não encontrada.");
}




