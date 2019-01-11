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

import { shake, reducedFilter, sleep, tabEmoji, createValue, createValuePlayer, resetValuePlayer } from "./const";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: undefined,
      height: undefined,
      tabEmojis: [],
      memories: [],
      player : {} ,
    };
  }

  componentDidMount() {
    let tabEmojis = tabEmoji;
    let player = createValuePlayer()
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
      player,
      tabEmojis
    });
  }


  addMemo = async () => {
    let { memories, tabEmojis, player} = this.state;
    let cpt = memories.length / 2 + 1;
    memories = [];


    for (let i = 1; i < cpt + 1; i++) {
      memories.push(createValue(i));
      memories.push(createValue(i));
    }
    memories = shake(memories);
    tabEmojis = shake(tabEmojis);
    for (let memo of memories) {
      memo.try = true;
    }

    player = resetValuePlayer(player)
    player.finishLvl = false

    this.setState({
      memories,
      tabEmojis,
      player,
    });
    player.lvlPlayer++;

    await sleep(1000 + 200 * player.lvlPlayer);
    for (let memo of memories) {
      memo.try = false;
    }

    this.setState({ memories, player });
  };

  popMemo = async() => {
    let { memories, tabEmojis, player  } = this.state;
    let cpt = memories.length / 2;

    if (cpt > 0) {
      let data = Object.keys(memories[0]);
      memories = reducedFilter(memories, data, item => item.value !== cpt);

      memories = shake(memories);
      tabEmojis = shake(tabEmojis);


      for (let memo of memories) {
        memo.try = true;
      }

      player = resetValuePlayer(player)
      player.finishLvl = true

      this.setState({
        memories,
        tabEmojis,
        player,
      });

      player.lvlPlayer--;
      await sleep(1000 + 200 * player.lvlPlayer);
      for (let memo of memories) {
        memo.try = false;
      }
      this.setState({ memories, player });

    } else {
      toaster.danger("ajoute d'abord un level", {
        duration: 5
      });
    }
  };

  resetMemo = async () => {
    let { memories, player } = this.state;
      memories = shake(memories);

      for (let memo of memories) {
        memo.try = true;
      }

      player = resetValuePlayer(player)
      player.finishLvl = false

      this.setState({
        memories,
        player
      });

      player.nbFaute -= player.faultForThisLvl
      await sleep(1000 + 200 * player.lvlPlayer);
      for (let memo of memories) {
        memo.try = false;
      }
      this.setState({ memories,player });

  }

  tryCard = index => {
    let {
      memories,
      player
    } = this.state;
    if (player.cptTry > 1 || memories[index].try === true) {
      // Si l'utilisateur appuis trop de fois ... ou appuies une card deja ouverte
      return false;
    }
    if (player.saveTry[0] === index || player.findPair.includes(memories[index].value)) {
      return false;
    }

    memories[index].try = true;
    // tourner la card
    player.saveTry.push(index);
    player.cptTry++;

    this.setState({ player });
    if (player.cptTry === 2) {
      if (memories[player.saveTry[0]].value === memories[player.saveTry[1]].value) {
        player.nbFind++;
        player.findPair.push(memories[player.saveTry[0]].value);
        if (player.nbFind === memories.length / 2) {
          toaster.success("YOU WIN !!! ", {
            duration: 5
          });
          player.finishLvl = true;
        }
        player.cptTry = 0;
        player.saveTry = [];

        this.setState({ player });
      } else {
        this.setState({ memories }, async () => {
          await sleep(1000);
          for (let indexTry of player.saveTry) {
            memories[indexTry].try = false;
            // retourner la card
          }
          player.faultForThisLvl ++
          player.nbFaute++;
          player.cptTry = 0;
          player.saveTry = [];
          this.setState({ memories, player });
        });
      }
    } else {
      this.setState({ memories, player });
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
                border: this.state.player.findPair.includes(memorie.value)
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
    let { player} = this.state;
    if (player.easterEggsFound === 0) {
      player.easterEggsFound++;
      this.setState({ player });
      toaster.notify("Tu as trouvé un Easter Eggs Félicitation !!!", {
        duration: 7,
        description:
          "Il y en a pleins d'autres bien cachés ! mais n'en abuse pas ... "
      });
    }
    player.nbFaute--;
    this.setState({ player });
  };

  isFaute = () => {
    let { player } = this.state
    if (player.nbFaute === 0) {
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
        Faute : {player.nbFaute}
      </Pill>
    );
  };

  render() {
    let { player } = this.state
    return (
      <>
        <Pane>
          <Pill display="inline-flex" margin={8}>
            lvl : {player.lvlPlayer}
          </Pill>
          {player.lvlPlayer > 0 && this.isFaute()}
        </Pane>
        <Pane>
          <Button
            appearance={player.finishLvl ? "primary" : "default"}
            intent={player.finishLvl ? "success" : "none"}
            marginRight={minorScale(3)}
            onClick={() => this.addMemo()}
            disabled={!player.finishLvl}
          >
            Next level
          </Button>
          <Button marginRight={minorScale(3)} onClick={() => this.popMemo()}>Previous level</Button>
          {player.lvlPlayer > 0 && <Button onClick={() => this.resetMemo()}   appearance="primary" intent="danger">Reset</Button>}
        </Pane>
        {this.canvas()}
      </>
    );
  }
}

export default Game;
