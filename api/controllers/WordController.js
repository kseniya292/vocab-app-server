/**
 * WordController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const rp = require('request-promise');

module.exports = {
  define: function (req, res) {
    const vocabword = req.body.vocabword;

    const options = {
      url: 'https://od-api.oxforddictionaries.com/api/v1/entries/en/' + vocabword,
      headers: {
        'app_id': '3e23ba37',
        'app_key': '90da04772846856a4fc02a7146753d12'
      },
      json: true // Automatically parses the JSON string in the response
    };

    rp(options)
    .then(response => {
      let word = {};
      word.name = vocabword;
      word.type = response.results[0].lexicalEntries[0].lexicalCategory;
      word.definition = [];
      word.examples = [];
      let senses = response.results[0].lexicalEntries[0].entries[0].senses;

      Object.values(senses).forEach(value => {
        word.definition.push(value.definitions[0]);
        word.examples.push(value.examples[0].text);
      });

      res.send(word);
    })
    .catch(err => {
      res.send(err.statusCode);
    });
  }
};

