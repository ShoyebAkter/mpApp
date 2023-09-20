import "./CanvaClone.css";
import CreativeEditorSDK from '@cesdk/cesdk-js';
import { useEffect, useRef } from 'react';
import { findAirtableAssets } from './airtableAssetLibrary';
import { findUnsplashAssets } from './unsplashAssetLibrary';


import CreativeEngine from 'https://cdn.img.ly/packages/imgly/cesdk-engine/1.16.0/index.js';

const config = {
  baseURL: 'https://cdn.img.ly/packages/imgly/cesdk-engine/1.16.0/assets'
};

function CanvaClone() {
  const cesdkContainer = useRef(null);
  const assetLibrary = 'airtable';

  CreativeEngine.init(config).then(async (engine) => {
    // highlight-save
    engine.scene.saveToArchive().then((blob) => {
      // highlight-create-form-data
      const formData = new FormData();
      formData.append("file", blob);
      fetch("/upload", {
        method: "POST",
        body: formData
      });
      // highlight-create-form-data
    }).catch((error) => {
      console.error('Save failed', error)
    });
    // highlight-save
  });
  useEffect(() => {
    const externalAssetSources = {
      ...(assetLibrary === 'airtable' && {
        airtable: {
          findAssets: findAirtableAssets,
          credits: {
            name: 'Airtable',
            url: 'https://airtable.com/shr4x8s9jqaxiJxm5/tblSLR9GBwiVwFS8z?backgroundColor=orange'
          }
        }
      }),
      ...(assetLibrary === 'unsplash' && {
        unsplash: {
          findAssets: findUnsplashAssets,
          credits: {
            name: 'Unsplash',
            url: 'https://unsplash.com/'
          },
          license: {
            name: 'Unsplash license (free)',
            url: 'https://unsplash.com/license'
          }
        }
      })
    };

    // path to the local image to load into CE.SDK
    // const customImagePath = `${window.location.protocol + "//" + window.location.host}/resources/programming.png`;

    let cesdk;

    let config = {
      // loading the business card template as default template
      initialSceneURL: `https://cdn.img.ly/packages/imgly/cesdk-js/latest/assets/templates/cesdk_business_card_1.scene`,
      // loading the external asset sources
      assetSources: {
        // loading the AirTable or Unsplash asset library
        ...externalAssetSources,
        // loading a custom image into CE.SDK
        custom: {
          findAssets: () => {
            // return {
            //   assets: [{
            //     id: "custom-image-1",
            //     type: 'ly.img.image',
            //     locale: 'en',
            //     label: "Programming",
            //     thumbUri: customImagePath,
            //     size: {
            //       width: 512,
            //       height: 512
            //     },
            //     meta: {
            //       uri: customImagePath
            //     },
            //     context: {
            //       sourceId: 'custom'
            //     },
            //     credits: {
            //       name: "Freepik",
            //       url: "https://www.flaticon.com/free-icon/programming_1208884?related_id=1208782&origin=search"
            //     }
            //   }],
            //   currentPage: 1,
            //   total: 1,
            //   nextPage: undefined
            // };
          }
        }
      },
      // translating the labels associates with the external asset sources
      i18n: {
        en: {
          'libraries.airtable.label': 'Airtable',
          'libraries.unsplash.label': 'Unsplash',
          'libraries.custom.label': 'Custom'
        }
      },
      // initializing CE.SDK with a few templates
      presets: {
        templates: {
          postcard_1: {
            label: 'Postcard Design',
            scene: `https://cdn.img.ly/packages/imgly/cesdk-js/latest/assets/templates/cesdk_postcard_1.scene`,
            thumbnailURL: `https://cdn.img.ly/packages/imgly/cesdk-js/latest/assets/templates/cesdk_postcard_1.png`
          },
          postcard_2: {
            label: 'Postcard Tropical',
            scene: `https://cdn.img.ly/packages/imgly/cesdk-js/latest/assets/templates/cesdk_postcard_2.scene`,
            thumbnailURL: `https://cdn.img.ly/packages/imgly/cesdk-js/latest/assets/templates/cesdk_postcard_2.png`
          },
          business_card_1: {
            label: 'Business card',
            scene: `https://cdn.img.ly/packages/imgly/cesdk-js/latest/assets/templates/cesdk_business_card_1.scene`,
            thumbnailURL: `https://cdn.img.ly/packages/imgly/cesdk-js/latest/assets/templates/cesdk_business_card_1.png`
          },
          instagram_photo_1: {
            label: 'Instagram photo',
            scene: `https://cdn.img.ly/packages/imgly/cesdk-js/latest/assets/templates/cesdk_instagram_photo_1.scene`,
            thumbnailURL: `https://cdn.img.ly/packages/imgly/cesdk-js/latest/assets/templates/cesdk_instagram_photo_1.png`
          },
          instagram_story_1: {
            label: 'Instagram story',
            scene: `https://cdn.img.ly/packages/imgly/cesdk-js/latest/assets/templates/cesdk_instagram_story_1.scene`,
            thumbnailURL: `https://cdn.img.ly/packages/imgly/cesdk-js/latest/assets/templates/cesdk_instagram_story_1.png`
          },
          poster_1: {
            label: 'Poster',
            scene: `https://cdn.img.ly/packages/imgly/cesdk-js/latest/assets/templates/cesdk_poster_1.scene`,
            thumbnailURL: `https://cdn.img.ly/packages/imgly/cesdk-js/latest/assets/templates/cesdk_poster_1.png`
          },
          presentation_4: {
            label: 'Presentation',
            scene: `https://cdn.img.ly/packages/imgly/cesdk-js/latest/assets/templates/cesdk_presentation_1.scene`,
            thumbnailURL: `https://cdn.img.ly/packages/imgly/cesdk-js/latest/assets/templates/cesdk_presentation_1.png`
          },
          collage_1: {
            label: 'Collage',
            scene: `https://cdn.img.ly/packages/imgly/cesdk-js/latest/assets/templates/cesdk_collage_1.scene`,
            thumbnailURL: `https://cdn.img.ly/packages/imgly/cesdk-js/latest/assets/templates/cesdk_collage_1.png`
          }
        }
      },
    };
    if (cesdkContainer.current) {
      CreativeEditorSDK.init(cesdkContainer.current, config).then(
        (instance) => {
          cesdk = instance;
        }
      );
    }

    return () => {
      if (cesdk) {
        cesdk.dispose();
      }
    };
  }, [cesdkContainer, assetLibrary]);

  return (
    <div className="caseContainer m-5">
      <div className="wrapper">
        <div ref={cesdkContainer} className="cesdk"></div>
      </div>
    </div>
  );
}

export default CanvaClone;