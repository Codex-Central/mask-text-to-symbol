# mask-text-to-symbol

Takes a string as input and returns a new string with all characters replaced by an specified symbol.

## Installation

> `npm install @codexcentral/mask-text-to-symbol`

## Usage

### 1. Importing...

```javascript
import { maskTextToSymbol } from "@codexcentral/mask-text-to-symbol";
```

### 2. Call the functions

#### Example with default symbol

```javascript
  const text = "password";
  const password = maskTextToSymbol({ text });
  console.log(password);
  // { original: 'password', masked: '********' }
```

#### Example with symbol

```javascript
  const text = 'password';
  const password = maskTextToSymbol({ text, symbol: 'a' });
  console.log(password);
  // { original: 'password', masked: 'aaaaaaaa'}
```

### Attributes

| Attribute  | Type     | Mandatory                               |
| ---------- | -------- | --------------------------------------- |
| text | `string` | true                                    |
| symbol | `number` | false (default: `*`)                       |



## Wrapper function as a Helper (optional)
### 1. Import the function

```javascript
import { maskTextToSymbol, TMaskTextToSymbol } from "@codexcentral/mask-text-to-symbol";
```

### 2. Create the Helper function

```javascript
const maskTextToSymbolHelper = ({ text, symbol }: TMaskTextToSymbol) => {
  return maskTextToSymbol({ text, symbol });
};
```



# Credits

These code was written by [Roberto Silva Z.](https://www.linkedin.com/in/robertosilvazuniga/)
