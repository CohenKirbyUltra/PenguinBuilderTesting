Blockly.Blocks['start_branch'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("start branch")
      .appendField(new Blockly.FieldTextInput("1"), "BRANCH")
      .appendField(" ")
      .appendField(new Blockly.FieldTextInput("Toggle?"), "BOOL");
    this.setPreviousStatement(true, null);
    this.setColour(0);
    this.setTooltip('Starts a branches code in the blocks function I think');
    this.setHelpUrl('');
  },
};

javascript.javascriptGenerator.forBlock['start_branch'] = function(block) {
  const branch = Blockly.JavaScript.valueToCode(block, 'BRANCH', Blockly.JavaScript.ORDER_NONE);
  const bool = Blockly.JavaScript.valueToCode(block, 'BOOL', Blockly.JavaScript.ORDER_NONE);

  const code = `util.startBranch(${branch}, ${bool})`;

  return code;
};
