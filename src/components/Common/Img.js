import React, { useState } from 'react';

const Img = ({ fallbacks = [], ...props }) => {
    const [fallbackIndex, setFallbackIndex] = useState(0);

    const onError = () => {
        if (fallbackIndex > fallbacks.length) {
            return <img src='/plug.svg' {...props} />;;
        }

        setFallbackIndex((i) => i + 1);
    }

    return <img src={fallbacks[fallbackIndex]} onError={onError} {...props} />;
}

export default Img;