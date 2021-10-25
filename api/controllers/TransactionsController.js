/**
 * TransactionsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  getTransactionsCount: function(req, res) {
    Transactions.count((err, count) => {
      if(err) {
        res.sendStatus(500, {error: 'Database error'});
      }

      res.json({result: count});
    });
  },

  getTransactionsFromBlock: function(req, res) {
    const blockHash = req.params.blockHash;
    Transactions.find({blockHash: blockHash}).exec((err, tx) => {
      if(err) {
        res.sendStatus(500, {error: 'Database error'});
      }

      res.json({result: tx});
    });

  },

  getTransactionByHash: function(req, res){
    const transactionHash = req.params.transactionHash;
    Transactions.find({hash: transactionHash}).exec((err, tx) => {
      if(err) {
        res.sendStatus(500, {error: 'Database error'});
      }

      res.json({result: tx});
    });
  },

  getXtransactionsAfterNth: function(req, res) {
    const x = req.params.x;
    const n = req.params.n;
    Transactions.find({
      id: {'<': n}
    }).limit(x)
    .exec((err, tx) => {
      if(err) {
        res.sendStatus(500, {error: 'Database error'});
      }

      res.json({result: tx});
    });

  }

};

