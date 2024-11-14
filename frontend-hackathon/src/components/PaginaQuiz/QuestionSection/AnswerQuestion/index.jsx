import { Button } from "antd";

export default function AnswerSection(props) {
   
    return (
        <div>
            <Button type="primary" onClick={()=>{props.answerSelected(props.answer)}}>
                {props.answer}
            </Button>            
        </div>
    )
}
