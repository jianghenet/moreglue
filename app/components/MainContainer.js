// @flow
import * as React from 'react';
import styles from './MainContainer.css';

type Props = {
  children: React.Node
};

export default class MainContainer extends React.Component<Props> {
  props: Props;

  render() {
    const { children } = this.props;
    return <div className={styles.mainContainer}>{children}</div>;
  }
}
