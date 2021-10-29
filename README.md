# Snowpact eslint config

## Installation

```shell script
yarn add @snowpact/eslint-config -D
```

## Usage

### React
Using `.eslintrc.json`:
```json
{
  "extends": "@snowpact/eslint-config/react"
}
```

Using `.eslintrc.js`:
```javascript
module.exports = {
  extends: '@snowpact/eslint-config/react'
}
```

and in `package.json` :

```json
"devDependencies": {
  "@snowpact/eslint-config": "^1.1.3",
  "eslint": "^7.32.0",
  "prettier": "^2.4.1"
},
```