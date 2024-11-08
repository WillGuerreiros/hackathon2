import { Button } from "antd"




export default function AnswerSection(props) {
    
    return (
        <div>
            <Button onClick={()=>{props.answerSelected(props.resposta)}}>
                {props.resposta}
            </Button>
        </div>
    )
}
