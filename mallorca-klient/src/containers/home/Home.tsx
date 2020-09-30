import 'fontsource-roboto';
import React from 'react';
import ImageCard from '../../components/card/ImageCard';

function Home() {

    return (
        <div>
            <ImageCard
                imagePath={require('../../files/images/background/beach1.jpg')}
                title={'Title'}
            />
        </div>
    );
}

export default Home;