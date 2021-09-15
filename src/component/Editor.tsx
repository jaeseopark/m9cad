/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/naming-convention */
import { useRef, useState } from 'react';
import {
  CanvasNode,
  defaultLayerType,
  LayerType,
  OverlayProps,
} from '../entity/overlayEntity';
import { getTimestamp } from '../util/dateUtil';
import Toolbar from './Toolbar';

import Annotation from '../entity/annotation';
import LayerPanel from './LayerPanel';
import ToolBox from './ToolBox';
import CanvasWindow from './CanvasWindow';
import ColorPalette from './ColorPalette';

type EditorProps = {
  fileView: JSX.Element;
};

const Editor = ({ fileView }: EditorProps) => {
  const [annotation] = useState<Annotation>(new Annotation());
  const svgRef = useRef(null);
  const [layerType, setLayerType] = useState<LayerType>(defaultLayerType);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setRerenderTimestamp] = useState<number>(0);
  const rerender = () => setRerenderTimestamp(getTimestamp());

  const updateOverlayProps = (partialProps: OverlayProps) => {
    annotation.updateOverlayProps(partialProps);
    rerender();
  };

  const undo = () => {
    annotation.getActiveLayer().removeLastNode();
    rerender();
  };

  const clearActiveLayer = () => {
    annotation.getActiveLayer().clear();
    rerender();
  };

  const addNode = (node: CanvasNode) => {
    annotation.addNode(node, layerType);
    rerender();
  };

  const setPreviewNode = (node: CanvasNode) => {
    annotation.setPreviewNode(node);
    rerender();
  };

  const save = () => {
    alert("to be implemented");
  };

  return (
    <div className="editor">
      <Toolbar
        onChange={updateOverlayProps}
        // onClear={clearActiveLayer}
        onUndo={undo}
        onSave={save}
        overlayProps={annotation.getActiveLayer().overlayProps}
      />
      <div className="body">
        <div className="left-side">
          <ToolBox selected={layerType} onChange={setLayerType} />
        </div>
        <CanvasWindow
          fileView={fileView}
          annotation={annotation}
          svgRef={svgRef}
          addNode={addNode}
          setPreviewNode={setPreviewNode}
        />
        <div className="right-side">
          <ColorPalette
            onChange={updateOverlayProps}
            overlayProps={annotation.getActiveLayer().overlayProps}
          />
          <LayerPanel
            annotation={annotation}
            rerenderEditor={rerender}
            onClearActiveLayer={clearActiveLayer}
          />
        </div>
      </div>
    </div>
  );
};

export default Editor;
