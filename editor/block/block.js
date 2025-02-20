Blockly.Blocks['create_block'] = {
  init: function() {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("Create Block");
    this.appendDummyInput()
      .appendField("ID")
      .appendField(new Blockly.FieldTextInput("ID"), "ID");
    this.appendDummyInput()
      .appendField("Text")
      .appendField(new Blockly.FieldTextInput("Text"), "Text");
    this.appendDummyInput()
        .appendField("Branch Count");
    this.appendValueInput('BranchCount')
    this.appendDummyInput()
      .appendField("Show monitor")
      .appendField(new Blockly.FieldCheckbox("TRUE"), "Show");
    this.appendDummyInput()
      .appendField("type")
      .appendField(
        new Blockly.FieldDropdown([
          ["block", "Block"],
          ["reporter", "Reporter"],
          ["boolean", "Boolean"],
          ["conditional", "Conditional"],
          ["loop", "Loop"],
        ]),
        "type"
      );
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("Inputs");
    this.appendStatementInput("Inputs").setCheck(null);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("function");
    this.appendStatementInput("Function").setCheck(null);
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

function getBranches(type, count) {
    if (type != "CONDITIONAL" && type != "LOOP") {
        return(1);
    } else {
        return(count);
    }
}

javascript.javascriptGenerator.forBlock['create_block'] = function(block) {
  const id = `${Extension_id}_Block_${block.getFieldValue('ID')}`;
  const text = block.getFieldValue('Text');
  const branchCount = block.getFieldValue('BreachCount');
  const show = block.getFieldValue('Show') == 'TRUE';
  const type = block.getFieldValue('type');
  const inputs = Blockly.JavaScript.statementToCode(block, 'Inputs');
  const func = Blockly.JavaScript.statementToCode(block, 'Function');

  var blockType = '';
  var branches = null;
  switch (type) {
    case 'Block':
      blockType = 'COMMAND';
      branches = 1;
      break;
    case 'Reporter':
      blockType = 'REPORTER';
      branches = 1;
      break;
    case 'Boolean':
      blockType = 'BOOLEAN';
      branches = 1;
      break;
    case 'Conditional':
      blockType = 'CONDITIONAL';
      branches = branchCount;
      break;
    case 'Loop':
      blockType = 'LOOP';
      branches = branchCount;
      break;
    default:
      blockType = 'BUTTON';
      branches = 1;
      break;
  }

  const code = `
blocks.push({
  opcode: "${id}",
  blockType: Scratch.BlockType.${blockType},
  text: "${text}",
  branchCount: ${branches},
  arguments: {
    ${inputs}
  },
  disableMonitor: ${!show}
});
Extension.prototype["${id}"] = async function(args, util) {
  const localVars = {};
  ${func}
};
`;

  return code;
};
