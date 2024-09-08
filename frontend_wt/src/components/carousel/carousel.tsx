/* eslint-disable @typescript-eslint/no-explicit-any */
import './carousel.css'
import { TimelineBlock } from '../timeline-block/timeline-block';
import { useState } from 'react';
import { Direction } from '../../hooks/useDirOption';

interface CarouselProps {
  scrollRef: any;
  dir: Direction;
}

export const Carousel = (
  {scrollRef,dir}: CarouselProps
) => {
  const imagesLength = 11;
  const [startX, setStartX] = useState(0); 
  const [scrollX, setScrollX] = useState(0);
  const onTouchStart = (e) => {
    if (scrollRef.current) {
      setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft); // Rögzítjük az érintési pozíciót
      setScrollX(scrollRef.current.scrollLeft); // Rögzítjük az aktuális görgetési pozíciót
    }
  };

  const onTouchMove = (e) => {
    if (scrollRef.current) {
      const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
      const walk = x - startX; // Mennyit mozdult az ujj
      scrollRef.current.scrollLeft = scrollX - walk; // Frissítjük a görgetést
    }
  };
  return (
    <div className="outer-container overflow-hidden mx-5" ref={scrollRef}   onTouchStart={onTouchStart} 
    onTouchMove={onTouchMove}>
    <div className="scrolling-wrapper w-100 ">
      {[...Array(imagesLength)].map((_, index) => (
        <TimelineBlock key={index} imageIndex={index} dir={dir} />
      ))}
     
    </div>
    <div className="timeline-close">
        Financial sector development timeline
      </div>
  </div>
  )
}