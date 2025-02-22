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

javascriptGenerator.forBlock['stack_timer_finished'] = function(block, generator) {
  // Return code.
  return ['util.stackTimerFinished()', Order.ATOMIC];
}
