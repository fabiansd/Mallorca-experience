import { useLayoutEffect, useState } from 'react';

export default function useWindowPosition(id: string) {

    const [animation, setAnimation] = useState(false);

    useLayoutEffect(() => {

        function updatePosition() {

            const offsetSetHeight = window.document.getElementById(id).offsetHeight;

            console.log('offset hight')
            console.log(offsetSetHeight)
            console.log('page Y offset')
            console.log(window.pageYOffset)

            if (window.pageYOffset > offsetSetHeight * 0.7) {
                console.log('TRUE')
                setAnimation(true);
            }
        }

        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    }, [id]);
    return animation;
}

