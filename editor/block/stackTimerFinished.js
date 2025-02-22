Blockly.Blocks['stack_timer_finished'] = {
  init: function() {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("Stack Timer Finished?");
    this.setOutput(true, "Boolean");
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascript.javascriptGenerator.forBlock['stack_timer_finished'] = function(block) {
  const value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.javascript.ORDER_NONE);
  
  const code = "util.stackTimerFinished();"
  
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
