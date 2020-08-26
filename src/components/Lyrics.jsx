import React from "react";

const Lyrics = ({song}) => {
  if (Object.keys(song).length === 0 ) return null;

  return (
    <div class="col s12 m6">
      <div class="card">
        <div class="card-content">
          <p className='song'>{song.lyrics}</p>
        </div>
      </div>
    </div>
  );
};

export default Lyrics;
