/**
 * Transactions.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    hash: {
      type: 'string',
    },

    isSigned: {
      type: 'boolean',
      columnName: 'issigned'
    },

    recipient: {
      type: 'string'
    },

    amount: {
      type: 'string'
    },

    method: {
      type: 'string'
    },

    nonce: {
      type: 'string'
    },

    signature: {
      type: 'string'
    },

    sender: {
      type: 'string'
    },

    block_hash: {
      type: 'string'
    },

    createdAt: {
      type: 'string',
      columnType: 'date',
      columnName: 'createdat'
    },
    updatedAt: {
      type: 'string',
      columnType: 'date',
      columnName: 'updatedat'
    }

  },

};

