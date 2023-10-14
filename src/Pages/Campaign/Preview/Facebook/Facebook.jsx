import { RWebShare } from "react-web-share";
import PropTypes from 'prop-types'
export const Facebook = ({ imageBlob }) => {
    console.log(imageBlob);

    return (
        <div>
            <RWebShare
                data={{
                    files: [new File([imageBlob], 'image.jpg', { type: 'image/jpeg' })],
                    
                    title: 'Image Title',

                }}
                data2={{
                    text:'Hello',
                    title:'Image Title'
                }}
                onClick={() => console.log("shared successfully!")}
            >
                <button>Share 🔗</button>
            </RWebShare>
        </div>
    )
}
Facebook.propTypes = {
    imageBlob: PropTypes.object.isRequired,
}