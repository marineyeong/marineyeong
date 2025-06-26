import Link from 'next/link';
import TagLabel from '../common/TagLabel';

import React from 'react';

const PostItem = ({ href, titleText, detailText, labelStyle, labelText, labelClassName }) => {
  const labels = Array.isArray(labelText) ? labelText : [labelText];

  return (
    <li className="my-4 border-1 border-(--color-thirdly) rounded-2xl hover:border-(--color-primary)">
      <Link href={href} className="block px-4 py-5">
        <div className="mb-5">
          <h3 className="mb-3 text-3xl font-bold">{titleText}</h3>
          {labels.map((label, index) => (
            <TagLabel key={index} styleType={labelStyle[index]} text={label} className={labelClassName} />
          ))}
        </div>
        <p className="text-gray002 text-sm">{detailText}</p>
      </Link>
    </li>
  );
};

export default PostItem;
