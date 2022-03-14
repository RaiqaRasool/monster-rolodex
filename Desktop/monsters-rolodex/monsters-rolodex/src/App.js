import React from 'react';
import './App.css';
import CardList from './components/card-list-component/card-list.component';
import SearchField from './components/search-field.component/search-field.component';


export default class App extends React.Component{
  constructor(){
    super();
    this.state=
    {
      monsters:[ ],
      searchField:"",
      }
    }

    componentDidMount(){
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response=>response.json())
      .then(users=>this.setState({monsters:users}));
    }

    handleChange=(e)=>{
      this.setState({searchField:e.target.value},()=>console.log(this.state.searchField));
  
    }
    render(){
      const {monsters,searchField}=this.state;
      const filteredMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()));
      return (
      <div className='App'>
        <h1 className='main-heading'>Monsters Rolodex</h1>
       <SearchField placeholder="Search Monsters" handleChange={this.handleChange}/>
      <CardList monsters={filteredMonsters}/>
      </div>)
    }
  }

