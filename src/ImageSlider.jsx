import React, { useRef, useEffect } from "react";

function ImageSlider({ photos }) {
  const sliderRef = useRef(null);

    useEffect(() => {
        const slide = () => {
            // 현재 슬라이더의 위치를 가져옵니다.
            const currentScroll = sliderRef.current.scrollLeft;
            // 슬라이더의 전체 너비를 가져옵니다.
            const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
            
            // 이미지 하나의 너비를 계산합니다. 모든 이미지가 동일한 크기를 가진다고 가정합니다.
            const singleImageWidth = sliderRef.current.clientWidth / photos.length;

            // maxScroll 값을 조정하여, 실제 마지막 이미지에 도달하기 전에 첫 번째 이미지로 이동하도록 합니다.
            const adjustedMaxScroll = maxScroll - singleImageWidth;

            // 현재 스크롤 위치가 조정된 최대 스크롤 위치에 도달했을 때, 슬라이더를 다시 시작 위치로 옮깁니다.
            if (currentScroll >= adjustedMaxScroll) {
            sliderRef.current.scrollLeft = 0;
            } else {
            // 그렇지 않으면 슬라이더를 오른쪽으로 조금 이동합니다.
            sliderRef.current.scrollLeft += 1;
            }
        };

        // 10ms마다 slide 함수를 실행하여 천천히 슬라이드합니다.
        const slideInterval = setInterval(slide, 10);

        return () => clearInterval(slideInterval);
        }, []);

  return (
  <div
      ref={sliderRef}
      style={{ display: 'flex', marginTop: "70px", width: "100%", overflow: 'hidden' }}>
      {photos.map((photo, index) => (
      <div
          key={index}
          style={{
          flex: "0 0 auto",
          width: '30%',
          transition: 'transform 1s ease',
          margin: index !== 0 ? "0px 20px 0px 20px" : undefined // 첫 번째 자식이 아닌 경우에만 margin을 적용
          }}>
          <img src={photo} style={{ width: '100%', height: '100%' }} alt={`Slide ${index}`} />
      </div>
    ))}
  </div>
  );
}

export default ImageSlider;
