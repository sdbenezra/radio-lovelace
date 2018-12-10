import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

class RadioSet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      morningTracks: props.tracks.slice(0, props.tracks.length / 2),
      eveningTracks: props.tracks.slice(props.tracks.length / 2, props.tracks.length),
    }

    console.log(`Radio set for ${props.tracks.length} tracks`);
  }

  toggleFavorite = (id) => {
    console.log("RadioSet changeFavorite");
    if (id < this.state.morningTracks.length) {
      let newTrackList = this.state.morningTracks;
      let index;
      newTrackList.forEach((track, i) => {
        if (track.id === id) {
          index = i;
        }
      })
      newTrackList[index].favorite = !newTrackList[index].favorite;
      this.setState({morningTracks: newTrackList});
    } else {
      let newTrackList = this.state.eveningTracks;
      let index;
      newTrackList.forEach((track, i) => {
        if (track.id === id) {
          index = i;
        }
      })
    newTrackList[index].favorite = !newTrackList[index].favorite;
    this.setState({eveningTracks: newTrackList});
    }
  }

  sendToTop = (id) => {
    console.log("RadioSet message - Send to top button pressed");
    if (id < this.state.morningTracks.length) {
      let newTrackList = this.state.morningTracks;
      let index;
      newTrackList.forEach((track, i) => {
        if (track.id === id) {
          index = i;
        }
      })
      let selectedSong = newTrackList.splice(index, 1);
      newTrackList.splice(0, 0, selectedSong[0]);
      this.setState({morningTracks: newTrackList});
    } else {
      let newTrackList = this.state.eveningTracks;
      let index;
      newTrackList.forEach((track, i) => {
        if (track.id === id) {
          index = i;
        }
      })
      let selectedSong = newTrackList.splice(index, 1);
      newTrackList.splice(0, 0, selectedSong[0]);
      this.setState({eveningTracks: newTrackList});
    }
  }


  render (){
    return (
      <div className="radio-set">
        <section className="radio-set--playlist-container">
          <Playlist
            side="Morning"
            tracks={this.state.morningTracks}
            toggleFavorite={this.toggleFavorite}
            sendToTop={this.sendToTop}
          />
          <Playlist
            side="Evening"
            tracks={this.state.eveningTracks}
            toggleFavorite={this.toggleFavorite}
            sendToTop={this.sendToTop}
          />
        </section>
      </div>
    );

  }

};

export default RadioSet;
