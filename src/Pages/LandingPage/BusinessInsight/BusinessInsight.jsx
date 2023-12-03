import { MdEmail } from "react-icons/md";
import { MdCampaign } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { FaBusinessTime } from "react-icons/fa6";
import './Business.css'
import { IoMdAnalytics } from "react-icons/io";
export const BusinessInsight = () => {

    return (
        <section className="container">
            <div><IoMdAnalytics  style={{ "width": "50px", "height": '50px' }}/></div>
            <h1 className='text-4xl font-medium '>The types of services we provide <span className='text-green-700'>For You</span></h1>
            
            <section className="card__container">
                <div className="flex flex-col  gap-10  p-6 space-x-4  rounded-box">
                    <div className="flex justify-around gap-20 relative w-full">
                        <div className="card__bx" style={{ "--clr": "#89ec5b" }}>
                            <div className="card__data">
                                <div className="card__icon">
                                <FaDatabase />
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
                                <FcSalesPerformance />
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
                                <FaBusinessTime />
                                </div>
                                <div className="card__content">
                                    <h3>Business Data Analysis</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-around relative w-full">
                        <div className="card__bx carousel-item" style={{ "--clr": "#c4cdda" }}>
                            <div className="card__data">
                                <div className="card__icon">
                                <MdCampaign />
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
                                <MdEmail />
                                </div>
                                <div className="card__content">
                                    <h3>Email Marketing</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </section>
    )
}
