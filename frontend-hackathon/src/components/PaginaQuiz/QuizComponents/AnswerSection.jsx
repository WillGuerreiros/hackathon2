import { Button } from "antd"




export default function AnswerSection(props) {
    
    return (
        <div className="self-center">
            <Button onClick={()=>{props.answerSelected(props.resposta)}}>
                {props.resposta}
            </Button>
            
        </div>
    )
}
