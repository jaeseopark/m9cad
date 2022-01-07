/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PolyLine from '../componentsvg/PolyLine';
import Zigzag from '../componentsvg/Zigzag';
import Annotation from '../entity/annotation';
import Layer from '../entity/layer';
import { LayerType } from '../entity/overlayEntity';
import { togglePreviewNode } from '../global';

const X_POSITION_OFFSET = 30;
const Y_POSITION_OFFSET = 30;

const SVG_COMPONENT_MAP = {
  [LayerType.polyline]: PolyLine,
  [LayerType.zigzag]: Zigzag,
};

export const getSvgComp = (layer: Layer, isActiveLayer: boolean) => {
  const { layerType } = layer;
  const SvgComponent = SVG_COMPONENT_MAP[layerType];
  // @ts-ignore
  return <SvgComponent key={layer.created} layer={layer} isActiveLayer={isActiveLayer} />;
};

type CanvasWindowProps = {
  annotation: Annotation;
  svgRef;
  addNode;
  fileView;
  setPreviewNode;
};

const CanvasWindow = ({
  fileView,
  annotation,
  svgRef,
  addNode,
  setPreviewNode,
}: CanvasWindowProps) => {
  const onClick = (event) => {
    const { clientX, clientY } = event;
    if (event.button === 0) {
      const node = [clientX - X_POSITION_OFFSET, clientY - Y_POSITION_OFFSET];
      addNode(node);
    } else if (event.button === 2) {
      event.preventDefault();
      event.stopPropagation();
      togglePreviewNode();
    }
  };

  const onMouseMove = ({ clientX, clientY }) => {
    const node = [clientX - X_POSITION_OFFSET, clientY - Y_POSITION_OFFSET];
    setPreviewNode(node);
  };

  return (
    <>
      <div
        className="overlay interactive"
        onClick={onClick}
        onContextMenu={onClick}
        onMouseMove={onMouseMove}
      >
        <svg className="overlay render" ref={svgRef}>
          {annotation.layers
            .filter((layer) => layer.isVisible)
            .map((layer, i) => {
              const isActive = i === annotation.activeLayer;
              return getSvgComp(layer, isActive);
            })}
        </svg>
      </div>
      {fileView}
    </>
  );
};

const CanvasWindowWrapper = (props: CanvasWindowProps) => {
  const { fileView } = props;
  return (
    <div className="canvas">
      {fileView ? <CanvasWindow {...props} /> : null}
    </div>
  );
};

export default CanvasWindowWrapper;
