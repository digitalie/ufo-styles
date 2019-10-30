const config = {
    presets: [
        ['@babel/env', { targets: { node: '10' } }]
    ],
}

// if (process.env.NODE_ENV === 'test') {}

module.exports = config
