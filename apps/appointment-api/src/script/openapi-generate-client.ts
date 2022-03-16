const execSync = require('child_process').execSync;

const generatePath = './libs/api';

console.log('removing generated/openapi directory...');
execSync(`rm -rf ${generatePath}`);

/* const output = execSync(
  `npx @openapitools/openapi-generator-cli generate -g typescript-angular -i src/swagger/generated-api.json -o ${generatePath} --additional-properties=usePromises=true`,
  { encoding: 'utf-8' }
); */
const output = execSync(
  `npx ng-openapi-gen --input apps/appointment-api/src/swagger/generated-api.json --output ${generatePath} `,
  { encoding: 'utf-8' }
);
console.log(output);
