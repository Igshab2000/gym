import React from 'react';
import './SetOfElements.scss';

const showItems = (arrayElements) => {
    return arrayElements.map((item, index) => {
        return (
            <div
                key={index}
                className='container-elements__items'
                style={{
                    backgroundImage: 'url('+item+')',
                    backgroundSize: 'cover'
                }} 
            />
        )
    })
}

const SetOfElements = props => {
    const {arrayElements} = props;
    console.log(arrayElements);
    return (
        <div className='container-elements'>
            {arrayElements === []  ?
                null
                :
                showItems(arrayElements)
            }
        </div>
    )
}

export default SetOfElements;