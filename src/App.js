import React, {Component} from 'react';
import './App.css';
import Axios from 'axios';
import Test from './components/Test';

const listUsers = async () => {
  const {data, status} = await Axios.get('http://localhost:3001/api/routeexample');
  const infoAxios = await Axios.get('http://localhost:3001/api/routeexample');
  console.log(data);
  console.log(status);
  console.log(infoAxios);
  if(status !== 200){
    return [];
  }
  return data;
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      documents: [],
      headers: [
        {
          label: 'Nombre',
          key: 'name'
        }
      ]
    }
  }

  async componentDidMount(){
    const documents = await listUsers();
    this.setState({documents});
  }

  render(){
    
    const {documents, headers} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <title>Test</title>
          <div>
            esto es un test
          </div>
        </header>
        <div>
          <Test />
        </div>
      </div>
    );
  }
}

export default App;
