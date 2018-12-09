import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

class RadioSet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: props.tracks
    }

    console.log(`Radio set for ${this.state.tracks.length} tracks`);
  }

  toggleFavorite = (index) => {
    console.log("RadioSet changeFavorite");
    let newTrackList = this.state.tracks;
    newTrackList[index].favorite = !newTrackList[index].favorite;
    this.setState({tracks: newTrackList});
  }


  render (){
    const playlists = {
      morningTracks: this.state.tracks.slice(0, this.state.tracks.length / 2),
      eveningTracks: this.state.tracks.slice(this.state.tracks.length / 2, this.state.tracks.length)
    };

    return (
      <div className="radio-set">
        <section className="radio-set--playlist-container">
          <Playlist
            side="Morning"
            tracks={playlists.morningTracks}
            toggleFavorite={this.toggleFavorite}
          />
          <Playlist
            side="Evening"
            tracks={playlists.eveningTracks}
            toggleFavorite={this.toggleFavorite}
          />
        </section>
      </div>
    );

  }

};

export default RadioSet;
