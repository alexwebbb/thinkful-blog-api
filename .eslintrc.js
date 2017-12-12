module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    // this project requires node, eslint and eslint node plugin
    "plugins": ["node"],
    "extends": "eslint:recommended",
    "plugins": [
        "requirejs"
    ],
    "rules": {
        "indent": [
            "error",
            4,
            { "SwitchCase": 1 }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};