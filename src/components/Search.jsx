import React, { useState } from "react";

const Search = ({setSearch}) => {
    const [data, setData] = useState({});

    const handleSubmit = e => {
        e.preventDefault();

        // Validate fields
        const {author, song} = data;

        if (author.trim() === '' || song.trim() === ''){
            return;
        }

        setSearch(data);
    };

  return (
    <div class="row blue lighten-5">
      <form class="col s12" onSubmit={handleSubmit}>
        <div class="row">
          <div class="input-field col s4 offset-s2">
            <input
              id="first_name"
              type="text"
              class="validate"
              name='author'
              onChange={e => setData({...data, [e.target.name]: e.target.value})}
            />
            <label for="first_name">Artista</label>
          </div>
          <div class="input-field col s4">
            <input
                type="text"
                class="validate" 
                name='song'
                onChange={e => setData({...data, [e.target.name]: e.target.value})}
            />
            <label for="last_name">Cansion</label>
          </div>
        </div>
        <div className="row">
        <div class="col offset-s9">
            <button className='btn btn-success'>Buscar</button>
        </div>
        </div>
      </form>
    </div>
  );
};
 
export default Search;