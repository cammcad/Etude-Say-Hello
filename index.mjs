import { prompt } from "./util.mjs"
import { compose, trim } from "ramda"

const sayHello = (name) => `Hello ${name}, nice to meet you!`

const p = prompt("What's your name?")
p.run()
  .then(compose(console.log, sayHello, trim))
  .catch((e) => console.error(e))
