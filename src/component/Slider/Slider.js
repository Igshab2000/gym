import * as React from 'react';
import Whirligig from 'react-whirligig';
import './Slider.scss';
import Stock from '../Stocks/Stocks';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MainButton from '../UI/main-button/main-button';
import {Link} from 'react-router-dom';

const Slider = props => {
    let whirligig;
    const next = () => {
      console.log(whirligig);
      whirligig.next();
    }
    const prev = () => whirligig.prev();
      
    function typeElement(element) {
      if (element.type === 'img') {
        return element.items.map((item, index) => {
          return(
            <div
              data-title={item?.name}
              key={index}
              className='slider__content__item'
              style={{
                width: 300,
                height: 300,
                background: 'url('+item.src +')',
                backgroundSize: 'cover'
              }}
            />
          )
        })
        
      } else if(element.type === 'div') {
        return element.items.map((item, index) => {
          return(
            <Stock
              key={index}
              header={item.header}
              price={item.price}
              id={item.id}
            />
          )
        })
      }
    }

    return (
      <div className="slider">
        <header className='slider__header'>
          <h1>{props.elements.header}</h1>
          <Link
            to={props.elements.href}
          >
            <MainButton
              type='slider'
            >{props.elements.header}</MainButton>
          </Link>
        </header>
        <div className='slider__content'>
          <div className="slider__content__actions" onClick={prev}>
            <ArrowBackIosIcon />
          </div>
          <Whirligig
            preventScroll="true"
            visibleSlides={3}
            gutter="0.5em"
            ref={(_whirligigInstance) => { whirligig = _whirligigInstance}}
          >
            {
              typeElement(props.elements)
            }
          </Whirligig>
          <div className="slider__content__actions" onClick={next}>
            <ArrowForwardIosIcon />
          </div>
        </div>
        
      </div>
    )
  }

export default Slider;