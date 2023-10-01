
import './Business.css'

export const BusinessInsight = () => {
    
    return (
        <section className="container ">
            <h1 className='text-3xl font-medium text-green-700'>Our Services</h1>
            <section className="card__container">
            <div className="carousel carousel-center  p-4 space-x-4  rounded-box">
                <div className="card__bx carousel-item" style={{ "--clr": "#89ec5b"}}>
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
                <div className="card__bx carousel-item" style={{ "--clr": "#eb5ae5" }}>
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
                <div className="card__bx carousel-item" style={{ "--clr": "#5b98eb" }}>
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
                <div className="card__bx carousel-item" style={{ "--clr": "#c4cdda" }}>
                    <div className="card__data">
                        <div className="card__icon">
                            <i className="fa-brands fa-searchengin"></i>
                        </div>
                        <div className="card__content">
                            <h3>Campaign Creation</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card__bx carousel-item" style={{ "--clr": "#aaa7a2" }}>
                    <div className="card__data">
                        <div className="card__icon">
                            <i className="fa-brands fa-searchengin"></i>
                        </div>
                        <div className="card__content">
                            <h3>Email Marketing</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                </div>
            </section>

        </section>
    )
}
