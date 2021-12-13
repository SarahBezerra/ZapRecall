import { useState } from "react";
import Home from './components/Home';
import Header from './components/Header';
import Card from "./components/Card";
import GameOver from "./components/GameOver";
import TryAgain from "./components/TryAgain";

export default function App() {

    const [screen, setScreen] = useState("home");
    const [question, setQuestion] = useState(0);
    const [sucess, setSucess] = useState(true);

    console.log(screen)
    console.log(question)
    console.log(sucess)

    if(screen === "home") {
        return(
            <Home setScreen={setScreen}/>
        );

    }else if(screen === "flashcard"){
        return(
            <>
            <Header />
            <Card setScreen={setScreen} setSucess={setSucess} sucess={sucess} setQuestion={setQuestion} question={question}/>
            </>
        );
    
    }else if(screen === "game_over"){
        return(
            <>
            <Header />
            <GameOver sucess={sucess}/>
            <TryAgain setScreen={setScreen} setSucess={setSucess} setQuestion={setQuestion}/>
            </>
        );
    }
}