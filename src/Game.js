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

import { shake, reducedFilter, sleep } from "./const";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memories: [],
      lvlPlayer: 0,
      cptTry: 0,
      saveTry: [],
      nbFind: 0,
      finishLvl: true
    };
  }

  createValue = value => {
    let obj = {
      try: false,
      value
    };
    return obj;
  };

  addMemo = async () => {
    let { memories, lvlPlayer } = this.state;
    let cpt = memories.length / 2 + 1;
    memories = [];
    lvlPlayer++;

    for (let i = 1; i < cpt + 1; i++) {
      memories.push(this.createValue(i));
      memories.push(this.createValue(i));
    }
    memories = shake(memories);
    console.log(memories);

    for (let memo of memories) {
      memo.try = true;
    }

    this.setState({
      memories,
      cptTry: 0,
      saveTry: [],
      nbFind: 0,
      finishLvl: false
    });

    await sleep(1000);
    for (let memo of memories) {
      memo.try = false;
    }

    this.setState({ memories, lvlPlayer });
  };

  popMemo = () => {
    let { memories } = this.state;
    let cpt = memories.length / 2;

    if (cpt > 0) {
      let data = Object.keys(memories[0]);
      memories = reducedFilter(memories, data, item => item.value !== cpt);

      for (let memo of memories) {
        memo.try = false;
      }
      memories = shake(memories);
      console.log(memories);

      this.setState({
        memories,
        cptTry: 0,
        saveTry: [],
        nbFind: 0,
        finishLvl: false
      });
    } else {
      toaster.danger("ajoute d'abord un level", {
        duration: 5
      });
    }
  };

  tryCard = index => {
    let { memories, cptTry, saveTry, nbFind, finishLvl } = this.state;

    if (cptTry > 1) {
      // Si l'utilisateur appuis trop de fois ...
      return false;
    }
    if (saveTry[0] === index) {
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
        if (nbFind === memories.length / 2) {
          toaster.success("YOU WIN !!! ", {
            duration: 5
          });
          finishLvl = true;
        }
        cptTry = 0;
        saveTry = [];

        this.setState({ saveTry, cptTry, nbFind, finishLvl });
      } else {
        this.setState({ memories }, async () => {
          await sleep(1000);
          for (let indexTry of saveTry) {
            memories[indexTry].try = false;
            // retourner la card
          }
          cptTry = 0;
          saveTry = [];
          this.setState({ memories, saveTry, cptTry });
        });
      }
    } else {
      this.setState({ memories, saveTry, cptTry });
    }
  };

  canvas = () => {
    let { memories } = this.state;
    if (memories.length > 0) {
      return (
        <Pane clearfix>
          {memories.map((memorie, index) => (
            <Pane
              key={index}
              elevation={1}
              float="left"
              width={200}
              height={120}
              margin={24}
              display="flex"
              backgroundColor={memorie.try ? "black" : "white"}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              onClick={() => this.tryCard(index)}
              disabled={true}
            >
              <Heading color="white">{memorie.try && memorie.value}</Heading>
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

  render() {
    return (
      <>
        <Pill display="inline-flex" margin={8}>
          lvl : {this.state.lvlPlayer}
        </Pill>
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
