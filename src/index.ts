/**
 *@Description: Generate git version numbers and commit information
 *@Author: Jackson
 *@CreateTime: 2021年12月27日 11:09:38
 *@UpdateTime:
 **/
import { execSync } from "child_process";
import { Plugin } from "rollup";
import { RollupGenerateGitVersionOptions } from "../types";

export default function generateGitVersion(
  options: RollupGenerateGitVersionOptions = { fileName: "gitVersion.json" }
): Plugin {
  const { fileName } = options;
  return {
    name: "generateGitVersion",
    // 生成文件输出
    generateBundle() {
      try {
        // 执行命令失败进行异常捕获
        const command = "git log -1 --pretty=format:";
        const Branch = execSync(`${command}%d`).toString().trim();
        const Hash = execSync(`${command}%H`).toString().trim();
        const author = execSync(`${command}%cn`).toString().trim();
        const email = execSync(`${command}%ce`).toString().trim();
        const content = execSync(`${command}%s`).toString().trim();
        const date = execSync(`${command}%cd`).toString().trim();
        const jsonStr = {
          Branch: `${Branch}`,
          Hash: `${Hash}`,
          CommitUser: `${author}(${email})`,
          CommitContent: `${content}`,
          Date: `${date}`,
        };
        this.emitFile({
          type: "asset",
          fileName: fileName,
          source: JSON.stringify(jsonStr, null, "\t"),
        });
      } catch (error) {
        console.log(error);
        console.log(
          `------Use it in the Git version management directory------`
        );
      }
    },
  };
}
