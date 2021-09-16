import CloseLoopCheckbox from './CloseLoopCheckbox';
import ToolbarButton from './ToolbarButton';
import ToolbarNumInput from './ToolbarNumInput';

const Toolbar = () => {
  const onSave = () => {

  };

  const onUndo = () => {

  };

  return (
    <div className="toolbar">
      <ToolbarButton onClick={onUndo}>Undo</ToolbarButton>
      <ToolbarNumInput name="strokeWidth" />
      <ToolbarNumInput name="strokeDashLength" />
      <ToolbarNumInput name="strokeDashGap" min="0" />
      <ToolbarNumInput name="zigzagWavelength" />
      <ToolbarNumInput name="zigzagAmplitude" />
      <CloseLoopCheckbox />
      <ToolbarButton className="slick save" onClick={onSave}>
        Save
      </ToolbarButton>
    </div>
  );
};

export default Toolbar;
