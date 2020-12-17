const got = require('got');
const { JSDOM } = require("jsdom");

const wiki= 'https://en.wikipedia.org/wiki/List_of_computing_and_IT_abbreviations';

async function getAbbrEntriesFromWiki () {
  var response = await got(wiki)
  const dom = new JSDOM(response.body);
  var elements = [ ...dom.window.document.querySelectorAll('.div-col li') ]
  var result = {
    // 'ABC': 'Abbreviation for the alphabet'
  }
  elements.forEach(pickAbbr)

  function pickAbbr(abbr) {
    var [ abbr, explanation ] = abbr.textContent.split('—')
    result[abbr] = explanation
  }
  return result
}

module.exports = { getAbbrEntriesFromWiki }
