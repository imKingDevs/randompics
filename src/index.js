import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import _ from "lodash";

const url = `https://picsum.photos/`,
    width = 1800,
    height = 2400,
    random = `?random=`;

createRoot(document.querySelector('#root')).render(
    <>
        <h1 className='heading'>Random Pics</h1>
        <div className='random_img'>
            {_.times(10, (i) => (
                <img
                    key={i+1}
                    src={`${url}${width}/${height}/${random}${i+1}`}
                    title={`Random ${i+1}`}
                    alt='RandomPics' 
                    width={200}
                />
            ))}
        </div>
    </>
);