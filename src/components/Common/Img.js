import React, { memo, useEffect, useState } from 'react';

const Img = memo(({ fallbacks = [], ...props }) => {
    const [fallbackIndex, setFallbackIndex] = useState(0);
    const [fbs, setFbs] = useState([]);

    if(!fallbacks.length) return null;

    useEffect(() => {
        setFallbackIndex(0);
        setFbs(fallbacks);
    }, [fallbacks]);

    const onError = (e) => {
        e.preventDefault();

        if (fallbackIndex > fbs.length) {
           return null;
        } else {
            setFallbackIndex((i) => i + 1);
        }

       
    }

    return <img {...props} src={fbs[fallbackIndex]} onError={onError} />;
});

export default Img;