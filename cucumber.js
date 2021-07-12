let common = [
  'e2e/features/**/*.feature',
  '--require e2e/ts-node.setup.ts',
  '--require e2e/steps/**/*.ts',
  '--require e2e/support/**/*.ts',
  '--format progress-bar',
].join(' ');

const getWorldParams = () => {
  const params = {};

  return `--world-parameters ${JSON.stringify({ params })}`;
};

module.exports = {
  default: `${common} ${getWorldParams()}`,
};
