import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Should be able to use this with any of the frameworks
export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;
                if (pathname != nextPathname) {
                    history.push(nextPathname);
                }
            },
        });

        history.listen(onParentNavigate);

    }, []);

    return <div ref={ref} />;
};
