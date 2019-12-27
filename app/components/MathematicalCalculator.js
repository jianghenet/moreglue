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
    if (userstdin) {
      // eslint-disable-next-line no-eval
      const result = eval(userstdin);
      this.setState({ result });
    }
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
          <button
            data-tip="E 返回算术常量 e，即自然对数的底数（约等于2.718）。"
            type="button"
            onClick={() => {
              this.appendFunc('Math.E');
            }}
          >
            E
          </button>
          <button
            data-tip="LN2 返回 2 的自然对数（约等于0.693）。"
            type="button"
            onClick={() => {
              this.appendFunc('Math.LN2');
            }}
          >
            LN2
          </button>
          <button
            data-tip="LN10 返回 10 的自然对数（约等于2.302）。"
            type="button"
            onClick={() => {
              this.appendFunc('Math.LN10');
            }}
          >
            LN10
          </button>
          <button
            data-tip="LOG2E	返回以 2 为底的 e 的对数（约等于 1.414）。"
            type="button"
            onClick={() => {
              this.appendFunc('Math.LOG2E');
            }}
          >
            LOG2E
          </button>
          <button
            data-tip="LOG10E 返回以 10 为底的 e 的对数（约等于0.434）。"
            type="button"
            onClick={() => {
              this.appendFunc('Math.LOG10E');
            }}
          >
            LOG10E
          </button>
          <button
            data-tip="PI 返回圆周率（约等于3.14159）。"
            type="button"
            onClick={() => {
              this.appendFunc('Math.PI');
            }}
          >
            PI
          </button>
          <button
            data-tip="SQRT1_2 返回返回 2 的平方根的倒数（约等于 0.707）。"
            type="button"
            onClick={() => {
              this.appendFunc('Math.SQRT1_2');
            }}
          >
            SQRT1_2
          </button>
          <button
            data-tip="SQRT2 返回 2 的平方根（约等于 1.414）。"
            type="button"
            onClick={() => {
              this.appendFunc('Math.SQRT2');
            }}
          >
            SQRT2
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
