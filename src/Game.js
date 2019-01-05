import React, { Component } from "react";
import "./App.css";

import { Button, Pane, Text, Paragraph, minorScale } from "evergreen-ui";

// retire les valeur n.x  du tableau
const pullBy = (arr, ...args) => {
  const length = args.length;
  let fn = length > 1 ? args[length - 1] : undefined;
  fn = typeof fn == "function" ? (args.pop(), fn) : undefined;
  let argState = (Array.isArray(args[0]) ? args[0] : args).map(val => fn(val));
  let pulled = arr.filter((v, i) => !argState.includes(fn(v)));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
};
// var myArray = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];
// example pullBy(myArray, [{ x: 1 }, { x: 3 }], o => o.x); // myArray = [{ x: 2 }]

// retire les valeur n  du tableau
const pullAtValue = (arr, pullArr) => {
  let removed = [],
    pushToRemove = arr.forEach((v, i) =>
      pullArr.includes(v) ? removed.push(v) : v
    ),
    mutateTo = arr.filter((v, i) => !pullArr.includes(v));
  arr.length = 0;
  mutateTo.forEach(v => arr.push(v));
  return removed;
};

// randomise un tableau
const shake = arr => {
  for (let position = arr.length - 1; position >= 1; position--) {
    let randomIndex = Math.floor(Math.random() * (position + 1));
    [arr[position], arr[randomIndex]] = [arr[randomIndex], arr[position]];
  }
  return arr;
};

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "toto",
      memories: []
    };
  }

  addMemo = () => {
    let { memories } = this.state;
    let cpt = memories.length + 1;
    if (memories.includes(cpt)) {
      cpt++;
    }
    memories.push(cpt);
    memories.push(cpt);
    memories = shake(memories);
    this.setState({ memories });
  };

  popMemo = () => {
    let { memories } = this.state;
    let pulled = pullAtValue(memories, [memories[0]]);
    memories = shake(memories);
    this.setState({ memories });
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
              <Text>{memorie}</Text>
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
        <div>Content </div>
        <Pane>
          <Button marginRight={minorScale(3)} onClick={() => this.addMemo()}>
            Add{" "}
          </Button>
          <Button onClick={() => this.popMemo()}>Pop</Button>
        </Pane>
        {this.canvas()}
      </>
    );
  }
}

export default Game;
