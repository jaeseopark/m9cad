/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { SketchPicker } from 'react-color';
import PanelHeader from './PanelHeader';

import { OverlayProps } from '../entity/overlayEntity';

type ColorPaletteProps = { onChange: Function; overlayProps: OverlayProps };

const ColorPalette = ({ onChange, overlayProps }: ColorPaletteProps) => {
  const onColorChange = (event) => {
    onChange({ color: event.hex });
  };

  return (
    <div className="color-palette">
      <PanelHeader text="Color" />
      <SketchPicker onChange={onColorChange} color={overlayProps.color} />
    </div>
  );
};

export default ColorPalette;
