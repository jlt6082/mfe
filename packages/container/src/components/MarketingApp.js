import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

// Should be able to use this with any of the frameworks
export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    });

    return <div ref={ref} />;
};
