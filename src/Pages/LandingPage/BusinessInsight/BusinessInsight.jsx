import './Business.css'

export const BusinessInsight = () => {
    return (
        <section className="container">
            <h1 className='text-center text-3xl font-medium text-green-700'>Our Services</h1>
            <section className="card__container">
                <div className="card__bx" style={{"--clr": "#89ec5b"}}>
                    <div className="card__data">
                        <div className="card__icon">
                            <i className="fa-solid fa-paintbrush"></i>
                        </div>
                        <div className="card__content">
                            <h3>Designing</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card__bx" style={{"--clr": "#eb5ae5"}}>
                    <div className="card__data">
                        <div className="card__icon">
                            <i className="fa-solid fa-code"></i>
                        </div>
                        <div className="card__content">
                            <h3>Develoment</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card__bx" style={{"--clr": "#5b98eb"}}>
                    <div className="card__data">
                        <div className="card__icon">
                            <i className="fa-brands fa-searchengin"></i>
                        </div>
                        <div className="card__content">
                            <h3>SEO</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>

            </section>

        </section>
    )
}
