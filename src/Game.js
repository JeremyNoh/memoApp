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

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memories: [],
      lvl: 0
    };
  }

  createValue = value => {
    let obj = {
      find: false,
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

  resize = () => {};

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
            >
              <Text>{memorie.value}</Text>
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
