import Airtable from 'airtable';

let AIRTABLE_API_KEY = 'patPC7878Cv5dIPvv.4c8ecd0242b00c085d008857de80e341716de446b42ead4bc8102f001993b771';


let base;
if (AIRTABLE_API_KEY !== '') {
  base = new Airtable({
    apiKey: AIRTABLE_API_KEY
  }).base('appHAZoD6Qj3teOmr');
}

export const queryAirtable = ({ query, perPage }) => {
  let records = [];
  return new Promise(function (resolve) {
    base('Asset sources')
      .select({
        maxRecords: perPage || 100,
        view: 'Grid view',
        filterByFormula: query
          ? "AND({Name} != '', SEARCH(LOWER('" + query + "'), LOWER({Name})))"
          : "{Name} != ''"
      })
      .eachPage(
        function page(pageRecords, fetchNextPage) {
          pageRecords.forEach(function (record) {
            const asset = {
              name: record.get('Name'),
              image: record.get('Image')[0]
            };
            records = [...records, asset];
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
          resolve({ results: records });
        }
      );
  });
};

export const findAirtableAssets = async (type, queryData) => {
  if (AIRTABLE_API_KEY === '' && !window.airtableWarning) {
    window.airtableWarning = true;
    alert(
      `Please provide your airtable API key.`
    );
    return;
  }

  const response = await queryAirtable({
    query: queryData.query,
    page: queryData.page,
    perPage: queryData.perPage
  });
  const { results } = response;

  return {
    assets: results.map(translateToAssetResult),
    // Airtable does not return a total number of assets.
    // With a high number we force the button to display 'more'
    total: 99999,
    currentPage: 1,
    nextPage: undefined
  };
};

function translateToAssetResult({ image }) {
  return {
    id: image.id,
    type: 'ly.img.image',
    locale: 'en',
    label: image.name ?? undefined,

    thumbUri: image.thumbnails.large.url,

    size: {
      width: image.width,
      height: image.height
    },

    meta: {
      uri: image.url
    },

    context: {
      sourceId: 'airtable'
    }
  };
}