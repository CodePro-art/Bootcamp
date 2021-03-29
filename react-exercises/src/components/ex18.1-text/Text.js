import React from 'react'
import Content from './Content'
import './Text.css'

const text = `We don’t recommend using indexes for keys if the order of items may change.
This can negatively impact performance and may cause issues with component state.
Check out Robin Pokorny’s article for an in-depth explanation on the negative impacts of using an index as a key.
If you choose not to assign an explicit key to list items then React will default to using indexes as keys.
Here is an in-depth explanation about why keys are necessary if you’re interested in learning more.`

export default function Text() {
  
  return (
    <div className="text-container">
      <h1>Text Manipulation:</h1>
      <h3>Read More using Hooks</h3>
      <Content text={text} maxLength={100}/>
    </div>
  )
}
