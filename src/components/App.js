import React, { Component } from 'react';
import Header from './Header';
import Nav from "./Nav";
import ImageList from './ImageList';
import Search from './Search';
import Error from './Error';
import axios from 'axios';
import apiKey from '../config';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      pictures: [],
      sunsets: [],
      waterfalls: [],
      rainbows: [],
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
            <div className='container'>
              <Header />
              <Route exact path="/" component={() => <Search onSearch={this.performSearch} />}/>
              <Route exact path="/sunsets" component={() => <Search onSearch={this.sunsetSearch} />}/>
              <Route exact path="/waterfalls" component={() => <Search onSearch={this.waterfallSearch} />}/>
              <Route exact path="/mountains" component={() => <Search onSearch={this.mountainSearch} />}/>
              <Nav />
              <Switch>
                {
                  (this.state.loading)
                  ? <h3 className='active'>Loading...</h3>
                  : <Route exact path='/' render={() => <ImageList data={this.state.pictures} />} />
                }
                <Route path='/sunsets' render={() => <ImageList data={this.state.sunsets} />} />
                <Route path='/waterfalls' render={() => <ImageList data={this.state.waterfalls} />} />
                <Route path='/mountains' render={() => <ImageList data={this.state.mountains} />} />
                <Route path='/search' render={() => <ImageList data={this.state.pictures} />} />
                <Route component={Error} />
              </Switch>
            </div>
          </BrowserRouter>
        )
      }
    }
