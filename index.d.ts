/**
 * Match severity
 */
export type Severity =
  | "error"
  | "warning"

/**
 * Problem matcher
 */
export interface ProblemMatcher {
  /**
   * An ID field that can be used to remove or replace the problem matcher.
   */
  owner: string;

  /**
   * Indicates the default severity, either 'warning' or 'error' case-insensitive.
   * Defaults to 'error'.
   */
  severity?: Severity;

  /**
   * An array of problem matcher patterns.
   */
  pattern: ProblemPattern[];
}

/**
 * Problem matcher pattern and part mappings.
 */
export interface ProblemPattern {
  /**
   * The regex pattern that provides the groups to match against.
   */
  regexp: string;

  /**
   * A group number containing the file name.
   */
  file?: number;

  /**
   * A group number containing a file path used to root the file (e.g. a project file).
   */
  fromPath?: string;

  /**
   * A group number containing the line number.
   */
  line?: number;

  /**
   * A group number containing the column information.
   */
  column?: number;

  /**
   * A group number containing either 'warning' or 'error' case-insensitive.
   * Defaults to `error`.
   */
  severity?: number;

  /**
   * A group number containing the error message.
   * **required** at least one pattern must set the message.
   */
  message?: number;

  /**
   * A group number containing the error code.
   */
  code?: number;

  /**
   * Whether to loop until a match is not found, only valid on the last pattern of a multiline matcher.
   */
  loop?: boolean;
}
