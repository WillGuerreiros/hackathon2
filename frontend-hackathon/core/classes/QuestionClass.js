import {questions} from "../../db/Questions.js"



class QuestionClass{
    constructor(id){
        this.id = id;
        console.log("construiu com esse id:"+this.id)
        this.question = questions.find(item=> item.id === id).question;
        this.ods = questions.find(item => item.id=== id).ods
        this.trueAnswers = questions.find(item => item.id === id).true_answer
        this.falseAnswers = questions.find(item => item.id === id).false_answers
        this.allAnswers = this.trueAnswers.concat(this.falseAnswers)
        this.allAnswers = this.allAnswers.sort(() => Math.random() - 0.5)//randomiza as posicoes da array com as respostas
    }

    
    set novoId(newId){
        this.id = newId;
        this.question = questions.find(item=> item.id ===newId).question;
        this.ods = questions.find(item => item.id=== newId).ods
        this.trueAnswers = questions.find(item => item.id === newId).true_answer
        this.falseAnswers = questions.find(item => item.id === newId).false_answers
        this.allAnswers = this.trueAnswers.concat(this.falseAnswers)
        this.allAnswers = this.allAnswers.sort(() => Math.random() - 0.5)//randomiza as posicoes da array com as respostas
        return console.log("mudou o id para: "+this.id)
    }
}

export default QuestionClass
    