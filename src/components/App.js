import React, { Component } from 'react';
import Header from './Header';
import Nav from "./Nav";
import ImageList from './ImageList';
import Error from './Error';
import axios from 'axios';
import apiKey from '../config';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      pictures: [],
      sunsets: [],
      waterfalls: [],
      mountains: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
    this.sunsetSearch();
    this.waterfallSearch();
    this.mountainSearch();
  }

  performSearch = (userSearch = 'sunsets') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${userSearch}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          pictures: response.data.photos.photo,
          loading: false
        })
      })
      .catch(error=> {
        console.log('Error fetching and parsing data', error);
      })
  }

  sunsetSearch = (userSearch = 'sunsets') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${userSearch}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          sunsets: response.data.photos.photo,
          loading: false
        })
      })
      .catch(error=> {
        console.log('Error fetching data', error);
      })
    }

    waterfallSearch = (userSearch = 'waterfalls') => {
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${userSearch}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
          this.setState({
            waterfalls: response.data.photos.photo,
            loading: false
          })
        })
        .catch(error=> {
          console.log('Error fetching data', error);
        })
      }

    mountainSearch = (userSearch = 'mountains') => {
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${userSearch}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
          this.setState({
            mountains: response.data.photos.photo,
            loading: false
          })
        })
        .catch(error=> {
          console.log('Error fetching data', error);
        })
      }

      render() {
      return (
          <BrowserRouter>
          <div className="container">
            <Route path="/" render={() => <Header onSearch={this.performSearch} /> } />
            <Nav />
            <Route exact path="/" component={ () => <ImageList data={this.state.pictures} /> }></Route>
            <Route exact path="/search/:image" component={ () => <ImageList data={this.state.pictures} /> }></Route>
            <Route exact path="/sunsets" component={ () => <ImageList data={this.state.sunsets} /> }></Route>
            <Route exact path="/waterfalls" component={ () => <ImageList data={this.state.waterfalls} /> }></Route>
            <Route exact path="/mountains" component={ () => <ImageList data={this.state.mountains} /> }></Route>
            <Route component={Error} />
          </div>
          </BrowserRouter>
      )
  }
}
