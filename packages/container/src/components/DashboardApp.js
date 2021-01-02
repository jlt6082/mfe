import { mount } from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react';

// Should be able to use this with any of the frameworks
export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    }, []);

    return <div ref={ref} />;
};
