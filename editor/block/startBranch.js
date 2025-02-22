Blockly.Blocks['start_branch'] = {
  init: function() {
    this.appendValueInput('branch')
      .setCheck("Number")
      .appendField('start branch');
    this.appendValueInput('bool')
      .setCheck("Bool")
    this.setPreviousStatement(true, null);
    this.setColour(0);
    this.setTooltip('Starts a branches code in the blocks function I think');
    this.setHelpUrl('');
  },
};

javascript.javascriptGenerator.forBlock['start_branch'] = function(block) {
  const branch = Blockly.JavaScript.valueToCode(block, 'branch', Blockly.JavaScript.ORDER_NONE);
  const bool = Blockly.JavaScript.valueToCode(block, 'bool', Blockly.JavaScript.ORDER_NONE);

  const code = `util.startBranch(${branch}, ${bool})`;

  return code;
};
