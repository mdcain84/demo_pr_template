
const jiraProjects = 'NGSD|CESBASE';

const regex = new RegExp(`^(\w*)\((({jiraProjects})-\d*)\):\s(.*)$`);

module.exports = {
    extends: ['@commitlint/config-conventional'],
    parserPreset: './parser-preset',
    rules: {
        'scope-case': [2, 'always', 'upper-case'],
        'subject-case': [2, 'always', 'sentence-case']
    }
}
