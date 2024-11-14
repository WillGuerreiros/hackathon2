import { currentUser } from "./CurrentUser";



export default function updateTurn(){
    let mensagem = null
    const turno = currentUser.currentTurn

    if (turno > 4){
        mensagem = "Acabou os turnos"
        currentUser.setTurn = 1
    }else{
        mensagem = "ainda faltam " + (-turno+5) + " turnos"
        currentUser.setTurn = 1
    }

    return mensagem? alert(mensagem) : alert("SEM MENSAGEM")
}