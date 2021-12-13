import party from '../assets/party.png';
import sad from '../assets/sad.png';

export default function GameOver(props) {
    if(props.sucess === true){
        return(
            <div className="body">
                <div className="box">
                    <h1 className="title">PARABÉNS!<img src={party} className="emoji" alt="emoji_party"/></h1>
                    <p className="message">Você não esqueceu de nenhum flashcard!</p>
                </div>
            </div>
        );
    
    }else{
        return(
            <div className="body">
                <div className="box">
                    <h1 className="title">Putz..<img src={sad} className="emoji" alt="emoji_sad"/></h1>
                    <p className="message">Você esqueceu alguns flashcards..{'\n'}Não desanime! Na próxima você consegue!</p>
                </div>
            </div>
        );
    }
}