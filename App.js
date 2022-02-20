import React from "react";
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  // Constructor 
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

  // ComponentDidMount is used to
  // execute the code 
  componentDidMount() {
    fetch(
      "https://api.uat.bigbox.online/api/v1/users/featured_stores?lat=28.375321&long=-81.549408&distance_filter=10&page=1&limit=10")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      })
  }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
      <h1> Pleses wait some time.... </h1> </div>;
    return (
      <div className="App">
        {
          items.stores.map((item) => (

            <div className="userdetail" key={item.id}>
              <h1>{item.name}</h1>
            </div>

          ))
        }
      </div>
    );
  }
}

export default App;