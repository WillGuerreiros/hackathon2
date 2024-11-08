
class UserClass {

    constructor(id, username, company) {
        this.id = id
        this.username = username
        this.company = company
        this.score = 0
    }

    set addScore(pontos) {
        this.score = this.score + pontos
    }


}
export default UserClass