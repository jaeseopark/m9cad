/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable radix */
/* eslint-disable @typescript-eslint/ban-types */
import { ChangeEvent } from 'react';
import { OverlayProps } from '../entity/overlayEntity';

type ToolbarProps = {
  onChange: (partialProps: OverlayProps) => void;
  onUndo: () => void;
  onSave: () => void;
  overlayProps: OverlayProps;
};

const Button = (props) => <button className="slick" type="button" {...props} />;

const NumInput = ({
  name,
  op,
  onChange,
  min
}: {
  name: string;
  op: OverlayProps;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  min?: string
}) => (
  <div className="num-input">
    <input
      key={name}
      className="slick"
      type="number"
      min={min === undefined ? "1" : min}
      title={name}
      value={op[name]}
      onChange={onChange}
    />
    <label className="slick">{name}</label>
  </div>
);

const Toolbar = ({
  onChange,
  onUndo,
  onSave,
  overlayProps: op,
}: ToolbarProps) => {
  const onCloseLoopChange = (event) => {
    // @ts-ignore
    onChange({ shouldCloseLoop: event.target.checked });
  };

  const onNumChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { title, value } = event.target;
    // @ts-ignore
    onChange({ [title]: parseInt(value) });
  };

  return (
    <div className="toolbar">
      <Button onClick={onUndo}>Undo</Button>
      <NumInput name="strokeWidth" onChange={onNumChange} op={op} />
      <NumInput name="strokeDashLength" onChange={onNumChange} op={op} />
      <NumInput name="strokeDashGap" onChange={onNumChange} op={op} min="0" />
      <NumInput name="zigzagWavelength" onChange={onNumChange} op={op} />
      <NumInput name="zigzagAmplitude" onChange={onNumChange} op={op} />
      <div className="close-loop-container">
        <input
          type="checkbox"
          checked={op.shouldCloseLoop}
          onChange={onCloseLoopChange}
        />
        <label className="close-loop">Close Loop</label>
      </div>

      <Button className="slick save" onClick={onSave}>
        Save
      </Button>
    </div>
  );
};

export default Toolbar;
