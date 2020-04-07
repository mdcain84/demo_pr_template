module.exports = {
    extends: ['@commitlint/config-conventional'],
    "rules": {
        "references-empty": [2, "never"],
        "subject-case": [2, "always", "sentence-case"],
		"footer-leading-blank": [0]
    },
    "parserPreset": {
        "parserOpts": {
            "issuePrefixes": ["JIRA-", "CESBASE-"]
        }
    }
};
