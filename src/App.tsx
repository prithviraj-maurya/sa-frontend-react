import React from 'react';
import './App.css';
import Filters from './features/Filters';
import Grid from './features/Grid';
import Header from './features/Header';

import data from './warehouse.json';

class App extends React.Component {
  state: any;
  constructor(props: any) {
    super(props);
    let cities: any[] = [];
    data.map(ele => {
      if(!cities.find(city => city === ele.city)) {
        cities.push(ele.city);
      }
    });
    this.state = { searchTerm: '', orgData: data, cities: cities };
  }
  search = (term: string, property: string) => {
    this.setState({ searchTerm: term });
    if (term === '') {
      this.setState({ orgData: data });
    }
    else {
      let newData = data.filter((el: any) => el[property].toLowerCase().includes(term));
      this.setState({ orgData: newData });
    }
  };

  onSelected = (element: string) => {
    let newData = data.filter((el: any) => el.city === element);
    this.setState({ orgData: newData });
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="flex-container">
          <Filters search={this.search} cities={this.state.cities}
            onSelected={this.onSelected}></Filters>
          <Grid data={this.state.orgData}></Grid>
        </div>
      </div>
    );
  }
}

export default App;
