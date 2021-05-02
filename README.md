# GitHub Actions Problem Matcher Typings

[![CI](https://github.com/xt0rted/github-actions-problem-matcher-typings/actions/workflows/ci.yml/badge.svg)](https://github.com/xt0rted/github-actions-problem-matcher-typings/actions/workflows/ci.yml)
![npm](https://img.shields.io/npm/v/github-actions-problem-matcher-typings)

A set of typings for the problem matcher file format based on the docs at [actions/toolkit](https://github.com/actions/toolkit/blob/main/docs/problem-matchers.md).
You can use these to help with testing your regex or if you need to load the file and work with it inside of your action.

## Usage

```ts
import { problemMatcher as problemMatcherJson } from "../.github/problem-matcher.json";
import { ProblemMatcher } from "github-actions-problem-matcher-typings";

const problemMatcher: ProblemMatcher = problemMatcherJson[0];

describe("problemMatcher", () => {
  it("has the correct name", () => {
    expect(problemMatcher.owner).toEqual("your-matcher");
  });
});
```

To load the problem matcher as a module you'll need to update your `tsconfig.json` like so:

```json
{
  "compilerOptions": {
    "resolveJsonModule": true /* Allows for importing .json files as modules. */
  }
}
```

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
