import PropTypes from 'prop-types'
export const Buttons = ({followers,impression,engagement}) => {
    // console.log(likes.data[0].values[0].value);
    // console.log(followers);
  return (
    <div className="flex justify-around mt-10">
            <div className="bg-green-600 text-white font-bold py-7 px-10 rounded">
                Last 28 Days Impression 
                <div className='text-2xl'>{impression? impression : 0}</div>
            </div>
            <div className="bg-green-600 text-white font-bold py-7 px-10 rounded">
                Account Engaged 
                <div className='text-2xl'>{engagement ? engagement :0}</div>
            </div>
            <div className="bg-green-600 text-white font-bold py-7 px-10 rounded">
                Total Followers 
                <div className='text-2xl'>{followers ? followers : 0}</div>
            </div>
        </div>
  )
}
Buttons.propTypes = {
    followers:PropTypes.number.isRequired,
    impression:PropTypes.number.isRequired,
    engagement:PropTypes.number.isRequired,
  }