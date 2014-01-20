# bemhtml-lint

Tool for checking syntax of [bemhtml](http://bem.info/libs/bem-core/1.0.0/bemhtml/rationale/) template language. For now, checks
only for parser errors.

## Installation

Install using `npm`:

```
npm install -g bemhtml-lint
```

## Usage

Single file:

`bemhtml-lint block/block.bemhtml`

Multiple files:

`bemhtml-lint block1/block1.bemhtml block2/block2.bemhtml`

Glob pattern:

`bemhtml-lint *.bemhtml`

## Editors integration

Vim: use my fork of [Syntastic](https://github.com/SevInf/syntastic).

## License

Distributed under the MIT License.
