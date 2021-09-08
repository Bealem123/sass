/**
 * # JavaScript API
 *
 * Sass implementations that are available for use via JavaScript must expose
 * the following JavaScript API. As with the rest of this specification, they
 * must not add custom extensions that aren't shared across all implementations.
 *
 * > Having a shared, consistent API makes it easy for users to move between
 * > Sass implementations with minimal disruption, and for build system plugins
 * > to seamlessly work with multiple implementations.
 *
 * The JS API is specified as a TypeScript type declaration. Implementations
 * must adhere to this declaration and to the behavioral specifications written
 * in JSDoc comments on the declarations. Implementations may throw errors when
 * user code passes in values that don't adhere to the type declaration, but
 * unless otherwise indicated they may also handle these values in undefined
 * ways in accordance with the common JavaScript pattern of avoiding explicit
 * type checks. This must not be used as a way of adding custom extensions that
 * aren't shared across all implementations.
 *
 * Certain interfaces in the JS API are defined within the `legacy` directory,
 * indicating that they're part of the legacy Node Sass API. This API is
 * deprecated and implementations are not required to support it. However, at
 * least partial support is recommended for compatibility with older
 * applications and particularly build system plugins.
 *
 * As with other sections of this specification, the specification of the legacy
 * JS API is incomplete, and is added to *lazily*. This means that portions of
 * the spec—particularly the documentation comments that serve as a behavioral
 * specification—are only written when they're necessary as background for new
 * API proposals. */

export {
  CompileResult,
  compile,
  compileAsync,
  compileString,
  compileStringAsync,
} from './compile';
export {Exception} from './exception';
export {
  FileImporter,
  FileImporterResult,
  Importer,
  ImporterResult,
} from './importer';
export {Logger, SourceSpan, SourceLocation} from './logger';
export {
  CustomFunction,
  Options,
  OutputStyle,
  StringOptions,
  Syntax,
} from './options';
export {
  ListSeparator,
  SassArgumentList,
  SassBoolean,
  SassColor,
  SassFunction,
  SassList,
  SassMap,
  SassNumber,
  SassString,
  Value,
  sassFalse,
  sassNull,
  sassTrue,
} from './value';

// Legacy APIs
export {LegacyException} from './legacy/exception';
export {LegacyFunction, LegacyValue, types} from './legacy/function';
export {LegacyImporter} from './legacy/importer';
export {LegacyOptions} from './legacy/options';
export {LegacyResult, render, renderSync} from './legacy/render';