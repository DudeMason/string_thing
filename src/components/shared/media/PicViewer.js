import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import Recital2 from './images/2017Recital.jpg';
import Recital1 from './images/2019Recital.jpg';
import Christmas from './images/Christmas.jpg';
import FunRecital from './images/FunRecital.jpg';
import Instruments from './images/Instruments.jpg';
import ServiceChristmas from './images/ServiceChristmas.jpg';

function PicViewer() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    Recital1,
    ServiceChristmas,
    Christmas,
    Recital2,
  ];
  const biggerImages = [
    Instruments,
    FunRecital,
  ];

  const openImageViewer = useCallback(index => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div>
      {images.map((src, index) => (
        <img
          src={src}
          onClick={() => openImageViewer(index)}
          width="300"
          key={index}
          style={{ margin: "2px" }}
          alt=""
        />
      ))}
      <br/>
      {biggerImages.map((src, index) => (
        <img
          src={src}
          onClick={() => openImageViewer(index)}
          width="300"
          key={index}
          style={{ margin: "2px" }}
          alt=""
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)"
          }}
        />
      )}
    </div>
  );
}
export default PicViewer;
