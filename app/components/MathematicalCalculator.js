import * as React from 'react';
import ReactTooltip from 'react-tooltip';
import MainContainer from './MainContainer';
import styles from './MathematicalCalculator.css';

type Props = {};

export default class MathematicalCalculator extends React.Component<Props> {
  constructor() {
    super();
    this.state = { result: 0, userstdin: '' };
  }

  execute() {
    const { userstdin } = this.state;
    // eslint-disable-next-line no-eval
    const result = eval(userstdin);
    this.setState({ result });
  }

  clear() {
    this.setState({ userstdin: '', result: 0 });
  }

  appendFunc(methodName) {
    const method = `${methodName}`;
    const { userstdin } = this.state;
    this.setState({ userstdin: userstdin + method });
  }

  setUserStdin = e => {
    this.setState({ userstdin: e.target.value });
  };

  stdinKeyHandler = e => {
    if (e.key === 'Enter') {
      this.execute();
    }
  };

  render() {
    const { result, userstdin } = this.state;
    return (
      <MainContainer>
        <textarea
          id="stdin"
          name="stdin"
          value={userstdin}
          onChange={this.setUserStdin}
          className={styles.stdin}
          onKeyPress={this.stdinKeyHandler}
        />
        <div className={styles.results}>{result && <span>{result}</span>}</div>
        <div>
          <button
            type="button"
            onClick={() => {
              this.clear();
            }}
          >
            清空
          </button>
          <button
            type="button"
            onClick={() => {
              this.execute();
            }}
          >
            运算
          </button>
        </div>
        <div>
          <button
            data-tip="指数函数: x<sup>y</sup>。x的y次方转写为函数: Math.pow(x,y)"
            type="button"
            onClick={() => {
              this.appendFunc('Math.pow(x,y)');
            }}
          >
            x<sup>y</sup>
          </button>
          <button
            data-tip="求X平方根: √x。x平方根方转写为函数: Math.sqrt(x)"
            type="button"
            onClick={() => {
              this.appendFunc('Math.sqrt(x)');
            }}
          >
            √x
          </button>
          <ReactTooltip
            html={!!true}
            place="right"
            type="dark"
            effect="float"
          />
        </div>
      </MainContainer>
    );
  }
}
