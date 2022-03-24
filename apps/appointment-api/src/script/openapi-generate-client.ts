const execSync = require('child_process').execSync;

const generatePath = './libs/api';
//const models = './../../../../libs/api/src/lib/models';
const services = './../../../../libs/api/src/lib/services';
const modelsts = './../../../../libs/api/src/lib/models.ts';
const servicests = './../../../../libs/api/src/lib/services.ts';

/* console.log('removing models...');
execSync(`rm -rf' ${models}`); */
/* console.log('removing services...');
execSync(`rm -rf' ${services}`);
console.log('removing models ts...');
execSync(`rm -rf' ${modelsts}`);
console.log('removing services ts...');
execSync(`rm -rf' ${servicests}`);
 */
/* const output = execSync(
  `npx @openapitools/openapi-generator-cli generate -g typescript-angular -i src/swagger/generated-api.json -o ${generatePath} --additional-properties=usePromises=true`,
  { encoding: 'utf-8' }
); */
const output = execSync(
  `npx ng-openapi-gen --input apps/appointment-api/src/swagger/generated-api.json --output ${generatePath} `,
  { encoding: 'utf-8' }
);
console.log(output);
