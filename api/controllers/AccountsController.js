module.exports = {
  getAccountsCount: function(req, res) {

    const query = 'SELECT COUNT(DISTINCT recipient)+COUNT(DISTINCT sender) AS count FROM transactions';
    Transactions.query(query, (err, result) => {
      if(err) {
        res.sendStatus(500, {error: 'Database error'});
      }
      res.json(result.rows);
    });
  },

  getAccountTransactions: function(req, res) {
    const accountId = req.params.accountId;
    Transactions.find({
      or : [
        { sender: accountId },
        { recipient: accountId }
      ]
    })
        .exec((err, result) => {
          if(err) {
            res.sendStatus(500, {error: 'Database error'});
          }
          res.json({result: result});

        });
  },

  getAccountTransactionsCount: async function(req, res) {
    const accountId = req.params.accountId;

    Transactions.count({
      or : [
        { sender: accountId },
        { recipient: accountId }
      ]
    }, (err, count) => {
      if(err) {
        res.sendStatus(500, {error: 'Database error'});
      }

      res.json({result: count});
    });

  },

  getAccountBalance: async function(req, res) {
    const accountId = req.params.accountId;

    const result = await nodeService.getNodeConnection().then(api => api.query.system.account(accountId));
    res.json({result: result});
  }
};
