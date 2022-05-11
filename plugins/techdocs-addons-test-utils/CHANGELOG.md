# @backstage/plugin-techdocs-addons-test-utils

## 1.0.0-next.2

### Major Changes

- 0ad901569f: The TechDocs Addon framework is now generally available.

### Patch Changes

- 614bd96e2a: Fixed a type bug preventing `buildAddonsInTechDocs().withApis()` from being called with multiple partial API implementations.
- Updated dependencies
  - @backstage/core-components@0.9.4-next.3
  - @backstage/core-app-api@1.0.2-next.2
  - @backstage/plugin-techdocs-react@1.0.0-next.3
  - @backstage/plugin-techdocs@1.1.1-next.4

## 0.1.0-next.1

### Patch Changes

- f84e0e2818: Fixed a bug preventing testing of TechDocs Addons whose dom contained `<img />` tags.
- 7c398c6473: The `TechDocsAddonTester` class may now be extended if custom test configuration is needed.
- Updated dependencies
  - @backstage/core-components@0.9.4-next.1
  - @backstage/plugin-techdocs@1.1.1-next.2
  - @backstage/plugin-techdocs-react@0.1.1-next.2
  - @backstage/plugin-catalog@1.2.0-next.2
  - @backstage/plugin-search-react@0.2.0-next.2
  - @backstage/core-app-api@1.0.2-next.1
  - @backstage/core-plugin-api@1.0.2-next.1
  - @backstage/integration-react@1.1.0-next.2
  - @backstage/test-utils@1.1.0-next.2

## 0.1.0-next.0

### Minor Changes

- 52fddad92d: Introducing a package with utilities to help test TechDocs Addons.

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.9.4-next.0
  - @backstage/test-utils@1.1.0-next.1
  - @backstage/core-plugin-api@1.0.2-next.0
  - @backstage/plugin-catalog@1.2.0-next.1
  - @backstage/plugin-search-react@0.2.0-next.1
  - @backstage/plugin-techdocs-react@0.1.1-next.1
  - @backstage/plugin-techdocs@1.1.1-next.1
  - @backstage/integration-react@1.1.0-next.1
  - @backstage/core-app-api@1.0.2-next.0
