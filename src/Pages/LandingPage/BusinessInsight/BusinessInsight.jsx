import { Fade } from "react-awesome-reveal"

export const BusinessInsight = () => {
    return (
        <div className="h-screen p-10">
            <Fade cascade>
                <div className="text-5xl text-green-700 font-medium text-center">Get your smart business insights</div>
                <div className="flex justify-center items-center" ><img style={{ "height": "300px" }} src="/insight.jpg" alt="" /></div>
                <div className="text-zinc-600 text-xl px-10">Harness the power of data with our <span className="font-bold">Key Indicators. EulerMail</span> provides you with
                    <span className="font-bold">a range of crucial indicators</span> to help you understand your campaign`s
                    performance. From open rates to click-through rates,<span className="font-bold"> we`ve got you covered.</span></div>
                <div className="px-3 py-2  rounded-xl bg-zinc-600 text-center text-white mx-auto" style={{ "width": "200px" }}>Start your campaign</div>
            </Fade>
        </div>
    )
}
