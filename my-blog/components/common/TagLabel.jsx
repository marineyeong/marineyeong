import React from 'react';

const TagLabel = ({ styleType, text, className }) => {
  let style = '';
  if (styleType === 'border') {
    style = 'inline-block px-2 py-1 text-secondary text-sm border border-(--color-thirdly) rounded-full';
  } else {
    style = 'inline-block px-2 py-1 text-background text-sm bg-(--color-thirdly) rounded-full';
  }
  const styleClass = `${style} ${className ? '' + className : ''}`;
  return <span className={styleClass}>{text}</span>;
};

export default TagLabel;
