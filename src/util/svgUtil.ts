/* eslint-disable import/prefer-default-export */

const xmlSerializer = new XMLSerializer();

export const svgDomToString = (svgDom) => {
  return xmlSerializer.serializeToString(svgDom);
};
