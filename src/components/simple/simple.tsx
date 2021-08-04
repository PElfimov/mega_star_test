import { Component } from "react";
import styles from "./simple.module.css";
import { action, makeObservable, observable } from "mobx";
import { observer } from "mobx-react";

interface Props {}

@observer
export class Simple extends Component<Props, {}> {
  constructor(props: any) {
    super(props);
    makeObservable(this);
  }

  @observable
  private text: "Hello" | "Goodby" = "Hello";
  private count: number = 1;

  @action
  onClick() {
    console.log(`this.text = "Hello"`, this.text === "Hello");

    if (this.text === "Hello") {
      this.text = "Goodby";
    } else {
      this.text = "Hello";
    }

    this.count = this.count + 1;
    this.count = this.count + 1;
  }

  render() {
    return (
      <div className={styles.root}>
        <h1 className={styles.h1}>{this.text}</h1>
        <h2>{this.count}</h2>
        <button
          onClick={() => {
            this.onClick();
          }}
        >
          Click to bottom
        </button>
      </div>
    );
  }
}
