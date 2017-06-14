import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


const API_KEY = 'AIzaSyAm0_3K4wVzhXn-8dQlg7I74OBM3uUCETE';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('Feist');
  }

  videoSearch(term){
    YTSearch({ key: API_KEY, term }, (videos) => {
      this.setState({ 
        videos, 
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    return (
        <div className="app-container">
            <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
              onVideoSelect={selectedVideo => this.setState({ selectedVideo })} 
              videos={this.state.videos} 
            />
        </div>
    );
  }
}

module.exports = App;
