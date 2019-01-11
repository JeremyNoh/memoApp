import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Game from "./Game";
import { Icon, CornerDialog, Text } from "evergreen-ui";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false
    };
  }
  componentDidMount() {}

  getInfo = () => {
    this.setState({ isShown: true });
  };

  render() {
    return (
      <div className="Game">
        <p>
          Bienvenue sur MemoApp
          <Icon
            icon="info-sign"
            color="info"
            marginLeft={16}
            onClick={() => this.getInfo()}
          />
        </p>
        <CornerDialog
          title="Comment jouer ? "
          isShown={this.state.isShown}
          onCloseComplete={() => this.setState({ isShown: false })}
        >
          <Text>
            Ceci est un petit jeu de mémoire, le but est d'associer les paires.
          </Text>
          <Text> Un jeu simple de notre enfance.</Text>
          <Text>
            <a
              href="https://github.com/JeremyNoh"
              target="_blank"
              rel="noopener noreferrer"
            >
              (Voir mes autres réalisations)
            </a>
          </Text>
        </CornerDialog>
        <Game />
      </div>
    );
  }
}

export default App;
