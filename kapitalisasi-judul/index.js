'use strict'

const SPACE = ' ';
var SPLIT_RE = /(\S+)(\s+|\s*$)/g;

// References: https://id.wikibooks.org/wiki/Bahasa_Indonesia/Partikel
// and https://beritagar.id/artikel/tabik/kapitalisasi-judul
const KATA_DEPAN = 'di ke pada dari daripada terhadap'
const KATA_SAMBUNG = 'dan dengan serta atau tetapi namun sedangkan sebaliknya melainkan hanya bahkan malah lagipula apalagi jangankan kecuali lalu kemudian selanjutnya yaitu yakni bahwa adalah ialah jadi sebab karena jikalau bila apalagi jika asal agar supaya ketika sewaktu sebelum sesudah tatkala sampai hingga sehingga untuk guna seperti sebagai laksana'
const ARTIKULA = 'si para'
const KATA_SERU = 'bah huh aduhai syukur insya aduh astaga ayo hai nah dong'
const PARTIKEL_PENEGAS = 'pun kah lah tah'
const UNSUR_NAMA = 'de van der bin binti'
var ignoreList = [];

function capitalize(title, ignore) {
    if (ignore != null) {
        ignoreList = ignore;
    }

    var title = title.replace(SPLIT_RE, _capitalize).replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    
    // Capitalize every first word
    return upper(title[0])+title.slice(1);
}

function _capitalize(word) {
    word = word.replace(/ +/g, "");
    if (ignoreList.indexOf(word) == -1) {
        if (shouldIgnoreCapitalize(lower(word))) {
            word = lower(word);
        } else {
            word = upper(word);
        }
    }
    
    
    return word + SPACE;
}

function lower(word){
    return word.toLowerCase();
}

function upper(word) {
    var result = word.substr(0,1).toUpperCase() + word.substr(1);

    // If word is "kata berulang sempurna"
    if (word.split('-')[0] === word.split('-')[1]) {
        var split = result.split('-');
        result = split[0] + '-' + upper(split[1]);
    } 
    
    // If word is in parantheses
    else if (word.indexOf('(') == 0) {
        result = '(' + word.substr(1,1).toUpperCase() + word.substr(2);
    }

    return result
}

function isUpperCase(title) {
    return title === title.toUpperCase();
}

function shouldIgnoreCapitalize(word) {
    return (KATA_DEPAN.indexOf(word) > -1) 
    || (KATA_SAMBUNG.indexOf(word) > -1)
    || (ARTIKULA.indexOf(word) > -1)
    || (KATA_SERU.indexOf(word) > -1)
    || (PARTIKEL_PENEGAS.indexOf(word) > -1)
    || (UNSUR_NAMA.indexOf(word) > -1)
}

module.exports = function (title, ignoreList) {
    var result = [];
    var sentences = title.match( /([^\.!\?]+[\.!\?]+)|([^\.!\?]+$)/g );
    if (title == '' || typeof(title) == null) {
        return '';
    } else {
        for (var i = 0; i < sentences.length; i++) {
            var sentence = sentences[i];
            result.push(capitalize(sentence, ignoreList));
        }
        
        result = result.join(' ');
        return result;
    }
    
}