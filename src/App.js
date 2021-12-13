import { useState } from "react";
import Home from './components/Home';
import Header from './components/Header';
import Card from "./components/Card";
import GameOver from "./components/GameOver";

export default function App() {

    const [screen, setScreen] = useState("home");
    const [sucess, setSucess] = useState(true);

    if(screen === "home") {
        return(
            <Home setScreen={setScreen}/>
        );

    }else if(screen === "flashcard"){
        return(
            <>
            <Header />
            <Card setScreen={setScreen} setSucess={setSucess} sucess={sucess}/>
            </>
        );
    
    }else if(screen === "game_over"){
        return(
            <>
            <Header />
            <GameOver sucess={sucess}/>
            </>
        );
    }
}