import { useSelector } from 'react-redux';
import PolyLine from '../componentsvg/PolyLine';
import Zigzag from '../componentsvg/Zigzag';
import Layer from '../entity/layer';
import M9File from '../entity/m9File';
import { LayerType } from '../entity/overlayEntity';
import { togglePreviewNode } from '../global';
import { getLayers } from '../redux/slice/edits';
import { getSelectedFile } from '../redux/slice/files';

const X_POSITION_OFFSET = 30;
const Y_POSITION_OFFSET = 30;

const SVG_COMPONENT_MAP = {
  [LayerType.polyline]: PolyLine,
  [LayerType.zigzag]: Zigzag,
};

export const SvgProxy = ({ layer, isSelected }: { layer: Layer, isSelected: boolean }) => {
  const SvgComponent = SVG_COMPONENT_MAP[layer.layerType];
  // @ts-ignore
  return <SvgComponent key={layer.id} layer={layer} isActiveLayer={isSelected} />;
};

type CanvasWindowProps = {
  svgRef;
};

const CanvasWindow = ({
  svgRef,
}: CanvasWindowProps) => {
  const file: M9File = useSelector(getSelectedFile);
  const layers: Layer[] = useSelector(getLayers(file));

  // const onClick = (event) => {
  //   const { clientX, clientY } = event;
  //   if (event.button === 0) {
  //     const node = [clientX - X_POSITION_OFFSET, clientY - Y_POSITION_OFFSET];
  //     addNode(node);
  //   } else if (event.button === 2) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //     togglePreviewNode();
  //   }
  // };

  // const onMouseMove = ({ clientX, clientY }) => {
  //   const node = [clientX - X_POSITION_OFFSET, clientY - Y_POSITION_OFFSET];
  //   setPreviewNode(node);
  // };

  // return (
  //   <>
  //     <div
  //       className="overlay interactive"
  //       onClick={onClick}
  //       onContextMenu={onClick}
  //       onMouseMove={onMouseMove}
  //     >
  //       <svg className="overlay render" ref={svgRef}>
  //         {layers
  //           .filter((layer) => layer.isVisible)
  //           .map((layer) => {
  //             const isSelected = file.selectedLayerId === layer.id;
  //             return <SvgProxy key={layer.id} layer={layer} isSelected={isSelected} />
  //           })}
  //       </svg>
  //     </div>
  //     {fileView}
  //   </>
  // );
  return <div />;
};

const CanvasWindowWrapper = (props: CanvasWindowProps) => {
  return (
    <div className="canvas">
      <CanvasWindow {...props} />
    </div>
  );
};

export default CanvasWindowWrapper;
