import './Footer.css'
export const Footer = () => {
    return (
        <div>

            <footer className=" Footermain">
                <div className="pt-5 ">
                    <div className="md:flex md:justify-around ">
                        <div className="footerLogo">
                            <a  className="">
                                <img  src="/logo2.png" className="h-30  mr-3 md:mx-auto" alt="EulerMail Logo" />
                                {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">EulerMail</span> */}
                            </a>
                        </div>
                        <div className="linkSec grid grid-cols-3 gap-16 sm:gap-20 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold  uppercase text-white">Quick Links</h2>
                                <ul className="text-gray-500  font-medium">
                                    <li className="mb-4">
                                        <div style={{"cursor":"pointer"}} >Home</div>
                                    </li>
                                    <li className="mb-4">
                                        <div style={{"cursor":"pointer"}}>Clients</div>
                                    </li>
                                    <li className="mb-4">
                                        <div style={{"cursor":"pointer"}}>Contact Us</div>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm  font-semibold uppercase text-white">Services</h2>
                                <ul className="text-gray-500  font-medium">
                                    <li className="">
                                        <div style={{"cursor":"pointer"}}>Customer Data Analysis</div>
                                    </li>
                                    <li>
                                        <div style={{"cursor":"pointer"}}>Sales Data Analysis</div>
                                    </li>
                                    <li>
                                        <div style={{"cursor":"pointer"}}>Business Data Analysis</div>
                                    </li>
                                    <li>
                                        <div style={{"cursor":"pointer"}}>Campaign Creation</div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Get in Touch</h2>
                                <ul className="text-gray-500 font-medium">
                                    <li className="mb-4">
                                        <div style={{"cursor":"pointer"}}>support@eulermail.app</div>
                                    </li>
                                    <li>
                                        <div style={{"cursor":"pointer"}}></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="rightsSec">
                        <span className="text-sm sm:text-center">Holismus Group | All rights reserved © 2023
                        </span>
                        <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                            Disclaimer
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}
