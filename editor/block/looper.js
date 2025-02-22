Blockly.Blocks['looper'] = {
  init: function() {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("Stack Timer Finished?");
    this.appendDummyInput()
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascript.javascriptGenerator.forBlock['looper'] = function(block) {
  return util.stackTimerFinished();
};
