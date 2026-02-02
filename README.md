# Buffer Collections

A Node.js library to handle *Map<Buffer, V>* and *Set\<Buffer\>* collections correctly, comparing *Buffer* keys or items as values (Buffer content) instead of the default comparison by reference.

## Installation

```
npm install buffer-collections
```

## Usage

```typescript

import { BufferMap } from 'buffer-collections'

const b1 = Buffer.from('CAFE8BCD77AE', 'hex')
const m1 = new BufferMap<string>()
m1.set( b1, 'Some value')

const b2 = Buffer.from(b1) // creates a copy of content of b1, but a different reference

console.log( m1.has(b2)) // true

```

## License

MIT
