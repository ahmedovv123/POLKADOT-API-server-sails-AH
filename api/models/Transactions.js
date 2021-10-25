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

    blockHash: {
      type: 'string',
      columnName:'block_hash'
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

