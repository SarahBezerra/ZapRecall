import { useState } from "react";
import Home from './components/Home';
import Header from './components/Header';
import Card from "./components/Card";

export default function App() {

    const [screen, setScreen] = useState("home");

    if(screen === "home") {
        return(
            <Home setScreen={setScreen}/>
        );

    }else if(screen === "flashcard"){
        return(
            <>
            <Header />
            <Card />
            </>
        );
    }
}