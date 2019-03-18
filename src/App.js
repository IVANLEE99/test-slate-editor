import React, { Component } from 'react';
// Switch to using the Plain serializer.
import { Editor } from 'slate-react'
import Plain from 'slate-plain-serializer'

const existingValue = localStorage.getItem('content')
const initialValue = Plain.deserialize(
  existingValue || 'A string of plain text.'
)

class App extends React.Component {
  state = {
    value: initialValue,
  }

  onChange = ({ value }) => {
    if (value.document != this.state.value.document) {
      const content = Plain.serialize(value)
      localStorage.setItem('content', content)
    }

    this.setState({ value })
  }

  render() {
    return <Editor value={this.state.value} onChange={this.onChange} />
  }
}
export default App;
