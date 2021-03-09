import React, { useEffect, useState } from 'react';
import randomColor from 'randomcolor'

const Home = () => {
    const [color, setColor] = useState(randomColor())

    useEffect(() => {
        const interval = setInterval(() => {
            setColor(randomColor());
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home">
            <div className="home__title">
                <h1 style={{ color: "white" }}>FROM</h1>
                <h1 style={{ color: "white" }}>THE</h1>
                <h1 style={{ color: color }}>HEAP</h1>
            </div>
            <div className="home__text">
                <p>The place where you share the songs and movies you like.</p>
            </div>
        </div>
    )
}
export default Home