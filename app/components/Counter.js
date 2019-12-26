import * as React from 'react';
import styles from './Counter.css';
import MainContainer from './MainContainer';

type Props = {};

export default class Counter extends React.Component<Props> {
  props: Props;

  constructor() {
    super();
    this.state = { counter: 0 };
  }

  increment() {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  decrement() {
    const { counter } = this.state;
    this.setState({ counter: counter - 1 });
  }

  render() {
    const { counter } = this.state;

    return (
      <MainContainer>
        <div className={`counter ${styles.counter}`} data-tid="counter">
          {counter}
        </div>
        <div className={styles.btnGroup}>
          <button
            className={styles.btn}
            onClick={() => {
              this.increment();
            }}
            data-tclass="btn"
            type="button"
          >
            <i className="fa fa-plus" />
          </button>
          <button
            className={styles.btn}
            onClick={() => {
              this.decrement();
            }}
            data-tclass="btn"
            type="button"
          >
            <i className="fa fa-minus" />
          </button>
        </div>
      </MainContainer>
    );
  }
}
