import styled from 'styled-components';

import CloseLoopCheckbox from './CloseLoopCheckbox';
import ToolbarButton from './ToolbarButton';
import ToolbarNumInput from './ToolbarNumInput';

const StyledToolbar = styled.div`
padding: 5px 4px 0 30px;
height: 25px;
`;

const Toolbar = () => {
  const onSave = () => {
    alert("not implemented yet");
  };

  const onUndo = () => {

  };

  return (
    <StyledToolbar>
      <ToolbarButton onClick={onUndo}>Undo</ToolbarButton>
      <ToolbarNumInput name="strokeWidth" />
      <ToolbarNumInput name="strokeDashLength" />
      <ToolbarNumInput name="strokeDashGap" min="0" />
      <ToolbarNumInput name="zigzagWavelength" />
      <ToolbarNumInput name="zigzagAmplitude" />
      <CloseLoopCheckbox />
      <ToolbarButton className="save" onClick={onSave}>Save</ToolbarButton>
    </StyledToolbar>
  );
};

export default Toolbar;
