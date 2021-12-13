import icon_next from '../assets/next.png';

export default function TryAgain(props) {
    return(
        <button className="button" onClick={() => {props.setScreen("home"); props.setQuestion(0); props.setSucess(true)}}>
            Tentar novamente
            <img className="icon_next" src={icon_next} alt="icon next"/>
        </button>
    );
}