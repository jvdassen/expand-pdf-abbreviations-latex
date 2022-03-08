const stdinDescr = 0
const fs = require('fs')
const { getAbbrEntriesFromWiki } = require('./expandAbbreviation')

var stdinBuffer = fs.readFileSync(stdinDescr)
var lines = stdinBuffer.toString().split('\n')

console.error(`${lines.length} terms to translate`)
translate(lines)

async function translate (lines) {
  var abbreviations = await getAbbrEntriesFromWiki()
  for(line of lines) {
    if(line) {
      console.log(`\\abr{${line}}{${abbreviations[line] || '..'}}`)
    }
  }
}

