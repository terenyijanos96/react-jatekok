import { useState } from "react";
import TicTacToeModel from "../model/TicTacToeModel";
import Elem from "../view_component/Elem";
import "./tictactoe.css";

const tictactoeModel = new TicTacToeModel();
export default function TicTacToe(props) {
  //const list = tictactoeModel.getList();

  const [list, setList] = useState([...tictactoeModel.getList()]);

  const [aktJatekos, setAktJatekos] = useState(tictactoeModel.getAktJatekos());

  function kattintasSzulo(id) {
    console.log(id);
    tictactoeModel.setAllapot(id);
    setList(tictactoeModel.getList());
    setAktJatekos(tictactoeModel.getAktJatekos());
  }

  const [szam, setSzam] = useState(0);

  function novel(){
    setSzam(szam+1)
  }

  return (
    <div className="jatek">
      <div className="pelda">
        <p>State használata példa...</p>
        <button onClick={novel}>növel</button>
        <p>{szam}</p>
      </div>

      <h2>Tic-Tac-Toe</h2>
      <div className="jatekter">
        {list.map((elem, index) => {
          return (
            <Elem
              kattintasfv={kattintasSzulo}
              ertek={elem}
              key={index}
              index={index}
            />
          );
        })}
      </div>
      <p>A következő játékos: {aktJatekos}</p>
    </div>
  );
}
