console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('public/main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
      const getSuggestions = () => {
        xhr.open($get, endpoint)
      }
    };

    let structureTwo = function() {
      const getSuggestions = () => {
        xhr.send()
      }
    };

    varCallbacks = [
      function($get){
        if($get.value !== 'GET'){
          return {failure: 'Did you pass in \'GET\' as the first argument in `xhr.open()`?'}
        }
        return true
      }
    ]

    let isMatchOne = Structured.match(code, structureOne, { varCallbacks });
    let isMatchTwo = Structured.match(code, structureTwo);
    assert.isOk(isMatchOne, varCallbacks.failure || 'Did you call `xhr.open()` with `\'GET\'` and `endpoint` as respective arguments')
    assert.isOk(isMatchTwo, 'Did you call `xhr.send()` after `xhr.open()`?')
  });
});