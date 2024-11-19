import { currentUser } from "./CurrentUser";


export default function updateTurn(){
    const turno = currentUser.currentTurn
    let visible = false
    if (turno > 4){
        currentUser.setTurn = 1
        visible = false
    }else{
        currentUser.setTurn = 1
        visible = true
    }

    return visible
}