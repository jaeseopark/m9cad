import React from 'react';
import { CanvasNode, OverlayProps } from '../entity/overlayEntity';
import { SvgRenderProps } from '../entity/SvgRenderProps';
import { config } from '../global';

const toString = (node: CanvasNode) => {
  const [x, y] = node;
  return `${x},${y}`;
};

export const getPolyLine = (
  nodes: CanvasNode[],
  overlayProps: OverlayProps
) => {
  return (
    <polyline
      points={nodes.map(toString).join(' ')}
      stroke={overlayProps.color}
      strokeWidth={overlayProps.strokeWidth}
      strokeDasharray={`${overlayProps.strokeDashLength},${overlayProps.strokeDashGap}`}
      fill="none"
    />
  );
};

const PolyLine = ({ layer, isActiveLayer }: SvgRenderProps) => {
  const { nodes, previewNode, overlayProps } = layer;

  const nodesCopy = [...nodes];

  if (isActiveLayer && previewNode && config.previewNodeEnabled) {
    nodesCopy.push(previewNode);
  }

  if (nodesCopy.length < 2) return null;

  if (nodesCopy.length > 2 && overlayProps.shouldCloseLoop) {
    nodesCopy.push(nodes[0]);
  }

  return getPolyLine(nodesCopy, overlayProps);
};

export default PolyLine;
