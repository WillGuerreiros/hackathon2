"use client";
import { useState } from "react"
import { currentQuestion } from "../../../../core/CurrentQuestion.js"
import AnswerSection from "./AnswerQuestion/index.jsx"
import VerifyAnswer from "../../../../core/VerifyAnswer.js"
import { ConfigProvider, Divider, Modal } from "antd";
import Score from "../Score/Index.jsx";
import { currentUser, verificaUser } from "../../../../core/CurrentUser.js";
import RandomNumberInt from "../../../../core/RandomNumberInt.js";
import updateTurn from "../../../../core/UpdateTurn.js";
import './Questionstyle.css';
import { Button } from "antd/es/radio/index.js";




export default function QuestionSection(props) {

    let [questionnow, setNewQuestion] = useState(currentQuestion.question)
    let [answer1, setNewAnswer1] = useState(currentQuestion.allAnswers[0].answer)
    let [answer2, setNewAnswer2] = useState(currentQuestion.allAnswers[1].answer)
    let [answer3, setNewAnswer3] = useState(currentQuestion.allAnswers[2].answer)
    let [answer4, setNewAnswer4] = useState(currentQuestion.allAnswers[3].answer)
    let [answer5, setNewAnswer5] = useState(currentQuestion.allAnswers[4].answer)
    let [points, setNewpoints] = useState(currentUser.score)
    let [user, setNewUser] = useState(currentUser.username)

    const [showNextQuestion, setShowNextQuestion] = useState(true);


    function AtualizaTudo() {
        setNewQuestion(currentQuestion.question)
        setNewAnswer1(currentQuestion.allAnswers[0].answer)
        setNewAnswer2(currentQuestion.allAnswers[1].answer)
        setNewAnswer3(currentQuestion.allAnswers[2].answer)
        setNewAnswer4(currentQuestion.allAnswers[3].answer)
        setNewAnswer5(currentQuestion.allAnswers[4].answer)
        setNewpoints(currentUser.score)
        setNewUser(currentUser.username)


    }

    function VerifyAndUpdate(qualResposta) {
        VerifyAnswer(qualResposta)
        currentQuestion.novoId = RandomNumberInt()
        setShowNextQuestion(updateTurn());
        return AtualizaTudo()
    }




    return (
        <div className="quizpage">

            {showNextQuestion && (
                <>
                    <div >
                        <Score user={user} pontos={points} />
                    </div>
                    <ConfigProvider
                        theme={{
                            components: {
                                Divider: {
                                    algorithm: true,
                                    fontSize: 40,
                                    colorText: "#333",
                                },
                                Button: {
                                    algorithm: true,
                                    contentFontSize: 20,
                                    paddingBlock: 30,
                                    textTextColor: "#fff"
                                }
                            },
                        }}
                    >
                        <Divider variant="solid">
                            {questionnow}
                        </Divider>


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

                    </ConfigProvider>

                </>
            )}

            {!showNextQuestion && (
                <>
                    <div className="resultados">
                        <h1 className="tituloResultados">VEJA COMO VOCÊ SE SAIU</h1>
                        <div >
                            <Score user={user} pontos={points} />
                        </div>
                        <div className="odsEstudar">
                            <h2 className="tituloOdsEstudar">Ods a serem aprimoradas:</h2>
                            {
                            currentUser.odsToStudy.map(i=><p className="itemEstudar">{i}</p>)
                            }.
                        </div>

                        <div className="share">
                            <button className="btshare">Compartilhe!</button>
                        </div>

                    </div>

                </>
            )

            }
        </div>
    )
}