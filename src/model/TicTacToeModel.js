export default class TicTacToeModel {
  #list = [];
  #aktJatekos = "X"
  constructor() {
    this.#list = ["X", "", "O", "O", "X", "", "X", "", ""];
  }

  getList() {
    return [...this.#list];
  }

  setAllapot(id) {
    this.#list[id] = this.#aktJatekos
    if(this.#aktJatekos === "X"){
      this.#aktJatekos = "O"
    } else {
      this.#aktJatekos = "X"
    }

    console.log(this.#aktJatekos)
  }

  getAktJatekos(){
    return this.#aktJatekos
  }

}
