import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import Search from './components/Search';
import Author from './components/Author';
import Lyrics from './components/Lyrics';
import axios from 'axios';

function App() {
  const [search, setSearch] = useState({});
  const [song, setSong] = useState({});
  const [author, setAuthor] = useState({});


  useEffect(() => {
    if (Object.keys(search).length === 0) return;
    
    const searchLyrics = async () => {
      const urlBase = 'https://api.lyrics.ovh/v1/' 
      const response = await axios.get(`${urlBase}${search.author}/${search.song}`);
      setSong(response.data);
    }

    const searchAuthor = async () => {
      const urlBase = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${search.author}`;
      const response = await axios.get(urlBase);
      setAuthor(response.data.artists[0]);
    }

    searchAuthor();
    searchLyrics();
  }, [search]);

  return (
    <div className="App">
      <Nav />
      <Search setSearch={setSearch} />
      <div className="container">
        <div className="row">
          <Author author={author} /> <Lyrics song={song} />
        </div>
      </div>
    </div>
  );
}

export default App;
