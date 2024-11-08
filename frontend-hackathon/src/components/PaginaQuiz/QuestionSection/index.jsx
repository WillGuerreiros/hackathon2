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
    let [resposta1, setresposta1] = useState(currentQuestion.falseAnswer1)
    let [resposta2, setresposta2] = useState(currentQuestion.falseAnswer2)
    let [resposta3, setresposta3] = useState(currentQuestion.falseAnswer3)
    let [resposta4, setresposta4] = useState(currentQuestion.falseAnswer4)
    let [resposta5, setresposta5] = useState(currentQuestion.trueAnswer)

    function AtualizaTudo() {
        setNewQuestion(currentQuestion.question)
        setresposta1(currentQuestion.falseAnswer1)
        setresposta2(currentQuestion.falseAnswer2)
        setresposta3(currentQuestion.falseAnswer3)
        setresposta4(currentQuestion.falseAnswer4)
        setresposta5(currentQuestion.trueAnswer)
    }

    function VerifyAndUpdate(qualResposta) {
        VerifyAnswer(qualResposta)
        return AtualizaTudo()
    }

    return (
        <div>
            <div >
                <Score pontos={currentUser.score} />
            </div>

            <Divider variant="solid" >{questionnow}</Divider>

            <div>
                <p>{currentQuestion.id}</p>
            </div>

            <div className="flex flex-col gap-4 p-4">
                <AnswerSection resposta={resposta1} answerSelected={VerifyAndUpdate} />
                <AnswerSection resposta={resposta2} answerSelected={VerifyAndUpdate} />
                <AnswerSection resposta={resposta3} answerSelected={VerifyAndUpdate} />
                <AnswerSection resposta={resposta4} answerSelected={VerifyAndUpdate} />
                <AnswerSection resposta={resposta5} answerSelected={VerifyAndUpdate} />
            </div>

        </div>
    )
}