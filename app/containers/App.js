// @flow
import * as React from 'react';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    const { children } = this.props;
    const RootEmpty = React.Fragment;

    return (
      <RootEmpty>
        <nav id="aside">
          <ul>
            <li>
              <a href="#/home">首页</a>
            </li>
            <li>
              <a href="#/counter">计数游戏</a>
            </li>
            <li>
              <a href="#/math">数学计算器</a>
            </li>
          </ul>
        </nav>
        {children}
      </RootEmpty>
    );
  }
}
