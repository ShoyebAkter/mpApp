
import { AiOutlineMail } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
export const SendButton = (props) => {
    const setShowEmailModal=props;
    return (
        <div className='flex flex-col h-1/5'>
            <button
                onClick={() => setShowEmailModal(true)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold mb-5 py-2 px-4 rounded">
                <AiOutlineMail />
            </button>
           
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <BsWhatsapp />
            </button>
        </div>
    )
}
