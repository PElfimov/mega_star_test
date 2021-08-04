import React, { useState, useRef } from "react";
import styles from "./function.module.css";

interface Props {
  text: string;
}

export function Function({ text }: Props) {
  const [state, setState] = useState(``);
  const input2 = useRef();

  const onclick = () => {
    console.log(state);
    checkWord(state);
    console.log(`checkBrackets`, checkBrackets(state));
    console.log(withoutRepeat([1, 5, 5, 5, 6, 3, 8, 2, 2, 8, 9, 12, 15]));
  };

  return (
    <div className={styles.root}>
      <input
        type="text"
        placeholder="Управляемый"
        onChange={(event) => {
          setState(event.target.value);
        }}
        value={state}
      />
      {/* <input  type="text" placeholder=" Не управляемый" /> */}
      <button onClick={onclick}> Click</button>
    </div>
  );
}

function checkWord(word: string) {
  word = word.toLowerCase();

  let backWord: string = ``;
  let result: boolean = false;

  for (let i = word.length - 1; i >= 0; i--) {
    backWord = `${backWord}${word[i]}`;
  }

  result = word === backWord;
  console.log(result);
}

function checkBrackets(str: string) {
  const stack: string[] = [];
  const obj = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < str.length; i++) {
    const bracket: string = str[i];
    if (bracket === "(" || bracket === "{" || bracket === "[") {
      stack.push(bracket);
    }

    if (bracket === ")" || bracket === "}" || bracket === "]") {
      const lastEl: any = stack.pop();
      if (bracket !== obj[lastEl]) {
        console.log(`bracket`, bracket);
        console.log(`lastEl`, obj[lastEl]);
        return false;
      }
      if (!lastEl) return false;
    }
  }

  if (stack.length > 0) return false;

  return true;
}

function withoutRepeat(arr: number[]) {
  const resultArr: number[] = [];
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    const currentEl = arr[i];
    if (!(currentEl in obj)) {
      obj[currentEl] = 1;
    } else obj[currentEl] += 1;
  }

  const keys = Object.keys(obj);

  keys.forEach((key) => {
    if (obj[key] === 1) resultArr.push(Number(key));
  });

  return resultArr;
}
