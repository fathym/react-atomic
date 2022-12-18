const { exec } = require('child_process');

const pkg = require('../package.json');

const pkgName = `${pkg.name}-storybook`;

exec(
  `cd ./storybook-static && npm pkg set name=${pkgName} && cd ..`,
  (err, out, err2) => {
    if (err) {
      console.log(err);
    } else if (out) {
      console.log(out);
    } else if (err2) {
      console.log(err2);
    }
  }
);

exec(`Echo "Storybook package renamed to ${pkgName}"`);
