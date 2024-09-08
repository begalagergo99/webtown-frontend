import { Direction } from '../../hooks/useDirOption';
import './timeline-block.css'

interface TimelineBlockProps {
  imageIndex: number;
  dir: Direction;
}
export const TimelineBlock = (
  {imageIndex, dir}: TimelineBlockProps
) => {
  const getImageIndex = (imageIndex: number) => {
    imageIndex += 1;
    return imageIndex >= 10 ? `0${imageIndex}` : `00${imageIndex}`;
  }


  return (
    <div className="container p-0" dir={dir}>
      <div className="row">
        <div className="">
          <div className="card">
            <img src={`../../assets/${getImageIndex(imageIndex)}.jpg`} className="card-img-top img-fluid" alt="..." style={{ height: '10rem', objectFit: 'cover' }}/>
            <div className="card-body">
              <h5 className="card-title">Nunc bibendum felis in varius laoreet</h5>
              <p className="card-text">Morbi feugiat nisi in felis maximus, vel sollicitudin dui commodo. Integer blandit non odio a congue. Maecenas in aliquet nisl. Integer maximus et.</p>
              <a href="#" className="btn btn-primary"><i className="fas fa-arrow-left"></i> View More</a>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <div className="vertical-line"></div>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-2">
            <div className="flex-grow-1 border-top border-dotted"></div>
            <p className="date mx-3 mb-0">May<br /><span>2024</span></p>
            {
              imageIndex < 9 ? <div className="flex-grow-1 border-top border-dotted"></div> : null
            }
          </div>
        </div>
      </div>
  </div>
  )
}