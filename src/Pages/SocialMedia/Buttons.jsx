import PropTypes from 'prop-types'
export const Buttons = ({followers,impression,engagement}) => {
    // console.log(likes.data[0].values[0].value);
    // console.log(followers);
  return (
    <div className="flex justify-around mt-10">
            <button className="bg-green-600 text-white font-bold py-7 px-10 rounded">
                Last 28 Days Impression {impression? impression : 0}
            </button>
            <button className="bg-green-600 text-white font-bold py-7 px-10 rounded">
                Account Engaged {engagement ? engagement :0}
            </button>
            <button className="bg-green-600 text-white font-bold py-7 px-10 rounded">
                Total Followers {followers ? followers : 0}
            </button>
        </div>
  )
}
Buttons.propTypes = {
    followers:PropTypes.number.isRequired,
    impression:PropTypes.number.isRequired,
    engagement:PropTypes.number.isRequired,
  }