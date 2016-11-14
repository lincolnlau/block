// Generated from Component.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('../antlr4/index');
var ComponentListener = require('./ComponentListener').ComponentListener;
var ComponentVisitor = require('./ComponentVisitor').ComponentVisitor;

var grammarFileName = "Component.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3\34t\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t",
    "\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\3",
    "\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\4\3\4\5\4+\n\4\3\4\7\4.\n\4\f\4\16",
    "\4\61\13\4\3\4\3\4\3\5\3\5\3\5\5\58\n\5\3\6\3\6\3\6\3\6\3\7\3\7\3\7",
    "\3\7\3\b\3\b\5\bD\n\b\3\b\7\bG\n\b\f\b\16\bJ\13\b\3\b\3\b\3\t\3\t\3",
    "\t\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\r\3\r\5\r_",
    "\n\r\3\r\7\rb\n\r\f\r\16\re\13\r\3\r\3\r\3\16\3\16\3\16\5\16l\n\16\3",
    "\16\3\16\3\17\3\17\3\20\3\20\3\20\2\2\21\2\4\6\b\n\f\16\20\22\24\26",
    "\30\32\34\36\2\3\3\2\f\21m\2 \3\2\2\2\4$\3\2\2\2\6(\3\2\2\2\b\67\3\2",
    "\2\2\n9\3\2\2\2\f=\3\2\2\2\16A\3\2\2\2\20M\3\2\2\2\22P\3\2\2\2\24T\3",
    "\2\2\2\26X\3\2\2\2\30\\\3\2\2\2\32h\3\2\2\2\34o\3\2\2\2\36q\3\2\2\2",
    " !\7\5\2\2!\"\7\31\2\2\"#\7\30\2\2#\3\3\2\2\2$%\7\6\2\2%&\7\31\2\2&",
    "\'\5\6\4\2\'\5\3\2\2\2(*\7\26\2\2)+\5\36\20\2*)\3\2\2\2*+\3\2\2\2+/",
    "\3\2\2\2,.\5\b\5\2-,\3\2\2\2.\61\3\2\2\2/-\3\2\2\2/\60\3\2\2\2\60\62",
    "\3\2\2\2\61/\3\2\2\2\62\63\7\27\2\2\63\7\3\2\2\2\648\5\n\6\2\658\5\f",
    "\7\2\668\5\26\f\2\67\64\3\2\2\2\67\65\3\2\2\2\67\66\3\2\2\28\t\3\2\2",
    "\29:\7\7\2\2:;\7\31\2\2;<\7\30\2\2<\13\3\2\2\2=>\7\t\2\2>?\7\31\2\2",
    "?@\5\16\b\2@\r\3\2\2\2AC\7\26\2\2BD\5\36\20\2CB\3\2\2\2CD\3\2\2\2DH",
    "\3\2\2\2EG\5\20\t\2FE\3\2\2\2GJ\3\2\2\2HF\3\2\2\2HI\3\2\2\2IK\3\2\2",
    "\2JH\3\2\2\2KL\7\27\2\2L\17\3\2\2\2MN\5\22\n\2NO\5\24\13\2O\21\3\2\2",
    "\2PQ\7\3\2\2QR\7\31\2\2RS\7\30\2\2S\23\3\2\2\2TU\7\4\2\2UV\7\31\2\2",
    "VW\7\30\2\2W\25\3\2\2\2XY\7\b\2\2YZ\7\31\2\2Z[\5\30\r\2[\27\3\2\2\2",
    "\\^\7\26\2\2]_\5\36\20\2^]\3\2\2\2^_\3\2\2\2_c\3\2\2\2`b\5\32\16\2a",
    "`\3\2\2\2be\3\2\2\2ca\3\2\2\2cd\3\2\2\2df\3\2\2\2ec\3\2\2\2fg\7\27\2",
    "\2g\31\3\2\2\2hi\5\34\17\2ik\7\31\2\2jl\5\36\20\2kj\3\2\2\2kl\3\2\2",
    "\2lm\3\2\2\2mn\7\30\2\2n\33\3\2\2\2op\t\2\2\2p\35\3\2\2\2qr\7\n\2\2",
    "r\37\3\2\2\2\n*/\67CH^ck"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'packageName'", "'componentName'", "'package'",
                     "'component'", "'prop'", "'event'", "'slot'", 'null',
                     "'.'", "'String'", "'Number'", "'Boolean'", "'Function'",
                     "'Object'", "'Array'", "'['", "']'", "'('", "')'",
                     "'{'", "'}'", "';'" ];

var symbolicNames = [ 'null', 'null', 'null', "PACKAGE", "COMPONENT", "PROP",
                      "EVENT", "SLOT", "DESCRIPTION", "DOT", "STRING", "NUMBER",
                      "BOOLEAN", "FUNCTION", "OBJECT", "ARRAY", "OpenBracket",
                      "CloseBracket", "OpenParen", "CloseParen", "OpenBrace",
                      "CloseBrace", "SemiColon", "Identifier", "WS", "COMMENT",
                      "LINE_COMMENT" ];

var ruleNames =  [ "packageDeclaration", "componentDeclaration", "componentBody",
                   "componentBodyDeclaration", "propDeclaration", "slotDeclaration",
                   "slotBody", "slotBodyDeclaration", "packageName", "componentName",
                   "eventDeclaration", "eventBody", "eventBodyDeclaration",
                   "type", "description" ];

function ComponentParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ComponentParser.prototype = Object.create(antlr4.Parser.prototype);
ComponentParser.prototype.constructor = ComponentParser;

Object.defineProperty(ComponentParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ComponentParser.EOF = antlr4.Token.EOF;
ComponentParser.T__0 = 1;
ComponentParser.T__1 = 2;
ComponentParser.PACKAGE = 3;
ComponentParser.COMPONENT = 4;
ComponentParser.PROP = 5;
ComponentParser.EVENT = 6;
ComponentParser.SLOT = 7;
ComponentParser.DESCRIPTION = 8;
ComponentParser.DOT = 9;
ComponentParser.STRING = 10;
ComponentParser.NUMBER = 11;
ComponentParser.BOOLEAN = 12;
ComponentParser.FUNCTION = 13;
ComponentParser.OBJECT = 14;
ComponentParser.ARRAY = 15;
ComponentParser.OpenBracket = 16;
ComponentParser.CloseBracket = 17;
ComponentParser.OpenParen = 18;
ComponentParser.CloseParen = 19;
ComponentParser.OpenBrace = 20;
ComponentParser.CloseBrace = 21;
ComponentParser.SemiColon = 22;
ComponentParser.Identifier = 23;
ComponentParser.WS = 24;
ComponentParser.COMMENT = 25;
ComponentParser.LINE_COMMENT = 26;

ComponentParser.RULE_packageDeclaration = 0;
ComponentParser.RULE_componentDeclaration = 1;
ComponentParser.RULE_componentBody = 2;
ComponentParser.RULE_componentBodyDeclaration = 3;
ComponentParser.RULE_propDeclaration = 4;
ComponentParser.RULE_slotDeclaration = 5;
ComponentParser.RULE_slotBody = 6;
ComponentParser.RULE_slotBodyDeclaration = 7;
ComponentParser.RULE_packageName = 8;
ComponentParser.RULE_componentName = 9;
ComponentParser.RULE_eventDeclaration = 10;
ComponentParser.RULE_eventBody = 11;
ComponentParser.RULE_eventBodyDeclaration = 12;
ComponentParser.RULE_type = 13;
ComponentParser.RULE_description = 14;

function PackageDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ComponentParser.RULE_packageDeclaration;
    return this;
}

PackageDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PackageDeclarationContext.prototype.constructor = PackageDeclarationContext;

PackageDeclarationContext.prototype.Identifier = function() {
    return this.getToken(ComponentParser.Identifier, 0);
};

PackageDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.enterPackageDeclaration(this);
	}
};

PackageDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.exitPackageDeclaration(this);
	}
};

PackageDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ComponentVisitor ) {
        return visitor.visitPackageDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ComponentParser.PackageDeclarationContext = PackageDeclarationContext;

ComponentParser.prototype.packageDeclaration = function() {

    var localctx = new PackageDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ComponentParser.RULE_packageDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 30;
        this.match(ComponentParser.PACKAGE);
        this.state = 31;
        this.match(ComponentParser.Identifier);
        this.state = 32;
        this.match(ComponentParser.SemiColon);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ComponentDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ComponentParser.RULE_componentDeclaration;
    return this;
}

ComponentDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComponentDeclarationContext.prototype.constructor = ComponentDeclarationContext;

ComponentDeclarationContext.prototype.Identifier = function() {
    return this.getToken(ComponentParser.Identifier, 0);
};

ComponentDeclarationContext.prototype.componentBody = function() {
    return this.getTypedRuleContext(ComponentBodyContext,0);
};

ComponentDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.enterComponentDeclaration(this);
	}
};

ComponentDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.exitComponentDeclaration(this);
	}
};

ComponentDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ComponentVisitor ) {
        return visitor.visitComponentDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ComponentParser.ComponentDeclarationContext = ComponentDeclarationContext;

ComponentParser.prototype.componentDeclaration = function() {

    var localctx = new ComponentDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ComponentParser.RULE_componentDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 34;
        this.match(ComponentParser.COMPONENT);
        this.state = 35;
        this.match(ComponentParser.Identifier);
        this.state = 36;
        this.componentBody();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ComponentBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ComponentParser.RULE_componentBody;
    return this;
}

ComponentBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComponentBodyContext.prototype.constructor = ComponentBodyContext;

ComponentBodyContext.prototype.description = function() {
    return this.getTypedRuleContext(DescriptionContext,0);
};

ComponentBodyContext.prototype.componentBodyDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ComponentBodyDeclarationContext);
    } else {
        return this.getTypedRuleContext(ComponentBodyDeclarationContext,i);
    }
};

ComponentBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.enterComponentBody(this);
	}
};

ComponentBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.exitComponentBody(this);
	}
};

ComponentBodyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ComponentVisitor ) {
        return visitor.visitComponentBody(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ComponentParser.ComponentBodyContext = ComponentBodyContext;

ComponentParser.prototype.componentBody = function() {

    var localctx = new ComponentBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ComponentParser.RULE_componentBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 38;
        this.match(ComponentParser.OpenBrace);
        this.state = 40;
        _la = this._input.LA(1);
        if(_la===ComponentParser.DESCRIPTION) {
            this.state = 39;
            this.description();
        }

        this.state = 45;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ComponentParser.PROP) | (1 << ComponentParser.EVENT) | (1 << ComponentParser.SLOT))) !== 0)) {
            this.state = 42;
            this.componentBodyDeclaration();
            this.state = 47;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 48;
        this.match(ComponentParser.CloseBrace);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ComponentBodyDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ComponentParser.RULE_componentBodyDeclaration;
    return this;
}

ComponentBodyDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComponentBodyDeclarationContext.prototype.constructor = ComponentBodyDeclarationContext;

ComponentBodyDeclarationContext.prototype.propDeclaration = function() {
    return this.getTypedRuleContext(PropDeclarationContext,0);
};

ComponentBodyDeclarationContext.prototype.slotDeclaration = function() {
    return this.getTypedRuleContext(SlotDeclarationContext,0);
};

ComponentBodyDeclarationContext.prototype.eventDeclaration = function() {
    return this.getTypedRuleContext(EventDeclarationContext,0);
};

ComponentBodyDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.enterComponentBodyDeclaration(this);
	}
};

ComponentBodyDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.exitComponentBodyDeclaration(this);
	}
};

ComponentBodyDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ComponentVisitor ) {
        return visitor.visitComponentBodyDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ComponentParser.ComponentBodyDeclarationContext = ComponentBodyDeclarationContext;

ComponentParser.prototype.componentBodyDeclaration = function() {

    var localctx = new ComponentBodyDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ComponentParser.RULE_componentBodyDeclaration);
    try {
        this.state = 53;
        switch(this._input.LA(1)) {
        case ComponentParser.PROP:
            this.enterOuterAlt(localctx, 1);
            this.state = 50;
            this.propDeclaration();
            break;
        case ComponentParser.SLOT:
            this.enterOuterAlt(localctx, 2);
            this.state = 51;
            this.slotDeclaration();
            break;
        case ComponentParser.EVENT:
            this.enterOuterAlt(localctx, 3);
            this.state = 52;
            this.eventDeclaration();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PropDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ComponentParser.RULE_propDeclaration;
    return this;
}

PropDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropDeclarationContext.prototype.constructor = PropDeclarationContext;

PropDeclarationContext.prototype.Identifier = function() {
    return this.getToken(ComponentParser.Identifier, 0);
};

PropDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.enterPropDeclaration(this);
	}
};

PropDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.exitPropDeclaration(this);
	}
};

PropDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ComponentVisitor ) {
        return visitor.visitPropDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ComponentParser.PropDeclarationContext = PropDeclarationContext;

ComponentParser.prototype.propDeclaration = function() {

    var localctx = new PropDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ComponentParser.RULE_propDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 55;
        this.match(ComponentParser.PROP);
        this.state = 56;
        this.match(ComponentParser.Identifier);
        this.state = 57;
        this.match(ComponentParser.SemiColon);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SlotDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ComponentParser.RULE_slotDeclaration;
    return this;
}

SlotDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SlotDeclarationContext.prototype.constructor = SlotDeclarationContext;

SlotDeclarationContext.prototype.Identifier = function() {
    return this.getToken(ComponentParser.Identifier, 0);
};

SlotDeclarationContext.prototype.slotBody = function() {
    return this.getTypedRuleContext(SlotBodyContext,0);
};

SlotDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.enterSlotDeclaration(this);
	}
};

SlotDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.exitSlotDeclaration(this);
	}
};

SlotDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ComponentVisitor ) {
        return visitor.visitSlotDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ComponentParser.SlotDeclarationContext = SlotDeclarationContext;

ComponentParser.prototype.slotDeclaration = function() {

    var localctx = new SlotDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ComponentParser.RULE_slotDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        this.match(ComponentParser.SLOT);
        this.state = 60;
        this.match(ComponentParser.Identifier);
        this.state = 61;
        this.slotBody();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SlotBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ComponentParser.RULE_slotBody;
    return this;
}

SlotBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SlotBodyContext.prototype.constructor = SlotBodyContext;

SlotBodyContext.prototype.description = function() {
    return this.getTypedRuleContext(DescriptionContext,0);
};

SlotBodyContext.prototype.slotBodyDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SlotBodyDeclarationContext);
    } else {
        return this.getTypedRuleContext(SlotBodyDeclarationContext,i);
    }
};

SlotBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.enterSlotBody(this);
	}
};

SlotBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.exitSlotBody(this);
	}
};

SlotBodyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ComponentVisitor ) {
        return visitor.visitSlotBody(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ComponentParser.SlotBodyContext = SlotBodyContext;

ComponentParser.prototype.slotBody = function() {

    var localctx = new SlotBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ComponentParser.RULE_slotBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
        this.match(ComponentParser.OpenBrace);
        this.state = 65;
        _la = this._input.LA(1);
        if(_la===ComponentParser.DESCRIPTION) {
            this.state = 64;
            this.description();
        }

        this.state = 70;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ComponentParser.T__0) {
            this.state = 67;
            this.slotBodyDeclaration();
            this.state = 72;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 73;
        this.match(ComponentParser.CloseBrace);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SlotBodyDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ComponentParser.RULE_slotBodyDeclaration;
    return this;
}

SlotBodyDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SlotBodyDeclarationContext.prototype.constructor = SlotBodyDeclarationContext;

SlotBodyDeclarationContext.prototype.packageName = function() {
    return this.getTypedRuleContext(PackageNameContext,0);
};

SlotBodyDeclarationContext.prototype.componentName = function() {
    return this.getTypedRuleContext(ComponentNameContext,0);
};

SlotBodyDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.enterSlotBodyDeclaration(this);
	}
};

SlotBodyDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.exitSlotBodyDeclaration(this);
	}
};

SlotBodyDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ComponentVisitor ) {
        return visitor.visitSlotBodyDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ComponentParser.SlotBodyDeclarationContext = SlotBodyDeclarationContext;

ComponentParser.prototype.slotBodyDeclaration = function() {

    var localctx = new SlotBodyDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ComponentParser.RULE_slotBodyDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        this.packageName();
        this.state = 76;
        this.componentName();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PackageNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ComponentParser.RULE_packageName;
    return this;
}

PackageNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PackageNameContext.prototype.constructor = PackageNameContext;

PackageNameContext.prototype.Identifier = function() {
    return this.getToken(ComponentParser.Identifier, 0);
};

PackageNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.enterPackageName(this);
	}
};

PackageNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.exitPackageName(this);
	}
};

PackageNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ComponentVisitor ) {
        return visitor.visitPackageName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ComponentParser.PackageNameContext = PackageNameContext;

ComponentParser.prototype.packageName = function() {

    var localctx = new PackageNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ComponentParser.RULE_packageName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
        this.match(ComponentParser.T__0);
        this.state = 79;
        this.match(ComponentParser.Identifier);
        this.state = 80;
        this.match(ComponentParser.SemiColon);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ComponentNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ComponentParser.RULE_componentName;
    return this;
}

ComponentNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComponentNameContext.prototype.constructor = ComponentNameContext;

ComponentNameContext.prototype.Identifier = function() {
    return this.getToken(ComponentParser.Identifier, 0);
};

ComponentNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.enterComponentName(this);
	}
};

ComponentNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.exitComponentName(this);
	}
};

ComponentNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ComponentVisitor ) {
        return visitor.visitComponentName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ComponentParser.ComponentNameContext = ComponentNameContext;

ComponentParser.prototype.componentName = function() {

    var localctx = new ComponentNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ComponentParser.RULE_componentName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82;
        this.match(ComponentParser.T__1);
        this.state = 83;
        this.match(ComponentParser.Identifier);
        this.state = 84;
        this.match(ComponentParser.SemiColon);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EventDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ComponentParser.RULE_eventDeclaration;
    return this;
}

EventDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EventDeclarationContext.prototype.constructor = EventDeclarationContext;

EventDeclarationContext.prototype.Identifier = function() {
    return this.getToken(ComponentParser.Identifier, 0);
};

EventDeclarationContext.prototype.eventBody = function() {
    return this.getTypedRuleContext(EventBodyContext,0);
};

EventDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.enterEventDeclaration(this);
	}
};

EventDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.exitEventDeclaration(this);
	}
};

EventDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ComponentVisitor ) {
        return visitor.visitEventDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ComponentParser.EventDeclarationContext = EventDeclarationContext;

ComponentParser.prototype.eventDeclaration = function() {

    var localctx = new EventDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ComponentParser.RULE_eventDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        this.match(ComponentParser.EVENT);
        this.state = 87;
        this.match(ComponentParser.Identifier);
        this.state = 88;
        this.eventBody();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EventBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ComponentParser.RULE_eventBody;
    return this;
}

EventBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EventBodyContext.prototype.constructor = EventBodyContext;

EventBodyContext.prototype.description = function() {
    return this.getTypedRuleContext(DescriptionContext,0);
};

EventBodyContext.prototype.eventBodyDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EventBodyDeclarationContext);
    } else {
        return this.getTypedRuleContext(EventBodyDeclarationContext,i);
    }
};

EventBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.enterEventBody(this);
	}
};

EventBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.exitEventBody(this);
	}
};

EventBodyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ComponentVisitor ) {
        return visitor.visitEventBody(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ComponentParser.EventBodyContext = EventBodyContext;

ComponentParser.prototype.eventBody = function() {

    var localctx = new EventBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ComponentParser.RULE_eventBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
        this.match(ComponentParser.OpenBrace);
        this.state = 92;
        _la = this._input.LA(1);
        if(_la===ComponentParser.DESCRIPTION) {
            this.state = 91;
            this.description();
        }

        this.state = 97;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ComponentParser.STRING) | (1 << ComponentParser.NUMBER) | (1 << ComponentParser.BOOLEAN) | (1 << ComponentParser.FUNCTION) | (1 << ComponentParser.OBJECT) | (1 << ComponentParser.ARRAY))) !== 0)) {
            this.state = 94;
            this.eventBodyDeclaration();
            this.state = 99;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 100;
        this.match(ComponentParser.CloseBrace);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EventBodyDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ComponentParser.RULE_eventBodyDeclaration;
    return this;
}

EventBodyDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EventBodyDeclarationContext.prototype.constructor = EventBodyDeclarationContext;

EventBodyDeclarationContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

EventBodyDeclarationContext.prototype.Identifier = function() {
    return this.getToken(ComponentParser.Identifier, 0);
};

EventBodyDeclarationContext.prototype.description = function() {
    return this.getTypedRuleContext(DescriptionContext,0);
};

EventBodyDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.enterEventBodyDeclaration(this);
	}
};

EventBodyDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.exitEventBodyDeclaration(this);
	}
};

EventBodyDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ComponentVisitor ) {
        return visitor.visitEventBodyDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ComponentParser.EventBodyDeclarationContext = EventBodyDeclarationContext;

ComponentParser.prototype.eventBodyDeclaration = function() {

    var localctx = new EventBodyDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ComponentParser.RULE_eventBodyDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 102;
        this.type();
        this.state = 103;
        this.match(ComponentParser.Identifier);
        this.state = 105;
        _la = this._input.LA(1);
        if(_la===ComponentParser.DESCRIPTION) {
            this.state = 104;
            this.description();
        }

        this.state = 107;
        this.match(ComponentParser.SemiColon);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ComponentParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;

TypeContext.prototype.STRING = function() {
    return this.getToken(ComponentParser.STRING, 0);
};

TypeContext.prototype.NUMBER = function() {
    return this.getToken(ComponentParser.NUMBER, 0);
};

TypeContext.prototype.BOOLEAN = function() {
    return this.getToken(ComponentParser.BOOLEAN, 0);
};

TypeContext.prototype.FUNCTION = function() {
    return this.getToken(ComponentParser.FUNCTION, 0);
};

TypeContext.prototype.OBJECT = function() {
    return this.getToken(ComponentParser.OBJECT, 0);
};

TypeContext.prototype.ARRAY = function() {
    return this.getToken(ComponentParser.ARRAY, 0);
};

TypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.enterType(this);
	}
};

TypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.exitType(this);
	}
};

TypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ComponentVisitor ) {
        return visitor.visitType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ComponentParser.TypeContext = TypeContext;

ComponentParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, ComponentParser.RULE_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ComponentParser.STRING) | (1 << ComponentParser.NUMBER) | (1 << ComponentParser.BOOLEAN) | (1 << ComponentParser.FUNCTION) | (1 << ComponentParser.OBJECT) | (1 << ComponentParser.ARRAY))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DescriptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ComponentParser.RULE_description;
    return this;
}

DescriptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DescriptionContext.prototype.constructor = DescriptionContext;

DescriptionContext.prototype.DESCRIPTION = function() {
    return this.getToken(ComponentParser.DESCRIPTION, 0);
};

DescriptionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.enterDescription(this);
	}
};

DescriptionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ComponentListener ) {
        listener.exitDescription(this);
	}
};

DescriptionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ComponentVisitor ) {
        return visitor.visitDescription(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ComponentParser.DescriptionContext = DescriptionContext;

ComponentParser.prototype.description = function() {

    var localctx = new DescriptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, ComponentParser.RULE_description);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 111;
        this.match(ComponentParser.DESCRIPTION);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.ComponentParser = ComponentParser;
