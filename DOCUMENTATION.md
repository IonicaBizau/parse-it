## Documentation

You can see below the API reference of this module.

### `ParseIt(obj)`
The `ParseIt` class. It can be used to use the same data object but with different formats/arguments.

#### Params

- **Object** `obj`: An object containing the fields to replace.

### `parseIt(format, args)`
run
Replaces the fields in the format string with data coming from the data object.

#### Params

- **String** `format`: The format input.
- **Array** `args`: An array of arguments to be passed to the replace function (stored in the `obj` object).

#### Return
- **String** The result as string.

### `parseIt(format, obj, args)`
A wrapper around the `ParseIt` class. The `ParseIt` constructor is accessible using `parseIt.Parser`.

#### Params

- **String** `format`: The format input.
- **Object** `obj`: An object containing the fields to replace.
- **Array** `args`: An array of arguments to be passed to the replace function (stored in the `obj` object).

#### Return
- **String** The result as string.

