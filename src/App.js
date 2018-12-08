import React, { Component } from 'react';
import './App.css';
import MyMap from './components/Map';
import 'materialize-css/dist/css/materialize.min.css';
class App extends Component {


 constructor(){
  super();
  this.state= {
    markers: []
  }
}

 componentDidMount(){

        fetch('http://geolocation-diegomr.c9users.io/api/geolocalizar/')
          .then((response) => {
            return response.json()
            
          })
          .then(loc=>{
            this.setState({ markers: loc });
          });
        
    }

  render() {
    const {markers}=this.state;

    return(

   
        <div className="App">
          <div className="card">
            <div className="card-content">
            <MyMap ref="map" markers={markers}/>
            </div>
          </div>
        </div>

    );
  }

}

export default App;
