
export const Footer = () => {
    return (
        <div>
            <div className="text-white text-xl flex justify-between items-center bg-black p-10">
                <div style={{"width":"80px","height":"80px"}}><img src="/logo.png"  alt=""/></div>
                <div>Home</div>
                <div style={{"color":"green"}}>|</div>
                <div>EulerMail</div>
                <div style={{"color":"green"}}>|</div>
                <div>How it Works</div>
                <div style={{"color":"green"}}>|</div>
                <div>Our Allies</div>
                <div className="bg-green-700 px-5 py-3 rounded-xl">Talk to us</div>
            </div>
            <div className="flex justify-around bg-green-700 font-normal text-white text-xl p-2">
                <div>Holismus Group | All rights reserved © 2023</div>
                <div>Disclaimer</div>
            </div>
        </div>
    )
}
