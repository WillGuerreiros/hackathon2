import { Button } from "antd"
import { currentQuestion } from "../../../../../core/CurrentQuestion"
import VerifyAnswer from "../../../../../core/VerifyAnswer"




export default function AnswerSection(props) {
   
    return (
        <div >
            <Button  onClick={()=>{props.answerSelected(props.answer)}}>
                {props.answer}
            </Button>            
        </div>
    )
}
