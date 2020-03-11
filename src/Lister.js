
import React from 'react';
import axios from 'axios';

class Lister extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      livres: []
    }
  }


  componentDidMount() {
    axios.post('/Lister').then(res => {
      console.log(JSON.stringify(res.data))
      this.setState({ livres: res.data })
    })
  }

  render() {
    var data = this.state.livres

    return (
      <div className="home">
        <h1>Liste des livres</h1>
        <ul>
          {data.map(function (d, idx) {
            return (<li key={idx}>titre : {d.name} , description : {d.description}, date de sortie : {d.dateRelease}</li>)
          })}
        </ul>
      </div>
    );
  }
}

export default Lister;