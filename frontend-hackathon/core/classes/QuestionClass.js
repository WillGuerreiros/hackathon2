import { questions } from "../../db/Questions.js"


class QuestionClass{
    constructor(id){
        this.id = id;
        console.log("construiu com esse id:"+this.id)
        this.question = questions.find(item=> item.id === id).question;
        this.trueAnswer = questions.find(item=> item.id === id).true_answer.answer;
        this.trueAnswerExplanation = questions.find(item => item.id === id).true_answer.explanation;
        this.falseAnswer1 = questions.find(item=> item.id === id).false_answers[0].answer;
        this.falseAnswer1explanation = questions.find(item => item.id === id).false_answers[0].explanation;
        this.falseAnswer2 = questions.find(item=> item.id === id).false_answers[1].answer;
        this.falseAnswer2explanation = questions.find(item => item.id === id).false_answers[1].explanation;
        this.falseAnswer3= questions.find(item=> item.id === id).false_answers[2].answer;
        this.falseAnswer3explanation = questions.find(item => item.id === id).false_answers[2].explanation;
        this.falseAnswer4 = questions.find(item=> item.id === id).false_answers[3].answer;
        this.falseAnswer4explanation = questions.find(item => item.id === id).false_answers[3].explanation;
    }

    
    set novoId(newId){
        this.id = newId;
        this.question = questions.find(item=> item.id ===newId).question;
        this.trueAnswer = questions.find(item=> item.id ===newId).true_answer.answer;
        this.trueAnswerExplanation = questions.find(item => item.id ===newId).true_answer.explanation;
        this.falseAnswer1 = questions.find(item=> item.id ===newId).false_answers[0].answer;
        this.falseAnswer1explanation = questions.find(item => item.id ===newId).false_answers[0].explanation;
        this.falseAnswer2 = questions.find(item=> item.id ===newId).false_answers[1].answer;
        this.falseAnswer2explanation = questions.find(item => item.id ===newId).false_answers[1].explanation;
        this.falseAnswer3= questions.find(item=> item.id ===newId).false_answers[2].answer;
        this.falseAnswer3explanation = questions.find(item => item.id ===newId).false_answers[2].explanation;
        this.falseAnswer4 = questions.find(item=> item.id ===newId).false_answers[3].answer;
        this.falseAnswer4explanation = questions.find(item => item.id ===newId).false_answers[3].explanation;
        return console.log("mudou o id para: "+this.id)
    }
}

export default QuestionClass

    