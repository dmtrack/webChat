import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Chats from "./layouts/chats";
import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";
import Register from "./layouts/register";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/chats/:chatId?/:edit?" component={Chats} />
                <Route path="/register" component={Register} />
                <Route path="/" exact component={Main} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
