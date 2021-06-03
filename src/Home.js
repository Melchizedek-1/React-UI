import React from 'react';
import Banner from './Banner';
import './Home.css';
import Card from './Card'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home-section'>
                <Card
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends or family."
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends or family."
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends or family."
                />
            </div>
            <div className='home-section'>
                <Card
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends or family."
                    price="$678/night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends or family."
                    price="$678/night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends or family."
                    price="$678/night"
                />
            </div>
        </div>
    )
}

export default Home
