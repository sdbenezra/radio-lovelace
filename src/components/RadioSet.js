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
    console.log("RadioSet toggleFavorite");
    console.log(`${id}`);

    let selectedMorningTrackId = this.state.morningTracks.findIndex(function(track) {
      return track.id === id;
    });

    let selectedEveningTrackId = this.state.eveningTracks.findIndex(function(track) {
      return track.id === id;
    });

    console.log(`MORNING ${selectedMorningTrackId} EVENING ${selectedEveningTrackId} ID ${id}`);

    if (selectedMorningTrackId >= 0) {
      console.log(this.state.morningTracks);
      let newTrackList = this.state.morningTracks;
      newTrackList[selectedMorningTrackId].favorite = !newTrackList[selectedMorningTrackId].favorite;
      this.setState({morningTracks: newTrackList});
    } else {
      let newTrackList = this.state.eveningTracks;
      console.log(selectedEveningTrackId);
      newTrackList[selectedEveningTrackId].favorite = !newTrackList[selectedEveningTrackId].favorite;
      this.setState({eveningTracks: newTrackList});
    }
  }

  sendToTop = (id) => {
    console.log("RadioSet message - Send to top button pressed");
    let selectedMorningTrackId = this.state.morningTracks.findIndex(function(track) {
      return track.id === id;
    });

    let selectedEveningTrackId = this.state.eveningTracks.findIndex(function(track) {
      return track.id === id;
    });

    if (selectedMorningTrackId >= 0) {
      let newTrackList = this.state.morningTracks;
      let selectedSong = newTrackList.splice(selectedMorningTrackId, 1);
      newTrackList.splice(0, 0, selectedSong[0]);
      this.setState({morningTracks: newTrackList});
    } else {
      let newTrackList = this.state.eveningTracks;
      let selectedSong = newTrackList.splice(selectedEveningTrackId, 1);
      newTrackList.splice(0, 0, selectedSong[0]);
      this.setState({eveningTracks: newTrackList});
    }
  }

  switchLists = (id) => {
    console.log("RadioSet message - SwitchLists button pressed");

    let selectedMorningTrackId = this.state.morningTracks.findIndex(function(track) {
      return track.id === id;
    });

    let selectedEveningTrackId = this.state.eveningTracks.findIndex(function(track) {
      return track.id === id;
    });

    if (selectedMorningTrackId >= 0) {
      let newTrackList = this.state.eveningTracks;
      let oldTrackList = this.state.morningTracks;

      let selectedSong = oldTrackList.splice(selectedMorningTrackId, 1);
      newTrackList.splice(0, 0, selectedSong[0]);
      this.setState({morningTracks: oldTrackList});
      this.setState({eveningTracks: newTrackList});
    } else {
      let newTrackList = this.state.morningTracks;
      let oldTrackList = this.state.eveningTracks;

      let selectedSong = oldTrackList.splice(selectedEveningTrackId, 1);
      newTrackList.splice(0, 0, selectedSong[0]);
      this.setState({eveningTracks: oldTrackList});
      this.setState({morningTracks: newTrackList});
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
            switchLists={this.switchLists}
          />
          <Playlist
            side="Evening"
            tracks={this.state.eveningTracks}
            toggleFavorite={this.toggleFavorite}
            sendToTop={this.sendToTop}
            switchLists={this.switchLists}
          />
        </section>
      </div>
    );

  }

};

export default RadioSet;
