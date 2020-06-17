import React from 'react';

import Header from '../header/header';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import PlanetDetails from '../planet-details/planet-details';
import RandomPlanet from '../random-planet/random-planet';
import StarshipSetails from '../starship-details/starship-detail';

import './app.css';

const App = () => {
 return (
     <div>
        <Header />
        <ItemList />
        <PersonDetails />
        <PlanetDetails />
        <RandomPlanet />
        <StarshipSetails />
    </div>
 );
};

export default App;