import { useLayoutEffect, useState } from 'react';

export default function useWindowPosition(id: string) {

    // const [offsetheight, setOffsetheight] = useState(0);
    const [windowheight, setWindowheight] = useState(0)

    useLayoutEffect(() => {

        function updatePosition() {

            // const offsetSetHeight = window.document.getElementById(id).offsetHeight;

            // if (window.pageYOffset > offsetSetHeight * 0.7) {
            // setOffsetheight(offsetSetHeight);
            setWindowheight(window.pageYOffset);
        }

        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    }, [id]);
    return windowheight;
}

