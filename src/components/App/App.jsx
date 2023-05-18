import React, { Component } from 'react';

import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';

class App extends Component {
  state = {
    pictures: [],
    queryValue: '',
  };

  formSubmitHendler = searchQuery => {
    // console.log(searchQuery);
    this.setState({ queryValue: searchQuery });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.formSubmitHendler} />
        <ImageGallery queryValue={this.state.queryValue} />
      </div>
    );
  }
}

export default App;
