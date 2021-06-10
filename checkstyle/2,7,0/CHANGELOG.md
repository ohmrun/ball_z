# Version History

## dev branch / next version (2.x.x)

## version 2.7.0 (2020-12-23)

- **Breaking Change** replaced `EnforceVarTypeHint` with `VarTypeHint` check ([#500](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/500))
- Added support for final in `MagicNumber`, fixes [#494](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/494) ([#495](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/495))
- Fixed handling `OBJECT_DECL` token in `RightCurly`, fixes [#496](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/496) ([#497](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/497))
- Reorganised build files ([#498](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/498))
- Refactored for tokentree API change ([#500](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/500) + [#501](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/501))
- Updated haxeparser lib with latest syntax changes ([#502](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/502))
- Retired Haxe 3.4.7 compile support ([#502](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/502))

## version 2.6.1 (2019-12-17)

- Added `allowFinal` setting to `VariableInitialisation`, fixes [#491](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/491) ([#492](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/492))
- Changed message of `Final` check when detecting `public static var` ([#493](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/493))
- Changed message of `ModifierOrder` check to include actual and expected modifier order ([#493](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/493))

## version 2.6.0 (2019-12-01)

- **Breaking Change** changed `MethodLength.countEmpty` into `ignoreEmptyLines` ([#486](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/486))
- New check `CodeSimilarity` to check for similar or identical code blocks ([#479](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/479) + [#480](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/480) + [#484](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/484) + [#486](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/486) + [#488](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/488))
- New check `EnforceVarTypeHint` to enforce type hints for all variables and finals, fixes [#464](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/464) ([#481](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/481) + [#482](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/482))
- New check `AvoidIdentifier` marks identifiers to avoid ([#483](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/483))
- New check `ArrowFunction` to check for curlies, nested functions and returns in arrow functions ([#484](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/484))
- New check `NestedControlFlow` to check for nested control flow expressions (e.g. `if`, `for`, `while`, `do/while`, `switch` and `try`) ([#485](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/485))
- Added coverage upload to codeclimate ([#478](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/478))
- Added `ignoreEmptyLines` in `FileLengthCheck` to ignore empty lines (default = true) ([#486](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/486))
- Added support for final in `DocCommentStyle` and `FieldDocComment` checks ([#487](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/487))
- Added suggestion to use `final` for `public static var` fields in `Final` check ([#487](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/487))
- Added ringbuffer for similarity hashes allowing vscode extension (and others) to manage cache ([#488](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/488))
- Changed default value for `max` in `FileLengthCheck` to 1000 ([#486](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/486))
- Changed `MethodLength` check to use tokentree ([#486](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/486))
- Changed reported position for `FieldDocComment` and `MethodLength` to only include function signature ([#487](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/487))
- Changed `Dynamic` check implementation to tokentree, now only reports token location ([#489](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/489))
- Fixed range exclusion to allow excluding construtor (`new`) ([#479](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/479))
- Fixed reported positions for `FieldDocComment`, `MethodLength`, `ParameterNumber`, `RedundantModifier` and `ReturnCount` checks ([#488](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/488))
- Refactored build system to use lix ([#478](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/478))
- Refactored / renamed `AvoidInlineConditionals` to `AvoidTernaryOperator` ([#479](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/479))
- Refactored / renamed `InlineFinal` to `Final` ([#487](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/487))

## version 2.5.0 (2019-10-10)

- **Breaking Change** split `OperatorWhitespaceCheck.functionArgPolicy` into `arrowFunctionPolicy`, `oldFunctionTypePolicy` and `newFunctionTypePolicy` [#467](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/467)
- **Breaking Change** using `--` for long options in cli ([#472](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/472))
- New check BlockBreakingConditional ([#471](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/471))
- New check InlineFinal ([#472](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/472))
- Added `afterDocCommentField` to ExtendedEmptyLinesCheck ([#469](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/469))
- Added thread support for eval target ([#469](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/469))
- Added `allowTrailingComma` to SeparatorWhitespaceCheck and WhitespaceAfterCheck ([#470](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/470))
- Added `FINAL` to ModifierOrder check default ([#472](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/472))
- Added NodeJS detection to launch NodeJS version if available ([#475](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/475))
- Fixed enum abstract detection in MagixNumber check, fixes [#104](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/104) ([#449](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/449))
- Fixed indentation of `)`, fixes [#450](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/450) ([#451](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/451))
- Fixed typedef extension (Haxe 3.x) [#452](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/452)
- Fixed parentheses with dot [#454](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/454)
- Fixed double for [#455](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/455)
- Fixed indentation in brackets [#456](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/456)
- Fixed return indentation [#457](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/457)
- Fixed indentation of arrow [#459](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/459)
- Fixed position change of semicolon [#460](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/460)
- Fixed TypeDocCommentCheck with conditionals, fixes [#465](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/465) ([#467](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/467))
- Fixed suppression of UnnecessaryConstructor, fixes [#466](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/466) ([#467](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/467))
- Fixed Java regexp issue in IndentationCheck ([#468](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/468))
- Fixed empty lines between types with conditionals ([#469](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/469))
- Fixed empty lines before comments with conditionals ([#472](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/472))
- Fixed EFunction changes in Haxe 4rc4 ([#474](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/474))
- Fixed null pointer references for C++ ([#476](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/476))
- Changed return block indentation [#453](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/453)
- Changed applied formatter [#461](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/461)
- Refactored coverage reporting [#462](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/462)

## version 2.4.2 (2018-07-01)

- New check DocCommentStyle [#440](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/440)
- New check FieldDocComment, fixes [#87](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/87) ([#442](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/442) + [#444](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/444))
- New check TypeDocComment [#440](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/440)
- New check RedundantAccessMeta, fixes [#193](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/193) ([#445](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/445))
- New check RedundantAllowMeta, fixes [#193](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/193) ([#445](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/445))
- Added relaxed mode to ConfigParser, fixes [#441](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/441) ([#443](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/443))
- Fixed handling of comments between types in ExtendedEmptyLines [#440](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/440)
- Fixed unittest and coverage reporting for Haxe 4 [#442](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/442)
- Fixed indentation calculation for functions bodys without curly braces [#443](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/443)
- Fixed segmentaion faults in NeedBraces and CatchParameterName checks [#443](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/443)
- Fixed reported position of EmptyBlock check [#444](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/444)
- Fixed BrOpen detection in NeedBraces check [#446](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/446)
- Changed message of NestedForLoop check [#443](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/443)
- Changed autodetection for nested for/if/try checks to start at zero [#444](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/444)
- Refactored `Checker.getLinePos` to use binary search, reduces runtime from O(N/2) to O(log N) [#439](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/439)

## version 2.4.1 (2018-06-14)

- Added JSON schemas for `checkstyle.json` and `checkstyle-exclude.json` file formats [#431](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/431) +  [#432](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/432) + [#433](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/433)
- Added code documentation [#433](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/433)
- Added message codes to help with vscode-checkstyle quickfixes [#436](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/436)
- Added `TIntersection` handling [#436](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/436)
- Added `buildJS.hxml`
- Fixed reported character positions [#435](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/435)
- Changed default policy of ExtendedEmptyLines check to `upto` [#434](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/434)
- Moved token tree into separate library [#434](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/434)
- Release of "Haxe Checkstyle" extension for vscode

## version 2.4.0 (2018-06-02)

- New check ExtendedEmptyLines [#426](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/426) + [#427](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/427)
- Added check's names to text output [#420](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/420)
- Added version number to configuration file [#422](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/422)
- Added ranges to exclude configuration, fixes [#120](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/120) ([#424](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/424))
- Fixed handling of relative paths when using `extendsConfigPath` [#420](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/420)
- Fixed detection of absolute paths when using `extendsConfigPath` [#422](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/422)
- Fixed reported position of Indentation check [#421](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/421)
- Fixed Haxe 4 compilation and reenabled Travis CI development build [#423](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/423) + [#425](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/425)
- Fixed Codeclimate reporter output for C++ target [#428](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/428)
- Fixed segmentation fault when checking zero length files [#428](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/428)
- Improved if / else detection of RightCurly check [#421](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/421)
- Improved support for eval target and Haxe 4 [#423](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/423)
- Refactored configuration parser [#420](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/420)
- Refactored check exclusion handling [#424](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/424)
- Refactored comment placement in token tree [#429](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/429)
- Cleanup `checkstyle.json` [#427](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/427)

## version 2.3.1 (2018-05-16)

- New command line option `-show-parser-errors` to include parser errors into checkstyle results (default: off) [#413](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/413)
- Added more checks for automatic coding style detection [#414](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/414) + [#417](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/417)
- Fixed handling of `Arrow` in type names in TokenTree [#413](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/413)
- Fixed handling of `Dot` after `KwdNew` in TokenTree [#413](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/413)
- Fixed line number reported for MethodCount check [#415](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/415)
- Fixed position info for AvoidStarImport, Trace, UnnecessaryConstructor, UnusedLocalVar and UnusedImport checks [#416](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/416)
- Improved automatic detection of coding style by not stopping at the first change in number of violations [#415](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/415)
- Improved handling of file content and `class` parsing in TokenTree [#413](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/413)
- Refactored handling of internal errors (parsing and checks) [#413](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/413)
- Cleanup command line options [#418](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/418)
- Removed `-report` command line option [#418](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/418)

## version 2.3.0 (2018-05-07)

- New `extendsConfigPath` field to config files, fixes [#401](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/401) ([#407](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/407) + [#408](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/408))
- New experimental command line option `-detect <filename>` to generate a checkstyle configuration file based on a source folder [#409](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/409) + [#410](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/410)
- Added `conditionalPolicy` to Indentation check [#411](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/411)
- Fixed sort order of detected checkstyle configuration [#410](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/410)
- Fixed null pointer exception when parsing fails on C++ [#411](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/411)
- Improved detection rate for `RightCurlyCheck` [#411](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/411)
- Refactored indentation check messages [#409](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/409)

## version 2.2.2 (2018-05-02)

- Fixed handling of default setters/getters in indentation check [#391](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/391)
- Fixed token tree structure for `Sharp(If)` inside `Kwd(KwdCase)` [#394](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/394)
- Fixed comments in function parameters [#395](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/395)
- Fixed parser errors when handling block and object declarations, fixes [#396](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/396) ([#397](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/397))
- Fixed `BkOpen` childs in token tree parser [#398](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/398)
- Fixed bad offset crash with C++ build on Windows 10 [#398](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/398)
- Fixed object declaration handling [#399](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/399)
- Fixed false positives for files with UTF-8 characters when running as vscode-checkstyle [#402](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/402)
- Fixed comments in typedefs [#404](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/404) + [#405](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/405)
- Refactored content handling to use `Bytes` instead of `String` (should fix [#98](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/98)) [#402](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/402)
- Added unittests for `ParserQueue` and `CheckerPool` [#393](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/393)
- Added unittests for TokenTree structure verification [#400](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/400)
- Removed `.` from default settings in `SeparatorWrapCheck` [#400](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/400)
- Improved wrapped code detection [#392](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/392) + [#403](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/403)

## version 2.2.1 (2018-04-22)

- New check IndentationCheck [#387](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/387)
- New CHANGES.md
- Added a reset function for checks ([#279](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/279))
- Added unittest for [#78](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/78)
- Fixed `XMLReporter` output after introducing multithreading in 2.2.0 [#389](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/389)
- Updated formula for number of pre-parsed files [#386](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/386)
- Removed conditional section for unittest [#181](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/181)

## version 2.2.0 (2018-04-18)

- Added support for Binop(OpIn) [#352](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/352) ([#359](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/359))
- Added 1 parser and n checker threads ([#374](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/374))
  - use `-checkerthreads n` to change number of checker threads (range:1-15 default: 5)
  - use `-nothreads` to turn off threads and use old behaviour
  - use `numberOfCheckerThreads` in config file to set number of checker threads (see `resources/default-conmfig.json`)
- Fixed allow same regex logic for "all" excludes, fixes [#361](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/361) ([#362](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/362))
- Fixed altering position info in `RightCurlyCheck` ([#367](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/367))
- Fixed multiple metadatas infront of statement ([#369](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/369))
- Fixed C++ compilation ([#376](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/376))
- Fixed coverage ([#378](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/378))
- Fixed compilation to JS (used in vscode-checkstyle extension) ([#379](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/379))
- Fixed support for comments in var and parameter definitions, fixes [#363](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/363) ([#364](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/364))
- Fixed support for expression metadata in token tree, fixes [#365](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/365) ([#366](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/366))
- Refactored object decl handling in token tree ([#372](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/372))
- Refactored unit testing from haxe.unit to munit ([#377](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/377))
- Removed Patreon link ([#375](https://github.com/HaxeCheckstyle/haxe-checkstyle/issues/375))