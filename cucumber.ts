import { WorldParameters } from 'world';

require('dotenv').config();

const worldParameters: WorldParameters = {
  searchText: String(process.env.searchText),
};

export default {
  import: [`./step-definitions/**/*.steps.ts`, `world.ts`, `hooks.ts`],
  paths: [`./features/**/*.feature`],
  worldParameters,
  publishQuiet: true,
};
