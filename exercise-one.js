/*********** I explain `exerciseUtils` ********
*
* exerciseUtils is a variable that comes from a file in this repo
* The file `./utils` is on this level and name `utils.js`
*
* This file creates a `promisifiedReadFile` - CHECK ME OUT!!!
*
* The functions `blue` and `magenta` to help keep your code DRY
*
***********************************************/

'use strict';

var Promise = require('bluebird'),
    exerciseUtils = require('./utils');

var readFile = exerciseUtils.readFile,
    promisifiedReadFile = exerciseUtils.promisifiedReadFile,
    blue = exerciseUtils.blue,
    magenta = exerciseUtils.magenta;

var args = process.argv.slice(2).map(function(st){ return st.toUpperCase(); });

module.exports = {
  problemA: problemA,
  problemB: problemB,
  problemC: problemC,
  problemD: problemD,
  problemE: problemE,
  problemF: problemF
};

// runs every problem given as command-line argument to process
args.forEach(function(arg){
  var problem = module.exports['problem' + arg];
  if (problem) problem();
});

function problemA () {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   * A. log poem one stanza one (ignore errors)
   *
   */

  // callback version
  // readFile('poem-one/stanza-01.txt', function (err, stanza) {
  //   console.log('-- A. callback version --');
  //   blue(stanza);
  // });

  // promise version
  // ???
  var stanza = 'poem-one/stanza-01.txt';
  promisifiedReadFile(stanza).then(function(txt){
    blue(txt);
  });

}

function problemB () {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   * B. log poem one stanza two and three, in any order
   *    (ignore errors)
   *
   */

  // callback version
  // readFile('poem-one/stanza-02.txt', function (err, stanza2) {
  //   console.log('-- B. callback version (stanza two) --');
  //   blue(stanza2);
  // });
  // readFile('poem-one/stanza-03.txt', function (err, stanza3) {
  //   console.log('-- B. callback version (stanza three) --');
  //   blue(stanza3);
  // });

  // promise version
  // ???
    var stanza = 'poem-one/stanza-02.txt';
    promisifiedReadFile(stanza).then(function (txt) {
      blue(txt);});

    var stanza2 = 'poem-one/stanza-03.txt';
    promisifiedReadFile(stanza2).then(function (txt) {
        blue(txt);});


}

function problemC () {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   * C. read & log poem one stanza two and *then* read & log stanza three
   *    log 'done' when both are done
   *    (ignore errors)
   *
   */
  //
  // // callback version
  // readFile('poem-one/stanza-02.txt', function (err, stanza2) {
  //   console.log('-- C. callback version (stanza two) --');
  //   blue(stanza2);
  //   readFile('poem-one/stanza-03.txt', function (err, stanza3) {
  //     console.log('-- C. callback version (stanza three) --');
  //     blue(stanza3);
  //     console.log('-- C. callback version done --');
  //   });
  // });

  // promise version (hint: don't need to nest `then` calls)
  // ???
    var stanza = 'poem-one/stanza-02.txt';
    promisifiedReadFile(stanza).then(function (txt) {
        blue(txt);
        return promisifiedReadFile ('poem-one/stanza-03.txt');
    }).then (function(txt){
      blue(txt);
        }

    );


}

function problemD () {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   * D. log poem one stanza four or an error if it occurs
   *
   */

  // // callback version
  // readFile('poem-one/wrong-file-name.txt', function (err, stanza4) {
  //   console.log('-- D. callback version (stanza four) --');
  //   if (err) magenta(err);
  //   else blue(stanza4);
  // });

  // promise version
  // ???
    var stanza = 'poem-one/stanza-04.txt';
    promisifiedReadFile(stanza).then(function(txt){
        blue(txt);})
        .catch(null, function(err){
      magenta(err);
    });


}

function problemE () {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   * E. read & log poem one stanza three and *then* read & log stanza four
   *    or log an error if it occurs for either file read
   *
   */

  // // callback version
  // readFile('poem-one/stanza-03.txt', function (err, stanza3) {
  //   console.log('-- E. callback version (stanza three) --');
  //   if (err) return magenta(err);
  //   blue(stanza3);
  //   readFile('poem-one/wrong-file-name.txt', function (err2, stanza4) {
  //     console.log('-- E. callback version (stanza four) --');
  //     if (err2) return magenta(err2);
  //     blue(stanza4);
  //   });
  //});

  // promise version
  // ???
    var stanza = 'poem-one/stanza-03.txt';
    promisifiedReadFile(stanza).then(function (txt) {
        blue(txt);
        return promisifiedReadFile ('poem-one/stanza-04.txt');
    }).then (function(txt){
        blue(txt);
    }).catch(null, function(err){
        magenta(err);
    });

}

function problemF () {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   * F. read & log poem one stanza three and *then* read & log stanza four
   *    or log an error if it occurs for either file read
   *    always log 'done' when everything is done
   *
   */

  // callback version
  // readFile('poem-one/stanza-03.txt', function (err, stanza3) {
  //   console.log('-- F. callback version (stanza three) --');
  //   if (err) {
  //     magenta(err);
  //     console.log('-- F. callback version done --');
  //     return;
  //   }
  //   blue(stanza3);
  //   readFile('poem-one/wrong-file-name.txt', function (err2, stanza4) {
  //     console.log('-- F. callback version (stanza four) --');
  //     if (err2) magenta(err2);
  //     else blue(stanza4);
  //     console.log('-- F. callback version done --');
  //   });
  // });

  // promise version
  // ???
    var stanza = 'poem-one/stanza-03.txt';
    promisifiedReadFile(stanza).then(function (txt) {
        blue(txt);
        return promisifiedReadFile ('poem-one/stanza-04.txt');
    }).then (function(txt){
        blue(txt);
    }).then (function (txt){
        console.log('done');
    }).catch(null, function(err){
        magenta(err);
    });
}
