import React, { Component } from "react";
import "./App.css";

import {
  Button,
  Pane,
  Text,
  Paragraph,
  minorScale,
  toaster
} from "evergreen-ui";

// randomise un tableau
const shake = arr => {
  for (let position = arr.length - 1; position >= 1; position--) {
    let randomIndex = Math.floor(Math.random() * (position + 1));
    [arr[position], arr[randomIndex]] = [arr[randomIndex], arr[position]];
  }
  return arr;
};

// retire les valeur n.x  du tableau
const reducedFilter = (data, keys, fn) =>
  data.filter(fn).map(el =>
    keys.reduce((acc, key) => {
      acc[key] = el[key];
      return acc;
    }, {})
  );

const createId = () => {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memories: [],
      lvl: 0,
      cptTry: 0,
      saveTry: []
    };
  }

  createValue = value => {
    let obj = {
      try: false,
      value
    };
    return obj;
  };

  addMemo = () => {
    let { memories } = this.state;
    let cpt = memories.length / 2 + 1;
    memories.push(this.createValue(cpt));
    memories.push(this.createValue(cpt));
    memories = shake(memories);
    console.log(memories);
    this.setState({ memories });
  };

  popMemo = () => {
    let { memories } = this.state;
    let cpt = memories.length / 2;

    if (cpt > 0) {
      let data = Object.keys(memories[0]);
      memories = reducedFilter(memories, data, item => item.value !== cpt);
      memories = shake(memories);
      this.setState({ memories });
    } else {
      toaster.success("ajoute d'abord un level", {
        duration: 5
      });
    }
  };

  tryCard = index => {
    let { memories, cptTry, saveTry } = this.state;

    memories[index].try = true;
    saveTry.push(index);
    cptTry++;

    if (cptTry == 2) {
      if (memories[saveTry[0]].value == memories[saveTry[1]].value) {
        console.log("dedede");
      } else {
        for (let indexTry of saveTry) {
          memories[indexTry].try = false;
        }
      }
      cptTry = 0;
      saveTry = [];
    }

    memories = this.setState({ memories, saveTry, cptTry });
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
              backgroundColor="white"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              onClick={() => this.tryCard(index)}
            >
              <Text>{memorie.try && memorie.value}</Text>
            </Pane>
          ))}
        </Pane>
      );
    } else {
      return (
        <Paragraph>
          Vous n'avez pas d'inconnue, Je t'invite à ajouter des inconnues
        </Paragraph>
      );
    }
  };

  render() {
    return (
      <>
        <Pane>
          <Button marginRight={minorScale(3)} onClick={() => this.addMemo()}>
            Add level
          </Button>
          <Button onClick={() => this.popMemo()}>Pop level</Button>
        </Pane>
        {this.canvas()}
      </>
    );
  }
}

export default Game;
