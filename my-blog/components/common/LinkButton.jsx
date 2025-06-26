import Link from 'next/link';
import React from 'react';

const btnBaseStyle = 'inline-block px-8 py-3 text-sm font-semibold aline-center rounded-full';
const LinkButton = ({ href = '#', styleType, linkType, text, className, isDownload = false, downloadName }) => {
  let style = '';
  let hoverStyle = '';
  if (styleType === 'white-bg') {
    style = 'bg-(--color-background) text-primary';
    hoverStyle = 'hover:bg-(-color--primary) hover:text-background';
  } else if (styleType === 'blue-bg') {
    style = 'bg-(--color-primary) text-background';
    hoverStyle = 'hover:bg-(-color--thirdly) hover:text-primary';
  } else if (styleType === 'blue-border') {
    style = 'bg-transparent text-primary border-1 border-primary';
    hoverStyle = 'hover:bg-(--color-background) hover:text-primary';
  } else {
    style = 'bg-transparent text-background border-1 border-background';
    hoverStyle = 'hover:bg-(--color-background) hover:text-primary';
  }

  const styleClass = `${btnBaseStyle} ${style} ${className ? '' + className : ''} ${hoverStyle} `;

  if (linkType == true) {
    return (
      <Link href={href} className={styleClass}>
        {text}
      </Link>
    );
  } else {
    return (
      <a href={href} className={styleClass} download={isDownload ? downloadName : undefined}>
        {text}
      </a>
    );
  }
};

export default LinkButton;
