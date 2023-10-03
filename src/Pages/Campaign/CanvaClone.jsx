import "./CanvaClone.css";
import CreativeEditorSDK from '@cesdk/cesdk-js';
import { useEffect, useRef, useState } from 'react';
import { saveAs } from 'file-saver';
function CanvaClone({setEditedImage}) {
  const cesdk_container = useRef(null);
  const [image, setImage] = useState([])
  const [cesdk, setCesdk] = useState(null);

  const config = {
    // Enable local uploads in Asset Library
    callbacks: {
      onSave: (scene) => {
        window.alert('Save callback!');
        console.info(scene);
      },
      onExport: (blobs) => {
        window.alert('Export callback!');
        blobs.forEach((blob, index) => {
          const filename = `exported_image_${index}.png`;
          const imageUrl = URL.createObjectURL(blob); // Create a URL for the blob
          setEditedImage(imageUrl);
          saveAs(blob, filename);
        });
        return Promise.resolve();
      },
    },
    ui: {
      elements: {
        navigation: {
          action: {
            save: true,
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
        await instance.createDesignScene();

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
  // console.log(cesdk, image);
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