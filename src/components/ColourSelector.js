import React from 'react';

const ColourSelector = (props) => {
  const { key,config, selectNextBackground } = props
  const { background,classname } = config;
  return (
    <button id={key} className={classname} onClick={() => selectNextBackground({background: background})} width="50" style={{border:"1px solid black"}}>
      {config.label}
    </button>
  )
}
export default ColourSelector;
