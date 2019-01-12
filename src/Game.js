import React, { Component } from "react";
import "./App.css";

import {
  Button,
  Pane,
  Text,
  minorScale,
  toaster,
  Heading,
  Pill,
  Badge
} from "evergreen-ui";

import {
  shake,
  reducedFilter,
  sleep,
  tabEmoji,
  createValue,
  createValuePlayer,
  resetValuePlayer
} from "./const";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: undefined,
      height: undefined,
      tabEmojis: [],
      memories: [],
      player: {}
    };
  }

  componentDidMount() {
    let tabEmojis = tabEmoji;
    let player = createValuePlayer();
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
      player,
      tabEmojis
    });
  }

  addMemo = async () => {
    let { memories, tabEmojis, player } = this.state;
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

    player = resetValuePlayer(player);
    player.finishLvl = false;

    this.setState({
      memories,
      tabEmojis,
      player
    });
    player.lvlPlayer++;

    await sleep(1000 + 200 * player.lvlPlayer);
    for (let memo of memories) {
      memo.try = false;
    }

    this.setState({ memories, player });
  };

  popMemo = async () => {
    let { memories, tabEmojis, player } = this.state;
    let cpt = memories.length / 2;

    if (cpt > 0) {
      let data = Object.keys(memories[0]);
      memories = reducedFilter(memories, data, item => item.value !== cpt);

      memories = shake(memories);
      tabEmojis = shake(tabEmojis);

      for (let memo of memories) {
        memo.try = true;
      }

      player = resetValuePlayer(player);
      player.finishLvl = true;

      this.setState({
        memories,
        tabEmojis,
        player
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

    player.nbFaute -= player.faultForThisLvl;
    player = resetValuePlayer(player);
    player.finishLvl = false;

    this.setState({
      memories,
      player
    });

    await sleep(1000 + 200 * player.lvlPlayer);
    for (let memo of memories) {
      memo.try = false;
    }
    this.setState({ memories, player });
  };

  tryCard = index => {
    let { memories, player } = this.state;
    if (player.cptTry > 1 || memories[index].try === true) {
      // Si l'utilisateur appuis trop de fois ... ou appuies une card deja ouverte
      return false;
    }
    if (
      player.saveTry[0] === index ||
      player.findPair.includes(memories[index].value)
    ) {
      return false;
    }

    memories[index].try = true;
    // tourner la card
    player.saveTry.push(index);
    player.cptTry++;

    this.setState({ player });
    if (player.cptTry === 2) {
      if (
        memories[player.saveTry[0]].value === memories[player.saveTry[1]].value
      ) {
        player.nbFind++;
        player.findPair.push(memories[player.saveTry[0]].value);
        if (player.nbFind === memories.length / 2) {
          toaster.success("YOU WIN !!! ", {
            duration: 5
          });
          player.finishLvl = true;
          //  ADD bonus if perfect
          if (player.faultForThisLvl === 0) {
            player.bonusSee++;
          }
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
          player.faultForThisLvl++;
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
        <>
          <Text marginTop={minorScale(3)}>
            Augmente le level pour debuter la partie
          </Text>
          <Button onClick={() => this.recupValue()}>
            Recuperé ma derniere Partie
          </Button>
        </>
      );
    }
  };
  lessOneFault = () => {
    let { player } = this.state;
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
    let { player } = this.state;
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

  isBonus = () => {
    let { player } = this.state;
    if (player.lvlPlayer > 0 && player.bonusSee > 0) {
      return (
        <Badge
          display="inline-flex"
          color="teal"
          margin={8}
          onClick={() => this.tryBonus()}
        >
          Bonus : {player.bonusSee}
        </Badge>
      );
    }
  };

  tryBonus = async () => {
    let { memories, player } = this.state;
    for (let memo of memories) {
      memo.try = true;
    }
    this.setState({ memories });
    await sleep(1000 + 200 * player.lvlPlayer);
    for (let memo of memories) {
      if (player.findPair.includes(memo.value)) {
        memo.try = true;
      } else {
        memo.try = false;
      }
    }
    if (player.saveTry.length > 0) {
      for (let saveTryIndex of player.saveTry) {
        memories[saveTryIndex].try = true;
      }
    }
    player.bonusSee -= 1;
    this.setState({ memories, player });
  };

  saveData = () => {
    let { player, memories } = this.state;
    localStorage.setItem("player", JSON.stringify(player));
    localStorage.setItem("memories", JSON.stringify(memories));
    toaster.success("Tes données sont enregistrées ", {
      duration: 5
    });
  };

  recupValue = () => {
    let { player, memories } = this.state;
    let playerTry = this.recupData();
    if (playerTry === null) {
      toaster.success("Tu n'as pas de derniere partie ", {
        duration: 5
      });
    } else {
      player = playerTry;
      memories = this.recupDataMemo();
    }
    this.setState({ player, memories });
  };

  recupData = () => {
    let { player, memories } = this.state;
    player = JSON.parse(localStorage.getItem("player"));
    return player;
  };

  recupDataMemo = () => {
    let { memories } = this.state;
    memories = JSON.parse(localStorage.getItem("memories"));
    return memories;
  };

  DeleteData = async () => {
    localStorage.clear();
    toaster.notify("Donnée Supprimé ", {
      duration: 2,
      description: "Tu vas être redirigé , Patience !!"
    });
    await sleep(2000);
    window.location.reload();
  };

  render() {
    let { player } = this.state;
    return (
      <>
        <Pane>
          <Pill display="inline-flex" margin={8}>
            lvl : {player.lvlPlayer}
          </Pill>
          {this.isBonus()}
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
          <Button marginRight={minorScale(3)} onClick={() => this.popMemo()}>
            Previous level
          </Button>
          {player.lvlPlayer > 0 && (
            <Button
              onClick={() => this.resetMemo()}
              appearance="primary"
              intent="warning"
            >
              Retry
            </Button>
          )}
        </Pane>
        {this.canvas()}
        {player.lvlPlayer > 0 && (
          <Pane>
            <Button
              appearance="primary"
              onClick={() => this.saveData()}
              disabled={!player.finishLvl}
            >
              Sauvegarder mes Données
            </Button>
            <Button
              appearance="primary"
              intent="danger"
              onClick={() => this.DeleteData()}
              disabled={!player.finishLvl}
            >
              Supprimer mon compte / Reset
            </Button>
          </Pane>
        )}
      </>
    );
  }
}

export default Game;
