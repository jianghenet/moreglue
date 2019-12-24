// @flow
import React, { Component } from 'react';

type Props = {};

export default class MathematicalCalculator extends Component<Props> {
  props: Props;

  render() {
    return (
      <div id="calculator">
        <textarea id="stdin" name="stdin" value="" />
        <div id="cmd-buttons">
          <button type="button">清空</button>
          <button type="button">运算</button>
        </div>
        <div id="results" />
        <div id="functions">
          <button type="button" name="Math.pow" title="指数函数: Math.pow(x,y)">
            x<sup>y</sup>
          </button>
          <button
            type="button"
            name="Math.sqrt"
            title="求X平方根: Math.sqrt(x)"
          >
            √x
          </button>
        </div>
      </div>
    );
  }
}
