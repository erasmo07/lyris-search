import React from "react";

const Author = ({author}) => {
  if (Object.keys(author).length === 0 ) return null;

  return (
      <div class="col s12 m6">
        <div class="card">
          <div class="card-image">
            <img src={author.strArtistThumb} alt='' />
            <span class="card-title">{author.strArtist}</span>
          </div>
          <div class="card-content">
            <p>{author.strBiographyEN}</p>
          </div>
        </div>
      </div>
  );
};

export default Author;
