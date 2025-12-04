import { parse } from "meriyah";
import { generate } from "astring";
import data from "./87644c66-es5.txt"

const t1 = Date.now()
const ast = parse(data.replace("var window=this", ""))
console.log("parse:", Date.now() - t1)

const t2 = Date.now()
const code = generate(ast)
console.log("generate:", Date.now() - t2)

console.log("finish:", code.length)