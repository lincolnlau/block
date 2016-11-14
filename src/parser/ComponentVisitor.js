// Generated from Component.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by ComponentParser.

function ComponentVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

ComponentVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
ComponentVisitor.prototype.constructor = ComponentVisitor;

// Visit a parse tree produced by ComponentParser#packageDeclaration.
ComponentVisitor.prototype.visitPackageDeclaration = function(ctx) {
};


// Visit a parse tree produced by ComponentParser#componentDeclaration.
ComponentVisitor.prototype.visitComponentDeclaration = function(ctx) {
};


// Visit a parse tree produced by ComponentParser#componentBody.
ComponentVisitor.prototype.visitComponentBody = function(ctx) {
};


// Visit a parse tree produced by ComponentParser#componentBodyDeclaration.
ComponentVisitor.prototype.visitComponentBodyDeclaration = function(ctx) {
};


// Visit a parse tree produced by ComponentParser#propDeclaration.
ComponentVisitor.prototype.visitPropDeclaration = function(ctx) {
};


// Visit a parse tree produced by ComponentParser#slotDeclaration.
ComponentVisitor.prototype.visitSlotDeclaration = function(ctx) {
};


// Visit a parse tree produced by ComponentParser#slotBody.
ComponentVisitor.prototype.visitSlotBody = function(ctx) {
};


// Visit a parse tree produced by ComponentParser#slotBodyDeclaration.
ComponentVisitor.prototype.visitSlotBodyDeclaration = function(ctx) {
};


// Visit a parse tree produced by ComponentParser#packageName.
ComponentVisitor.prototype.visitPackageName = function(ctx) {
};


// Visit a parse tree produced by ComponentParser#componentName.
ComponentVisitor.prototype.visitComponentName = function(ctx) {
};


// Visit a parse tree produced by ComponentParser#eventDeclaration.
ComponentVisitor.prototype.visitEventDeclaration = function(ctx) {
};


// Visit a parse tree produced by ComponentParser#eventBody.
ComponentVisitor.prototype.visitEventBody = function(ctx) {
};


// Visit a parse tree produced by ComponentParser#eventBodyDeclaration.
ComponentVisitor.prototype.visitEventBodyDeclaration = function(ctx) {
};


// Visit a parse tree produced by ComponentParser#type.
ComponentVisitor.prototype.visitType = function(ctx) {
};


// Visit a parse tree produced by ComponentParser#description.
ComponentVisitor.prototype.visitDescription = function(ctx) {
};



exports.ComponentVisitor = ComponentVisitor;