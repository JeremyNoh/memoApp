import React, { Component } from "react";
import "./App.css";

import {
  Button,
  Pane,
  Text,
  minorScale,
  toaster,
  Heading,
  Pill
} from "evergreen-ui";

import { shake, reducedFilter, sleep, tabEmoji } from "./const";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: undefined,
      height: undefined,
      memories: [],
      lvlPlayer: 0,
      cptTry: 0,
      saveTry: [],
      findPair: [],
      nbFind: 0,
      finishLvl: true,
      nbFaute: 0,
      easterEggsFound: 0,
      tabEmojis: []
    };
  }

  componentDidMount() {
    let tabEmojis = tabEmoji;
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
      tabEmojis
    });
  }

  createValue = value => {
    let obj = {
      try: false,
      value
    };
    return obj;
  };

  addMemo = async () => {
    let { memories, lvlPlayer, tabEmojis } = this.state;
    let cpt = memories.length / 2 + 1;
    memories = [];
    lvlPlayer++;

    for (let i = 1; i < cpt + 1; i++) {
      memories.push(this.createValue(i));
      memories.push(this.createValue(i));
    }
    memories = shake(memories);
    tabEmojis = shake(tabEmojis);
    for (let memo of memories) {
      memo.try = true;
    }

    this.setState({
      memories,
      cptTry: 0,
      saveTry: [],
      nbFind: 0,
      finishLvl: false,
      findPair: [],
      tabEmojis
    });
    await sleep(1000 + 200 * lvlPlayer);
    for (let memo of memories) {
      memo.try = false;
    }

    this.setState({ memories, lvlPlayer });
  };

  popMemo = () => {
    let { memories, lvlPlayer, tabEmojis } = this.state;
    let cpt = memories.length / 2;

    if (cpt > 0) {
      let data = Object.keys(memories[0]);
      memories = reducedFilter(memories, data, item => item.value !== cpt);

      for (let memo of memories) {
        memo.try = false;
      }
      memories = shake(memories);
      tabEmojis = shake(tabEmojis);
      lvlPlayer--;

      this.setState({
        memories,
        tabEmojis,
        cptTry: 0,
        saveTry: [],
        nbFind: 0,
        finishLvl: true,
        findPair: [],
        lvlPlayer
      });
    } else {
      toaster.danger("ajoute d'abord un level", {
        duration: 5
      });
    }
  };

  tryCard = index => {
    let {
      memories,
      cptTry,
      saveTry,
      nbFind,
      finishLvl,
      findPair,
      nbFaute
    } = this.state;
    if (cptTry > 1 || memories[index].try === true) {
      // Si l'utilisateur appuis trop de fois ... ou appuies une card deja ouverte
      return false;
    }
    if (saveTry[0] === index || findPair.includes(memories[index].value)) {
      return false;
    }

    memories[index].try = true;
    // tourner la card
    saveTry.push(index);
    cptTry++;

    this.setState({ saveTry, cptTry });
    if (cptTry === 2) {
      if (memories[saveTry[0]].value === memories[saveTry[1]].value) {
        nbFind++;
        findPair.push(memories[saveTry[0]].value);
        if (nbFind === memories.length / 2) {
          toaster.success("YOU WIN !!! ", {
            duration: 5
          });
          finishLvl = true;
        }
        cptTry = 0;
        saveTry = [];

        this.setState({ saveTry, cptTry, nbFind, finishLvl, findPair });
      } else {
        this.setState({ memories }, async () => {
          await sleep(1000);
          for (let indexTry of saveTry) {
            memories[indexTry].try = false;
            // retourner la card
          }
          nbFaute++;
          cptTry = 0;
          saveTry = [];
          this.setState({ memories, saveTry, cptTry, nbFaute });
        });
      }
    } else {
      this.setState({ memories, saveTry, cptTry });
    }
  };

  canvas = () => {
    let { memories, tabEmojis } = this.state;
    if (memories.length > 0) {
      return (
        <Pane>
          {memories.map((memorie, index) => (
            <Pane
              key={index}
              elevation={1}
              float="left"
              width={this.state.width >= 600 ? 200 : 100}
              height={this.state.width >= 600 ? 120 : 60}
              margin={this.state.width >= 600 ? 24 : 12}
              display="flex"
              backgroundColor={memorie.try ? "black" : "white"}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              onClick={() => this.tryCard(index)}
              disabled={true}
              style={{
                border: this.state.findPair.includes(memorie.value)
                  ? "1px solid green"
                  : ""
              }}
            >
              <Heading color="white" size={800}>
                {memorie.try && tabEmojis[memorie.value]}
              </Heading>
            </Pane>
          ))}
        </Pane>
      );
    } else {
      return (
        <Text marginTop={minorScale(3)}>
          Augmente le level pour debuter la partie
        </Text>
      );
    }
  };
  lessOneFault = () => {
    let { nbFaute, easterEggsFound } = this.state;
    if (easterEggsFound === 0) {
      easterEggsFound++;
      this.setState({ easterEggsFound });
      toaster.notify("Tu as trouvé un Easter Eggs Félicitation !!!", {
        duration: 7,
        description:
          "Il y en a pleins d'autres bien cachés ! mais n'en abuse pas ... "
      });
    }
    nbFaute--;
    this.setState({ nbFaute });
  };

  isFaute = () => {
    if (this.state.nbFaute === 0) {
      return (
        <Pill display="inline-flex" color="green" margin={8}>
          Perfect
        </Pill>
      );
    }
    return (
      <Pill
        display="inline-flex"
        color="red"
        margin={8}
        onDoubleClick={() => this.lessOneFault()}
      >
        Faute : {this.state.nbFaute}
      </Pill>
    );
  };

  render() {
    return (
      <>
        <Pane>
          <Pill display="inline-flex" margin={8}>
            lvl : {this.state.lvlPlayer}
          </Pill>
          {this.state.lvlPlayer > 0 && this.isFaute()}
        </Pane>
        <Pane>
          <Button
            appearance={this.state.finishLvl ? "primary" : "default"}
            intent={this.state.finishLvl ? "success" : "none"}
            marginRight={minorScale(3)}
            onClick={() => this.addMemo()}
            disabled={!this.state.finishLvl}
          >
            Next level
          </Button>
          <Button onClick={() => this.popMemo()}>Previous level</Button>
        </Pane>
        {this.canvas()}
      </>
    );
  }
}

export default Game;
