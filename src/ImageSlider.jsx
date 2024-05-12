import React, { useState, useEffect } from "react";

function ImageSlider({ photos }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === photos.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // 3초마다 이미지 변경

    return () => clearInterval(slideInterval); // 컴포넌트가 언마운트될 때 인터벌을 정리
  }, [photos.length]);

  return (
//     <div style={{ display: 'flex', marginTop:"35px", width:"100%", height: "300px",overflow: 'hidden' }}>
//       <div
//         style={{
//           display: 'flex',
//           transform: `translateX(-${currentSlide * 100}%)`,
//           transition: 'transform 0.5s ease-in-out',
//         }}
//       >
//         {photos.map((photo, index) => (
//           <img key={index} src={photo} alt={`Slide ${index}`} style={{ width: 'calc(100% - 700px)', flexShrink: 0 }} />
//         ))}
//       </div>
//     </div>
//   );
    <div style={{ display: 'flex', marginTop:"35px", width:"100%", overflow: 'hidden' }}>
      {photos.map((photo, index) => (
        <div
          key={index}
          style={{
            minWidth: '100%',
            transition: 'transform 1s ease',
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          <img src={photo} style={{ width: '100%', height: 'auto'}} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
    )

}

export default ImageSlider;
