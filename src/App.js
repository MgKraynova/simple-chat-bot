import "./App.css";
import ChatBot from "react-simple-chatbot";
import {ThemeProvider} from "styled-components";
import Avatar from "./avatar.png";
import CatAvatar from "./cat.png";
import {STEPS, THEME} from "./App.const";

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={THEME}>
                <ChatBot
                    style={{
                        width: "80%",
                        height: "100%",
                        margin: " auto"
                    }}
                    botAvatar={Avatar}
                    userAvatar={CatAvatar}
                    headerTitle="Помощь с покупкой квартиры"
                    steps={STEPS}
                />
            </ThemeProvider>
        </div>
    );
}

export default App;
