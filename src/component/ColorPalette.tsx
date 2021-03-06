import styled from 'styled-components';

import { SketchPicker } from 'react-color';
import PanelHeader from './PanelHeader';

import { OverlayProps } from '../entity/overlayEntity';
import M9File from '../entity/m9File';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedFile } from '../redux/slice/files';
import { getOverlayPropsOrDefault } from '../redux/slice/edits';
import { updateOverlayProps } from '../redux/middleware/edits';

const StyledColorPalette = styled.div`
.sketch-picker {
  border-radius: 0;
  background-color: transparent !important;
  box-shadow: none !important;
}
`;

const ColorPalette = () => {
  const dispatch = useDispatch();
  const file: M9File = useSelector(getSelectedFile);
  const overlayProps: OverlayProps = useSelector(getOverlayPropsOrDefault(file));

  const onColorChange = (event) => {
    //@ts-ignore
    dispatch(updateOverlayProps(file, { color: event.hex }));
  };

  return (
    <StyledColorPalette>
      <PanelHeader text="Color" />
      <SketchPicker onChange={onColorChange} color={overlayProps.color} />
    </StyledColorPalette>
  );
};

export default ColorPalette;
