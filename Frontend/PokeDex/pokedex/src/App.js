import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonType, setPokemonType] = useState('');
  const [pokemonWeight, setPokemonWeight] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  // tratar input
  const handleChange = (event) => {
    setTypedPokemon(event.target.value);
  };


  return (
    <div className="App">
      <header className="App-header">
      <h1>Pokedex</h1>
      <p>Digite o nome do pokemon para ser pesquisado...</p>
      </header>

      <form onSubmit={handleSubmit}>
        <input
          value={pokemonType}
          placeholder="Digite o nome do pokemon"
          onChange={handleChange}
        />

        <button type="submit">
            {isLoading ? 'Carregando...' : 'Pesquisar'}
            Pesquisar
          </button>  
      </form>
    </div>
  );
}

export default App;
