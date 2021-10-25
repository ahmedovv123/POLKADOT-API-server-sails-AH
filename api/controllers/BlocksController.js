module.exports = {
    getLastBlock: async function(req, res) {
        const result = await nodeService.getNodeConnection().then(api => api.rpc.chain.getBlock());
        res.json({result: result});
    },

    getBlockHashByNumber: async function(req, res) {
        const blockNumber = req.params.blockNumber;
        const result = await nodeService.getNodeConnection().then(api => api.rpc.chain.getBlockHash(blockNumber));
        res.json({result: result});
    },

    getBlockByHash: async function(req, res) {
        const blockHash = req.params.blockHash;
        const result = await nodeService.getNodeConnection().then(api => api.rpc.chain.getBlock(blockHash));
        res.json({result: result})
    },

    getXBlocksAfterNth: async function(req, res) {
        const x = req.params.x;
        const n = req.params.n;

        const result = await nodeService.getNodeConnection().then(async api => {
            let i = 1
            const blocks = []
      
            while (i <= x) {
              const tempBlock = await api.rpc.chain.getBlockHash(n - i)
              blocks.push(tempBlock)
              i++
            }
      
            return blocks;
        })

        res.json({result: result});
    }

}