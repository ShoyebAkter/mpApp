import "./CanvaClone.css";
import CreativeEditorSDK from '@cesdk/cesdk-js';
import { useEffect, useRef, useState } from 'react';
import { saveAs } from 'file-saver';
function CanvaClone() {
    const cesdk_container = useRef(null);
    const [cesdk, setCesdk] = useState(null);
    const config = {
        // Enable local uploads in Asset Library
        callbacks: { 
        onSave: (scene) => {
            window.alert('Save callback!');
            console.info(scene);
          },
          onExport: (blobs, options) => {
            window.alert('Export callback!');
            blobs.forEach((blob, index) => {
                const filename = `exported_image_${index}.png`;
                saveAs(blob, filename); // Assuming you have FileSaver.js included
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

    return (
        <div
        className="m-5"
        ref={cesdk_container}
        style={{ width:'70vw', height: '100vh' }}
      ></div>
    );
}

export default CanvaClone;