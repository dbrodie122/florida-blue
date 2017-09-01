import React, { Component } from 'react';

import { DataInput } from './components/DataInput';
import { FormSection } from './components/FormSection';

const obj1 = {
  "developers": [
    {
      "firstName": "",
      "lastName": "",
      "personalFacts": {
        "languages": [],
        "birthDate": "",
        "favoriteFood": ""
      } 
    },
    {
      "firstName": "",
      "lastName": "",
      "personalFacts": {
        "languages": [],
        "birthDate": "",
        "favoriteFood": ""   
      } 
    },
    {
      "firstName": "",
      "lastName": "",
      "personalFacts": {
        "languages": [],
        "birthDate": "",
        "favoriteFood": ""   
      } 
    },
    {
      "firstName": "",
      "lastName": "",
      "personalFacts": {
        "languages": [],
        "birthDate": "",
        "favoriteFood": ""   
      } 
    }
  ], 
  "developmentSupport": [
  {
    "firstName": "",
    "lastName": "",
    "personalFacts": {
      "languages": [],
      "birthDate": "",
      "favoriteFood": ""   
    } 
  },
  {
    "firstName": "",
    "lastName": "",
    "personalFacts": {
      "languages": [],
      "birthDate": "",
      "favoriteFood": ""   
    } 
  },
  {
    "firstName": "",
    "lastName": "",
    "personalFacts": {
      "languages": [],
      "birthDate": "",
      "favoriteFood": ""   
    } 
  },
  ],
  "techLead": { 
    "firstName": "",
    "lastName": "",
    "personalFacts": {
      "languages": [],
      "birthDate": "",
      "favoriteFood": ""
  } 
  },
  "manager": { 
    "firstName": "",
    "lastName": "",
    "personalFacts": {
      "languages": [],
      "birthDate": "",
      "favoriteFood": ""
    } 
  },
  "director": { 
    "firstName": "",
    "lastName": "",
    "personalFacts": {
      "languages": [],
      "birthDate": "",
      "favoriteFood": ""
    }
  }
}

const obj2 = {
  "firstName": "",
  "lastName": "",
  "birthDate": "",
  "favoriteFood": "",
  "language": ""
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: obj1
    }
    this.handleChange = this.handleChange.bind(this);
    this.createCapitalizedAndSpacedLabel = this.createCapitalizedAndSpacedLabel.bind(this);
  }

  handleChange(e, path){
    const value = e.target.value
    const newState = Object.assign({}, this.state.data);
    if (path.length === 1) {
      newState[path[0]] = value;
    } else if (path.length === 2) {
      newState[path[0]][path[1]] = value
    } else if (path.length === 3) {
      newState[path[0]][path[1]][path[2]] = value
    } else if (path.length === 4) {
      newState[path[0]][path[1]][path[2]][path[3]] = value
    }
    this.setState({data: newState})
  }

  createCapitalizedAndSpacedLabel(string){
     let parts = []
      for(let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) > 65 && string.charCodeAt(i) < 90) {
          const stringSlice1 = string.charAt(0).toUpperCase() + string.slice(1,i);
          const stringSlice2 = string.slice(i, string.length);
          parts.push(stringSlice1);
          parts.push(stringSlice2);
          break;
        }
      }
      if (parts.length < 1) {
        return string.charAt(0).toUpperCase() + string.slice(1,string.length);
      }
      return parts.join(' ');
    }

  render() {
    const data = this.state.data;
    const keys = Object.keys(data);
    return (
      <div className='light-grey-bg pad-5'>
        <form>
          <div className='column grey-bg'>
          {keys.map((key, i) => 
            typeof data[key] === 'string' ?
            <DataInput
            key={i + 'rdrr'}
            capitalize={this.createCapitalizedAndSpacedLabel}
            value={data[key]}
            handleChange={this.handleChange}
            label={key}/>
            : <FormSection 
              key={i + 'abcgd'} 
              capitalize={this.createCapitalizedAndSpacedLabel}
              topItem={this.state.data[key]}
              topTitle={key}
              handleChange={this.handleChange}/>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default App;

