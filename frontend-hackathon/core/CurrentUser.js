import UserClass from "./classes/UserScoreClass.js";


export let currentUser = new UserClass(1, "william nunes guerreiros", "hackathonCPDI")

console.log(currentUser.id, currentUser.username, currentUser.company)

