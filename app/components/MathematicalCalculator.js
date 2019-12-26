import React, { useState } from 'react';
import MainContainer from './MainContainer';

export default function() {
  const [result, setResult] = useState(0);
  function execute() {
    setResult(2);
  }
  return (
    <MainContainer>
      <textarea id="stdin" name="stdin" />
      <div id="cmd-buttons">
        <button type="button">清空</button>
        <button type="button" onClick={execute}>
          运算
        </button>
      </div>
      <div>{result && <span>result</span>}</div>
      <div id="functions">
        <button type="button" name="Math.pow" title="指数函数: Math.pow(x,y)">
          x<sup>y</sup>
        </button>
        <button type="button" name="Math.sqrt" title="求X平方根: Math.sqrt(x)">
          √x
        </button>
      </div>
    </MainContainer>
  );
}
