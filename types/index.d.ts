import { Plugin } from "rollup";

export interface RollupGenerateGitVersionOptions {
  /**
   * @default 'gitVersion.json'
   */
  fileName?: string | undefined | "gitVersion.json";
}

/**
 * A Rollup plugin which adds `export` declarations to legacy non-module scripts.
 */
export default function generateGitVersion(
  options?: RollupGenerateGitVersionOptions
): Plugin;
