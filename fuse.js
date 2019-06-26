
const {
    fusebox,
} = require("fuse-box");

fusebox({
    logging: {
        level: 'succinct',
    },
    target: 'server',
    entry: 'server/src/api-server.ts',
    modules: ['./server/node_modules'],
    tsConfig: './server/src/tsconfig.json',
    allowSyntheticDefaultImports: true,
    output: './server/dist/$name.js',
    devServer: false
}).runProd();

