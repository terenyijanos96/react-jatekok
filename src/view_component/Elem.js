export default function Elem(props){
    function kattintas(){
        console.log("hahó", props.index)
        props.kattintasfv(props.index)
    }

    return(
        <div className="elem" onClick={kattintas}>
            <p>{props.ertek}</p>
        </div>
    )
}