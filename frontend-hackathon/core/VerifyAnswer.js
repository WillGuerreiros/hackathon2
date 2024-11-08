import { currentQuestion } from "./CurrentQuestion.js";
import { currentUser } from "./CurrentUser.js";


export default function VerifyAnswer(question){
    let explicacao = null

    if (question == currentQuestion.falseAnswer1){
        explicacao = currentQuestion.falseAnswer1explanation
    }
    else if (question == currentQuestion.falseAnswer2){
        explicacao = currentQuestion.falseAnswer2explanation
    }
    else if (question == currentQuestion.falseAnswer3){
        explicacao = currentQuestion.falseAnswer3explanation
    }
    else if (question == currentQuestion.falseAnswer4){
        explicacao = currentQuestion.falseAnswer4explanation
    }
    else if (question == currentQuestion.trueAnswer){
        explicacao = currentQuestion.trueAnswerExplanation
    }

    if (question !== currentQuestion.trueAnswer){
        currentQuestion.novoId = currentQuestion.id+1
        currentUser.addScore = -10
        return alert("Resposta errada, pois: " + explicacao)
    }
    else{
        currentQuestion.novoId = currentQuestion.id+1
        currentUser.addScore = 10
        return alert("Resposta Certa, ja que "+ explicacao)
    }
}


