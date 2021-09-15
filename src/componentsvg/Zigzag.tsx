import React from 'react';
import { CanvasNode, OverlayProps } from '../entity/overlayEntity';
import { SvgRenderProps } from '../entity/SvgRenderProps';
import { config } from '../global';
import { getAngle, getLength, radiansToDegress } from '../util/mathUtil';
import { getPolyLine } from './PolyLine';

const getZigzagNodes = (
  p1: CanvasNode,
  p2: CanvasNode,
  overlayProps: OverlayProps
) => {
  const [p1x, p1y] = p1;
  const xDelta = overlayProps.zigzagWavelength / 2;
  let yDelta = overlayProps.zigzagAmplitude;
  const length = getLength(p1, p2);

  const nodes = [];
  for (let d = 0; d < length; d += xDelta) {
    // @ts-ignore
    nodes.push([p1x + d, p1y + yDelta]);
    yDelta *= -1;
  }
  return nodes;
};

const getZigzagLines = (nodes: CanvasNode[], overlayProps: OverlayProps) => {
  const zigzagPolyLines = [];
  for (let i = 1; i < nodes.length; i += 1) {
    const [p1, p2] = nodes.slice(i - 1, i + 1);
    const [p1x, p1y] = p1;
    const angle = radiansToDegress(getAngle(p1, p2));
    const zigzagNodes = getZigzagNodes(p1, p2, overlayProps);
    const polyLine = getPolyLine(zigzagNodes, overlayProps);
    zigzagPolyLines.push(
      // @ts-ignore
      <g transform={`rotate(${angle},${p1x},${p1y})`}>{polyLine}</g>
    );
  }
  return zigzagPolyLines;
};

// Alternatively: https://stackoverflow.com/a/20699895
const Zigzag = ({ layer, isActiveLayer }: SvgRenderProps) => {
  const { nodes, previewNode, overlayProps } = layer;

  const nodesCopy = [...nodes];

  if (isActiveLayer && previewNode && config.previewNodeEnabled) {
    nodesCopy.push(previewNode);
  }

  if (nodesCopy.length < 2) return null;

  if (nodesCopy.length > 2 && overlayProps.shouldCloseLoop) {
    nodesCopy.push(nodes[0]);
  }

  return getZigzagLines(nodesCopy, overlayProps);
};

export default Zigzag;
