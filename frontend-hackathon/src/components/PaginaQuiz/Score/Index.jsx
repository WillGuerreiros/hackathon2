import { Card, Avatar, Divider } from "antd";
import { currentUser } from "../../../../core/CurrentUser";

export default function Score(props) {
    
    let user = props.user
    let empresa = currentUser.company
    let pontos = props.pontos

    return (
        <div>

        <Card title="Player:">
            <Card.Meta
                avatar={<Avatar size={64} src={currentUser.avatar} />}
                title={user}
                description={<p>{empresa}</p>}
            />

            <Divider>
                <h1>PONTOS:{pontos}</h1>
            </Divider>
        </Card>
        </div>
    )
            
}