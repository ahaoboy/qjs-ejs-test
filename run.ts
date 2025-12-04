import { type ESTree, parse } from "meriyah";
import { generate } from "astring";
import data from "./87644c66-es5.txt"

const ast = parse(data.replace("var window=this",""));
const code = generate(ast);

console.log(code)