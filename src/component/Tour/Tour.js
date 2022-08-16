import React, { useState } from 'react';
import './Tour.css'

const Tour = ({ tourplace, removeTour }) => {
    const { id, name, info, image, price } = tourplace;
    const [readmore, setReadmore] = useState(false);
    return (
        <article className='tourPlace'>
            <img src={image} alt={name} />
            <div className='box'>
                <div className='article-area'>
                    <h4>{name}</h4>
                    <p className='price'>${price}</p>
                </div>
                <div>
                    <p className='info'>{readmore ? info : `${info.substring(0, 200)}...`}
                        <button className='info-btn' onClick={() => setReadmore(!readmore)}>{readmore ? 'Show Less' : 'Read More'}</button>
                    </p>
                </div>
                <div className='button'>
                    <button className='btn' onClick={() => { removeTour(id) }}>Not Interest</button>
                </div>
            </div>
        </article>
    );
};

export default Tour;