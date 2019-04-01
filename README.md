ember-data-rfc395-data
==============================================================================

JSON data for [RFC #395](https://github.com/emberjs/rfcs/blob/master/text/0395-ember-data-packages.md)

### Related Projects

- [babel-plugin-ember-modules-api-polyfill](https://github.com/ember-cli/babel-plugin-ember-modules-api-polyfill)
- [ember-modules-codemod](https://github.com/ember-cli/ember-modules-codemod)
- [ember-rfc176-data](https://github.com/ember-cli/ember-rfc176-data) for inspiration

## Contents

### Globals to New Modules 

| Before         | After                                            |
| ---            | ---                                              |
| `DS.attr`      | `import { attr } from '@ember-data/model';`      |
| `DS.belongsTo` | `import { belongsTo } from '@ember-data/model';` |
| `DS.hasMany`   | `import { hasMany } from '@ember-data/model';`   |
| `DS.Model`     | `import Model from '@ember-data/model';`         |

### New Modules to Globals

#### `@ember-data/model`
| Module                                           | Global         |
| ---                                              | ---            |
| `import Model from '@ember-data/model';`         | `DS.Model`     |
| `import { attr } from '@ember-data/model';`      | `DS.attr`      |
| `import { belongsTo } from '@ember-data/model';` | `DS.belongsTo` |
| `import { hasMany } from '@ember-data/model';`   | `DS.hasMany`   |


### Scripts

The tables above can be generated using the scripts in the `scripts` folder, e.g.:

```
node scripts/generate-markdown-table.js
```


## Contributing

### mappings.json format

The `mappings.json` file contains an array of entries with the following format:

```ts
interface Mapping {
  /**
    The globals based API that this module and export replace.
   */
  global: string;

  /**
    The module to import.
   */
  module: string;

  /**
    The export name from the module.
   */
  export: string;

  /**
    `true` if this module / export combination has been deprecated.
   */
  deprecated: boolean;

  /**
    The recommended `localName` to use for a given module/export. Only present
    when a name other than the value for `export` should be used.

    This is useful for things like ember-modules-codemod or eslint-plugin-ember
    so that they can provide a nice suggested import for a given global path usage.
   */
  localName?: string;

  /**
    When this mapping is deprecated it may include a replacement module/export which
    should be used instead.
  */
  replacement?: {
    module: string;
    export: string;
  }
}
```
