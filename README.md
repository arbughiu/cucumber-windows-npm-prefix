This respository demonstrates a small [issue in Cucucmber](https://github.com/cucumber/cucumber-js/issues/2274).

The bug shows the following error message generated from [install_validator.ts](https://github.com/cucumber/cucumber-js/blob/main/src/cli/install_validator.ts) 
when running a test script using `npm --prefix` on Windows:

```
It looks like you're running Cucumber from a global installation.
This won't work - you need to have Cucumber installed as a local dependency in your project.
See https://github.com/cucumber/cucumber-js/blob/main/docs/installation.md#invalid-installations
```

For example, using the `test` script in the [package.json](./package.json) provided:

On Mac
* `npm run test` - runs fine ✅
* `npm --prefix . run test` - runs fine ✅

On Windows

* `npm run test` - runs fine ✅
* `npm --prefix . run test` - shows the error message above ❌