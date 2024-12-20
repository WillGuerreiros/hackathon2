
class UserClass {

    constructor(id, username, company) {
        this.id = id
        this.username = username
        this.company = company
        this.score = 0
        this.currentTurn = 0
        this.odsToStudy = []
        this.avatar = "https://api.dicebear.com/7.x/miniavs/svg?seed=44"
    }

    set avatarSet(num){
        this.avatar = "https://api.dicebear.com/7.x/miniavs/svg?seed="+num
    }
    
    set usernameSet(username){
        this.username = username
    }

    set usercompanySet(company){
        this.company = company
    }


    set addScore(pontos) {
        this.score = this.score + pontos;
    }

    set addOds(odsToStudy){

        this.odsToStudy.push(odsToStudy)

        this.odsToStudy = this.odsToStudy.reduce((unique, item) => {
            if (unique.indexOf(item) === -1) {
              unique.push(item);
            }
            return unique;
          }, []);
          


        console.log(this.odsToStudy)

    }

    set setTurn(numberOfTurns) {
        console.log("turno anterior",this.currentTurn)
        this.currentTurn +=numberOfTurns
        console.log("turno atual", this.currentTurn)
    }
}

export default UserClass