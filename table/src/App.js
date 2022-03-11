import React from 'react';
import axios from 'axios';
import './App.scss';

import Preloader from './Preloader/Preloader';
import {TableCustom} from './TableCustom/TableCustom';


class App extends React.Component {

  constructor() {
    super()
      this.state = {
          items: [],
          DataisLoaded: false
      };
  }
 
  componentDidMount() {
    axios.get('https://fakestoreapi.com/users?limit=30')
          .then((res) => {
            const data = res.data;
              this.setState({
                  items: data,
                  DataisLoaded: true
              });
          })
  }
  render() {
      const { DataisLoaded, items } = this.state;
      return (
        <>
          {!DataisLoaded ? <Preloader/>:<TableCustom state={this.state}/>}
        </>
  );
}
}
 
export default App;
