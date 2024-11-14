"use client";
import { useState } from "react"
import { currentQuestion } from "../../../../core/CurrentQuestion.js"
import AnswerSection from "./AnswerQuestion/index.jsx"
import VerifyAnswer from "../../../../core/VerifyAnswer.js"
import { Divider } from "antd";
import Score from "../Score/Index.jsx";
import { currentUser } from "../../../../core/CurrentUser.js";

export default function QuestionSection(props) {

    let [questionnow, setNewQuestion] = useState(currentQuestion.question)
    let [answer1, setNewAnswer1] = useState(currentQuestion.allAnswers[0].answer)
    let [answer2, setNewAnswer2] = useState(currentQuestion.allAnswers[1].answer)
    let [answer3, setNewAnswer3] = useState(currentQuestion.allAnswers[2].answer)
    let [answer4, setNewAnswer4] = useState(currentQuestion.allAnswers[3].answer)
    let [answer5, setNewAnswer5] = useState(currentQuestion.allAnswers[4].answer)
    let [points,setNewpoints] = useState(currentUser.score)
    let [ods,setNewOds] = useState(currentQuestion.ods)

    function AtualizaTudo() {
        setNewQuestion(currentQuestion.question)
        setNewAnswer1(currentQuestion.allAnswers[0].answer)
        setNewAnswer2(currentQuestion.allAnswers[1].answer)
        setNewAnswer3(currentQuestion.allAnswers[2].answer)
        setNewAnswer4(currentQuestion.allAnswers[3].answer)
        setNewAnswer5(currentQuestion.allAnswers[4].answer)
        setNewpoints(currentUser.score)
        setNewOds(currentQuestion.ods)

    }

    function VerifyAndUpdate(qualResposta) {
        VerifyAnswer(qualResposta)
        currentQuestion.novoId = currentQuestion.id + 1
        return AtualizaTudo()
    }

    return (
        <div>
            <div >
                <Score pontos={points} />
            </div>

            <Divider variant="solid" >{questionnow}</Divider>

            <div>
                <p>{ods}</p>
            </div>

            <div>
                <AnswerSection answer={answer1} answerSelected={VerifyAndUpdate} />
            </div>
            <div>
                <AnswerSection answer={answer2} answerSelected={VerifyAndUpdate} />
            </div>
            <div>
                <AnswerSection answer={answer3} answerSelected={VerifyAndUpdate} />
            </div>
            <div>
                <AnswerSection answer={answer4} answerSelected={VerifyAndUpdate} />
            </div>
            <div>
                <AnswerSection answer={answer5} answerSelected={VerifyAndUpdate} />
            </div>


        </div>
    )
}