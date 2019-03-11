/**
 * WordController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const rp = require('request-promise');

module.exports = {
  define: function (req, res) {
    const word = req.body.vocabword;

    const options = {
      url: 'https://od-api.oxforddictionaries.com/api/v1/entries/en/' + word,
      headers: {
        'app_id': '3e23ba37',
        'app_key': '90da04772846856a4fc02a7146753d12'
      },
      json: true // Automatically parses the JSON string in the response
    };

    rp(options)
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err.statusCode);
    });
  }
};

