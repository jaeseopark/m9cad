/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const PanelHeader = ({ text }: { text: string }) => {
  return (
    <div className="panel-header">
      <label id="panel-header-label" className="slick">
        {text}
      </label>
    </div>
  );
};

export default PanelHeader;
