import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import './style.css';

import { searchImages } from './API';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    error: false,
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.setState({ loading: true });
      try {
        const request = this.state.query.split('/// ');
        const arrayImage = await searchImages(request[1], this.state.page);
        if (this.state.images.length === 0) {
          this.setState({
            images: [...arrayImage],
          });
        } else {
          this.setState({
            images: [...prevState.images, ...arrayImage],
          });
        }
      } catch (error) {
        this.setState({ error: true });
        console.error('An error occurred:', error);
      } finally {
        this.setState({ loading: false });
      }
    }
  };

  onSubmit = async line => {
    if (line !== '') {
      this.setState(
        {
          query: `${Date.now()} /// ${line}`,
          page: 1,
          images: [],
        },
        () => {
          // Я работаю на Chrome и Opera. И без этого метода в Опере скролл не уходит на верх
          window.scrollTo(0, 0);
        }
      );
    }
  };

  addElements = async () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, loading, error } = this.state;
    return (
      <div
        style={{
          margin: '50px 0 0 0',
        }}
        className="App"
      >
        <Searchbar onSubmit={this.onSubmit} />
        {images.length > 0 && <ImageGallery images={images} />}
        {loading && <Loader />}
        {images.length > 0 && <Button addElements={this.addElements} />}
        {error && !loading && (
          <div
            style={{
              textAlign: 'center',
              color: 'red',
              fontSize: '40px',
              fontFamily: 'cursive',
            }}
          >
            ERROR! :c
          </div>
        )}
      </div>
    );
  }
}
