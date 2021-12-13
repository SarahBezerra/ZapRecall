import { useState } from "react";
import FlashcardFront from "./FlashcardFront";
import FlashcardBack from "./FlashcardBack";

export default function Card(props) {

    const [side, setSide] = useState("front");

    const cards = [ 
        {level:1, question:"O que é JSX?", answer:"Uma extensão de linguagem do JavaScript"},
        {level:2, question:"O React é __", answer:"Uma biblioteca JavaScript para construção de interfaces"},
        {level:3, question:"Componentes devem iniciar com __", answer:"Letra maiúscula"},
        {level:4, question:"Podemos colocar __ dentro do JSX", answer:"Expressões"},
        {level:5, question:"O ReactDOM nos ajuda __", answer:"Interagindo com a DOM para colocar componentes React na mesma"},
        {level:6, question:"Usamos o npm para __", answer:"Gerenciar os pacotes necessários e suas dependências"},
        {level:7, question:"Usamos props para __", answer:"Passar diferentes informações para componentes"},
        {level:8, question:"Usamos estado (state) para __", answer:"Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
    ]

    if(side === "front"){
        return(
            <FlashcardFront setSide={setSide} side={side} cards={cards}/>
        );
        
    }else if(side === "behind"){
        return(
            <FlashcardBack setSide={setSide} cards={cards}/>
        );
    }

    //const [level, setLevel] = useState(cards[0].level);
    //const [question, setQuestion] = useState(cards[0].question);
    //const [answer, setAnswer] = useState(cards[0].answer);
}