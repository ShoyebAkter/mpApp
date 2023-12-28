
import './Business.css'
export const BusinessInsight = () => {

    return (
        <div>
            <div style={{ "boxShadow": '4px 4px 10px rgba(0, 0, 0, 0.5)','width':"300px",'background':"#2a4e40","color":"#f8f8f8" }} className="px-5 py-1 flex justify-center mx-auto rounded-2xl mt-16 mb-5">
                The types of services we provide
            </div>
            <div className='flex justify-around g-5'>
                <div><img src='Services_1.png' alt=''/></div>
                <div><img src='Services_2.png' alt=''/></div>
                <div><img src='Services_3.png' alt=''/></div>
            </div>
            <div className='flex justify-around g-5 '>
                <div><img  src='Services_4.png' alt=''/></div>
                <div><img src='Services_5.png' alt=''/></div>
            </div>
        </div>
    )
}
