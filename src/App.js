import { Component } from 'react';
import './App.css';
import data from './data/sortedData';

import Form from './components/Form';

class App extends Component{
  constructor(){
    super();
    this.state = {
      pokemonList: data.pokemon,
      teamList: [],

      teamWeight: 0,
      teamAtk: 0,
      teamHp: 0,
      teamDef: 0
    }
  }

  handlePokemonClick=(pokemon)=>{
    if(this.state.teamList.length >= 6){
      return;
    }

    this.setState({
      teamList: [...this.state.teamList, pokemon],
      teamWeight: this.state.teamWeight + pokemon.weight,
      teamAtk: this.state.teamAtk + pokemon.atk,
      teamHp: this.state.teamHp + pokemon.hp,
      teamDef: this.state.teamDef + pokemon.def
    })
  }

  handleSubmit=(e, teamName, trainerName, gamesWon, badgesWon)=>{
    e.preventDefault();
    console.log("You have submitted your team details");
    console.log(teamName, trainerName, gamesWon, badgesWon);
  }

  render(){
    let pokemonNameElArr = this.state.pokemonList.filter((poke)=>poke.id < 20).map((pokemon)=>{
      let { image, name, weight, height, hp, atk, def } = pokemon;
      return(
        <div
            className="pokemon-item-container"
            onClick={()=>this.handlePokemonClick(pokemon)}
        >
            <img src={image} alt="Pokemon Image" />
            <div>Name: {name}</div>
            <div>Weight: {weight}</div>
            <div>Height: {height}</div>
            <div>Health: {hp}</div>
            <div>Attack: {atk}</div>
            <div>Defense: {def}</div>
        </div>
      )
    });

    let pokemonTeamElArr = this.state.teamList.map((pokemon)=>{
      return(
        <div className="pokemon-team-item-container">
          <div>{ pokemon.name }</div>
          <img src={ pokemon.image } alt="pokemon image" />
          <div>Hp: { pokemon.hp }</div>
        </div>
      )
    })

    return(
      <div className="app" id="app-container">
        <h1>Pokémon React Code Along</h1>

        <h2>Team Details</h2>

        <div>
          <div>Team Name: { this.state.teamName }</div>
          <div>Trainer Name: { this.state.trainerName }</div>
          <div>Games Won: { this.state.gamesWon }</div>
          <div>Badges Won: { this.state.badgesWon }</div>
        </div>
        <br />
        
        <Form 
          handleSubmit={this.handleSubmit}
        />

        <h3>Pokemon in team</h3>
        <div id="pokemon-team-container">
          { pokemonTeamElArr }
        </div>
        <h3>Stats</h3>
        <div>
          <div>Weight: { this.state.teamWeight }</div>
          <div>Health Points: { this.state.teamHp }</div>
          <div>Attack: { this.state.teamAtk }</div>
          <div>Defense: { this.state.teamDef }</div>
        </div>
        <h2>Pokédex</h2>
        <div id="pokemon-list-container">
          { pokemonNameElArr }
        </div>
      </div>
    )
  }
}

export default App;
