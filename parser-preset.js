const jiraProjects = 'NGSD|CESBASE';

const regex = new RegExp(`^(\w*)\((({jiraProjects})-\d*)\):\s(.*)$`);

module.exports = {
  parserOpts: {
    headerPattern: regex,
  }
};