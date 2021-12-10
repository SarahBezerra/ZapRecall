export default function Home(props) {
    return(
        <>
        <img  className="image_logo" src="./assets/logo.png" alt="logo zaprecall"/>
        <button className="button_start" onClick={() => props.setScreen("flashcard")}>
            Praticar React
            <img className="icon_next" src="./assets/next.png" alt="icon next"/>
        </button>
        </>
    );
}