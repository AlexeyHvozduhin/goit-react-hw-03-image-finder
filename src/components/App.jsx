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

  onSubmit = async line => {
    // console.log(line);
    // Проверка на предыдущую вводимость
    // console.log(this.state.query.endsWith(`/ ${line}`));
    try {
      this.setState({ loading: true });
      const arrayImage = await searchImages(line, 1);
      this.setState({
        query: `${Date.now()} /// ${line}`,
        page: 1,
        images: arrayImage,
      });
    } catch (error) {
      this.setState({ error: true });
      console.error('An error occurred:', error);
    } finally {
      this.setState({ loading: false });
    }
  };

  addElements = async () => {
    this.setState({ loading: true });
    const request = this.state.query.split('///');
    try {
      const arrayImage = await searchImages(request[1], this.state.page + 1);
      this.setState(prevState => ({
        page: prevState.page + 1,
        images: [...prevState.images, ...arrayImage],
        loading: false,
      }));
    } catch (error) {
      this.setState({ error: true, loading: false });
      console.error('An error occurred:', error);
    }
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
        {/* <Modal /> */}
      </div>
    );
  }
}
