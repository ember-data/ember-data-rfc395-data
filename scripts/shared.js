'use strict';

function sortByModule(a, b) {
  return compare(a.module, b.module);
}

function compare(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}

function generateImportForMapping(mapping) {
  let afterPackage = mapping.module;
  let afterExportName = mapping.export;
  let afterIdentifier = mapping.localName || mapping.export;

  if (afterExportName === 'default') {
    return `import ${afterIdentifier} from '${afterPackage}';`;
  } else if (afterExportName !== afterIdentifier) {
    return `import { ${afterExportName} as ${afterIdentifier} } from '${afterPackage}';`;
  } else {
    return `import { ${afterExportName} } from '${afterPackage}';`;
  }
}

module.exports = {
  sortByModule,
  compare,
  generateImportForMapping,
};
