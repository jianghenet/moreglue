// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import MainContainer from './MainContainer';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <MainContainer data-tid="container">
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
      </MainContainer>
    );
  }
}
