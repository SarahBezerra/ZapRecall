import party from '../assets/party.png';
import sad from '../assets/sad.png';

export default function GameOver(props) {
    if(props.sucess === true){
        return(
            <>
            <h1>PARABÉNS!</h1>
            <img src={party} alt="emoji_party"/>
            <p>Você não esqueceu de nenhum flashcard!</p>
            </>
        );
    
    }else{
        return(
            <>
            <h1>Putz..</h1>
            <img src={sad} alt="emoji_sad"/>
            <p>Você esqueceu alguns flashcards..{'\n'}Não desanime! Na próxima você consegue!</p>
            </>
        );
    }
}