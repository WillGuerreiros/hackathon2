import { Card, Avatar, Divider } from "antd";
import { currentUser } from "../../../../core/CurrentUser";

export default function Score(props) {
    let user = currentUser.username
    let empresa = currentUser.company
    let pontos = props.pontos

    return (
        <div>

        <Card title="Player:">
            <Card.Meta
                avatar={<Avatar size={64} src="https://api.dicebear.com/7.x/miniavs/svg?seed=45" />}
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