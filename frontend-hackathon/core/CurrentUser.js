import UserClass from "./classes/UserScoreClass.js";





export function verificaUser(){
    const usuarioAtivo = JSON.parse(localStorage.getItem("usuarioAtivo"));
    if (usuarioAtivo){
        let novoUser = new UserClass(1, usuarioAtivo.primeiroNome, usuarioAtivo.nomeEmpresa)
        return novoUser
    }else{
        let novoUser = new UserClass(1, "test", "testeempresa")
        return novoUser
    }
}



export let currentUser = verificaUser()

