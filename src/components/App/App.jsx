import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'

function App() {


  const [ images, setImages ] = useState([]);

  useEffect(() => {
    //getImages;
  }, []);
  
  const getImages = () => {
    axios.get('/gallery').then(dbResponse => {
      setImages(dbResponse.data);
      console.log(dbResponse);
    })
  }
  

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList images= {images} />

      </div>
    );
}

export default App;
