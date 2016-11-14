var antlr4 = require('../../src/antlr4/index');
var ComponentLexer = require('../../src/parser/ComponentLexer');
var ComponentParser = require('../../src/parser/ComponentParser');

var input = 'package hfe; \
component div {\
  prop name;\
  slot default {\
    packageName hfe;\
    componentName input;\
  }\
  event select {\
    String abc "this is first paramter";\
  }\
}';
var chars = new antlr4.InputStream(input);
var lexer = new ComponentLexer.ComponentLexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new ComponentParser.ComponentParser(tokens);
parser.buildParseTrees = true;
// var tree = parser.MyStartRule();
// console.log(lexer);
// var packageTree = parser.packageDeclaration();
// console.log(packageTree);
// var componentTree = parser.componentDeclaration();
// console.log(componentTree);
