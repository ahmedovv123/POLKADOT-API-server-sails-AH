/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  '/api/transactions/count' : 'Transactions/getTransactionsCount',
  '/api/transactions/block/:blockHash': 'Transactions/getTransactionsFromBlock',
  '/api/transactions/hash/:transactionHash': 'Transactions/getTransactionByHash',
  '/api/transactions/:x/:n': 'Transactions/getXtransactionsAfterNth',
  '/api/accounts/count':'Accounts/getAccountsCount',
  '/api/accounts/transactions/:accountId': 'Accounts/getAccountTransactions',
  '/api/accounts/transactions/count/:accountId': 'Accounts/getAccountTransactionsCount',
  '/api/accounts/balance/:accountId':'Accounts/getAccountBalance',
  '/api/blocks':'Blocks/getLastBlock',
  '/api/blocks/num/:blockNumber':'Blocks/getBlockHashByNumber',
  '/api/blocks/hash/:blockHash':'Blocks/getBlockByHash',
  '/api/blocks/:x/:n':'Blocks/getXBlocksAfterNth'


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/

};
