
export const ButtonGroup = () => {
    return (
        <div className="flex justify-around">
            <button className="bg-green-600 text-white font-bold py-7 px-10 rounded">
                Total Campaign
            </button>
            <button className="bg-green-600 text-white font-bold py-7 px-10 rounded">
                Total Email Sent
            </button>
            <button className="bg-green-600 text-white font-bold py-7 px-10 rounded">
                Total Unique Opener
            </button>
        </div>
    )
}
