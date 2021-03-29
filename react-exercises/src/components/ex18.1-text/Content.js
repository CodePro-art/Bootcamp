import React, { useState } from "react";

export default function Content({text , maxLength}) {

  const [status,setStatus] = useState(true);
  const textDisplay = status ? text.slice(0,maxLength) + `...` : text;
  let operation = status ? 'Read more' : 'Show less';

  return (
    <p className="p-content">
      {textDisplay}
      <span className="read-more" onClick={() => setStatus(!status) }> {operation}</span>
    </p>
  )
}