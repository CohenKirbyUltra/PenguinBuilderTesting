Blockly.Blocks['create_block'] = {
  init: function() {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("Create Block");
    this.appendDummyInput()
      .appendField("ID")
      .appendField(new Blockly.FieldTextInput("ID"), "ID");
    this.appendDummyInput()
      .appendField("Name")
      .appendField(new Blockly.FieldTextInput("Name"), "Name");
    this.appendDummyInput()
      .appendField("Branch Count")
      .appendField(new Blockly.FieldNumber("1"), "BranchCount");
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

javascript.javascriptGenerator.forBlock['create_block'] = function(block) {
  const id = `${Extension_id}_Block_${block.getFieldValue('ID')}`;
  const name = block.getFieldValue('Name');
  var branchCount = block.getFieldValue('BreachCount');
  const show = block.getFieldValue('Show') == 'TRUE';
  const type = block.getFieldValue('type');
  const inputs = Blockly.JavaScript.statementToCode(block, 'Inputs');
  const func = Blockly.JavaScript.statementToCode(block, 'Function');

  var blockType = '';
  var branches = '';

  // Types
  switch (type) {
    case 'Block':
      blockType = 'COMMAND';
      break;
    case 'Reporter':
      blockType = 'REPORTER';
      break;
    case 'Boolean':
      blockType = 'BOOLEAN';
      break;
    case 'Conditional':
      blockType = 'CONDITIONAL';
      break;
    case 'Loop':
      blockType = 'LOOP';
      break;
    default:
      blockType = 'BUTTON';
      break;
  }

  // Branches
  switch (blockType) {
    case 'BLOCK':
      branches = branchCount;
      break;
    case 'CONDITIONAL':
      branches = 1;
      break;
    case 'LOOP':
      branches = 1;
      break;
    default:
      branches = -1;
      break;
  }
  const code = `
blocks.push({
  opcode: "${id}",
  blockType: Scratch.BlockType.${blockType},
  text: "${name}",
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
