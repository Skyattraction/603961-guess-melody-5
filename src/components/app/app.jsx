import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import AuthScreen from "../auth-screen/auth-screen";
import GameOverScreen from "../game-over-screen/game-over-screen";
import WinScreen from "../win-screen/win-screen";
import GameScreen from "../game-screen/game-screen";
import {MAX_MISTAKES_COUNT} from "../../const";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <WelcomeScreen
              errorsCount={MAX_MISTAKES_COUNT}
              onPlayButtonClick={() => history.push(`/game`)}
            />
          )}
        />
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact
          path="/result"
          render={({history}) => (
            <WinScreen
              onReplayButtonClick={() => history.push(`/game`)}
            />
          )}
        />
        <Route exact
          path="/lose"
          render={({history}) => (
            <GameOverScreen
              onReplayButtonClick={() => history.push(`/game`)}
            />
          )}
        />
        <Route exact path="/game">
          <GameScreen
            errorsCount={MAX_MISTAKES_COUNT}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};


App.propTypes = {};

export default App;
