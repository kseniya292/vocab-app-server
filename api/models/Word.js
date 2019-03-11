/**
 * Word.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    definition: {
      type: 'json'
    },
    example: {
      type: 'string'
    },
    lexicalCategory: {
      type: 'string'
    }
  },

};

