
const jiraProjects = 'NGSD|CESBASE';

const regex = new RegExp(`^(\w*)\((({jiraProjects})-\d*)\):\s(.*)$`);

module.exports = {
    extends: ['@commitlint/config-conventional'],
    parserPreset: {
        'parserOpts': {
            'headerPattern': regex,
            'headerCorrespondence': ['type', 'scope', 'ticket', 'subject']
        }
    },
    rules: {
        'scope-case': [2, 'always', 'upper-case'],
        'subject-case': [2, 'always', 'sentence-case']
    }
}
