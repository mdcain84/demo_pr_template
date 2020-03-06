module.exports = {
    extends: ['@commitlint/config-conventional'],
    "rules": {
        "references-empty": [2, "never"],
        "subject-case": [2, "always", "sentence-case"],
    },
    "parserPreset": {
        "parserOpts": {
            "issuePrefixes": ["NGSD-", "CESBASE-"]
        }
    }
};
