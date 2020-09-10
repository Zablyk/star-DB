import React, { Component } from 'react';

import './item-list.css';
import SwapiServices from '../../services/swapi-service';
import Spinner from '../spinner';

export default class ItemList extends Component {

  swapiService = new SwapiServices();

  state = {
    peopleList: null
  };

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then((peopleList) => {
        this.setState({
          peopleList
        });
      });
  };

  render() {

    const { peopleList } = this.state;

    if(!peopleList) {
      return <Spinner/>;
    }

    return (
      <ul className="item-list list-group">
        <li className="list-group-item">
          Luke Skywalker
        </li>
        <li className="list-group-item">
          Darth Vader
        </li>
        <li className="list-group-item">
          R2-D2
        </li>
      </ul>
    );
  }
}
