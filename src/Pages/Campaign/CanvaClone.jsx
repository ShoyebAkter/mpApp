import "./CanvaClone.css";
import CreativeEditorSDK from '@cesdk/cesdk-js';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

function CanvaClone({ setImageBlob, setEditedImage }) {
  const cesdk_container = useRef(null);
  const [cesdk, setCesdk] = useState(null);

  const config = {

    // Enable local uploads in Asset Library
    callbacks: {

      onExport: (blobs) => {
        console.log(blobs);
        window.alert('Export callback!');
        blobs.forEach((blob) => {
          // const filename = `exported_image_${index}.png`;
          const imageUrl = URL.createObjectURL(blob); // Create a URL for the blob
          setEditedImage(imageUrl);
          setImageBlob(blob);
          // saveAs(blob, filename);
        });
        return Promise.resolve();
      },
      onUpload: 'local'
      
      
    },
    ui: {
      elements: {
        navigation: {
          action: {
            export: true
          }
        }
      }
    }
  };
  useEffect(() => {
    if (!cesdk_container.current) return;

    let cleanedUp = false;
    let instance;
    CreativeEditorSDK.create(cesdk_container.current, config).then(
      async (_instance) => {
        instance = _instance;
        if (cleanedUp) {
          instance.dispose();
          return;
        }

        

        // Do something with the instance of CreativeEditor SDK, for example:
        // Populate the asset library with default / demo asset sources.
        await Promise.all([
          instance.addDefaultAssetSources(),
          instance.addDemoAssetSources({ sceneMode: 'Design' })
        ]);
        const sceneURL = `https://cdn.img.ly/packages/imgly/cesdk-js/latest/assets/templates/cesdk_business_card_1.scene`; // Replace with your scene URL.
        await instance.engine.scene.loadFromURL(sceneURL);

        setCesdk(instance);
      }
    );
    const cleanup = () => {
      cleanedUp = true;
      instance?.dispose();
      setCesdk(null);
    };
    return cleanup;
  }, [cesdk_container]);
  console.log(cesdk);
  return (
    <div>
      <div
        className="m-5"
        ref={cesdk_container}
        style={{ width: '70vw', height: '100vh' }}
      ></div>

    </div>
  );
}

export default CanvaClone;
CanvaClone.propTypes =
{
  setImageBlob: PropTypes.func.isRequired,
  setEditedImage: PropTypes.func.isRequired
}
