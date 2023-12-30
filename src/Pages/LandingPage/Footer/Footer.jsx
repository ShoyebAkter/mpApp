
export const Footer = () => {
    return (
        <div>

            <footer className="bg-gray-900">
                <div className="pt-5">
                    <div className="md:flex md:justify-around">
                        <div className="md:mb-0 flex items-center">
                            <a  className="">
                                <img  src="/logo2.png" className="h-30  mr-3" alt="EulerMail Logo" />
                                {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">EulerMail</span> */}
                            </a>
                        </div>
                        <div className="grid grid-cols-3 gap-16 sm:gap-20 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">Quick Links</h2>
                                <ul className="text-gray-500  font-medium">
                                    <li className="mb-4">
                                        <a style={{"textDecoration":"none"}} href="/" className="hover:underline">Home</a>
                                    </li>
                                    <li className="mb-4">
                                        <a style={{"textDecoration":"none"}} href="#allies" className="hover:underline">Clients</a>
                                    </li>
                                    <li className="mb-4">
                                        <a style={{"textDecoration":"none"}} href="#contactUs" className="hover:underline">Contact Us</a>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">Services</h2>
                                <ul className="text-gray-500  font-medium">
                                    <li className="">
                                        <a style={{"textDecoration":"none"}} href="#" className="hover:underline ">Customer Data Analysis</a>
                                    </li>
                                    <li>
                                        <a style={{"textDecoration":"none"}} href="#" className="hover:underline">Sales Data Analysis</a>
                                    </li>
                                    <li>
                                        <a style={{"textDecoration":"none"}} href="#" className="hover:underline">Business Data Analysis</a>
                                    </li>
                                    <li>
                                        <a style={{"textDecoration":"none"}} href="https://discord.gg/4eeurUVvTy" className="hover:underline">Campaign Creation</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Get in Touch</h2>
                                <ul className="text-gray-500 font-medium">
                                    <li className="mb-4">
                                        <a style={{"textDecoration":"none"}} href="#" className="hover:underline">info@gmail.com</a>
                                    </li>
                                    <li>
                                        <a style={{"textDecoration":"none"}} href="#" className="hover:underline">Phone Number</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div style={{"backgroundColor":"#439541","color":"#f8f8f8"}} className="py-2 flex justify-around items-center">
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
