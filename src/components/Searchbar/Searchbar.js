import { Component } from 'react';
import css from './Searchbar.module.css'

class SearchBar extends Component {

  state = {
    searchQuery: '',
  };

  hendleInputChange = e => {
    const {name, value} = e.currentTarget
    this.setState({[name]: value.toLowerCase()});
  };

  hendleSubmit = e =>{
    e.preventDefault();

    if(this.state.searchQuery.trim() === ''){
      return;
    }
    
    this.props.onSubmit(this.state.searchQuery);
    this.setState({searchQuery: ''})
  };

  render (){
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.hendleSubmit}>
          <button type="submit" className={css.button}>
            <span className="button-label">Search</span>
          </button>
      
          <input
            onChange={this.hendleInputChange}
            name='searchQuery'
            value={this.state.searchQuery}
            className={css.input}
            type="text"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    )
  };
};

export default SearchBar;
