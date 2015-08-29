CodeMirror.defineMode("e4x", function(config, parserConfig) {
  var jsMode = CodeMirror.getMode(config, "javascript");
  var xmlMode = CodeMirror.getMode(config, {name: "xml", htmlMode: true});

  function js(stream, state) {
    var style = jsMode.token(stream, state.jsState);
    if (stream.current() == "<") {
      if (state.jsState.reAllowed) {
        state.token = xml;
        state.localState = xmlMode.startState(jsMode.indent(state.jsState, ""));
        state.mode = "xml";
        state.indented =
        stream.backUp(1);
        return xml(stream,state);
      }
    }
    return style;
  }
  function xml(stream, state) {
        var xmlState = state.localState;
        var style = xmlMode.token(stream,state.localState);
        if(!xmlState.context){
          //end;
          state.token = js;
      state.curState = null;
      state.mode = "javascript";
        }
        return style;
  }

  return {
    startState: function() {
      var state = jsMode.startState();
      return {token: js, localState: null, mode: "javascript", jsState: state};
    },

    copyState: function(state) {
      if (state.localState)
        var local = CodeMirror.copyState(xmlMode, state.localState);
      return {token: state.token, localState: local, mode: state.mode,
              jsState: CodeMirror.copyState(jsMode, state.jsState)};
    },

    token: function(stream, state) {
      return state.token(stream, state);
    },

    indent: function(state, textAfter) {
      if (state.token == xml || /^\s*<[\/]/.test(textAfter))
        return xmlMode.indent(state.xmlState, textAfter);
      else if (state.token == js)
        return jsMode.indent(state.localState, textAfter);
    },

    electricChars: "/{}:"
  }
});

CodeMirror.defineMIME("text/e4x", "e4x");
