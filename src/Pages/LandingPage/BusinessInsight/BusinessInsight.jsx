import { useState } from 'react';
import './Business.css'


export const BusinessInsight = () => {
    const cardWidth = 300; // Adjust the card width according to your design
    const totalCards = 5; // Total number of cards
    const cardsPerSet = 3; // Number of cards per set
    const totalSets = Math.ceil(totalCards / cardsPerSet);

    const [currentSet, setCurrentSet] = useState(1);

    const handleNextClick = () => {
        if (currentSet < totalSets) {
            setCurrentSet(currentSet + 1);
        }
    };

    const handlePreviousClick = () => {
        if (currentSet > 1) {
            setCurrentSet(currentSet - 1);
        }
    };

    const slidePosition = -1 * (currentSet - 1) * cardsPerSet * cardWidth;

    return (
        <section className="container">
            <h1 className='text-center text-3xl font-medium text-green-700'>Our Services</h1>
            <section className="card__container">
                <div className="card__bx" style={{ "--clr": "#89ec5b", "transform": `translateX(${slidePosition}px)` }}>
                    <div className="card__data">
                        <div className="card__icon">
                            <i className="fa-solid fa-paintbrush"></i>
                        </div>
                        <div className="card__content">
                            <h3>Customer Data Analysis</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card__bx" style={{ "--clr": "#eb5ae5" }}>
                    <div className="card__data">
                        <div className="card__icon">
                            <i className="fa-solid fa-code"></i>
                        </div>
                        <div className="card__content">
                            <h3>Sales Data Analysis</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card__bx" style={{ "--clr": "#5b98eb" }}>
                    <div className="card__data">
                        <div className="card__icon">
                            <i className="fa-brands fa-searchengin"></i>
                        </div>
                        <div className="card__content">
                            <h3>Business Data Analysis</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card__bx" style={{ "--clr": "#5b98eb" }}>
                    <div className="card__data">
                        <div className="card__icon">
                            <i className="fa-brands fa-searchengin"></i>
                        </div>
                        <div className="card__content">
                            <h3>Business Data Analysis</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card__bx" style={{ "--clr": "#5b98eb" }}>
                    <div className="card__data">
                        <div className="card__icon">
                            <i className="fa-brands fa-searchengin"></i>
                        </div>
                        <div className="card__content">
                            <h3>Business Data Analysis</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <button onClick={handlePreviousClick} className="slider-button">Previous</button>
                <button onClick={handleNextClick} className="slider-button">Next</button>

            </section>

        </section>
    )
}
