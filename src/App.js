import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// 导入 `State` 模型。
import { Editor } from 'slate-react'
import { Value } from 'slate'
// 构建初始状态…
const initialState = Value.fromJSON({
  document: {
    nodes: [
      {
        kind: 'block',
        type: 'paragraph',
        nodes: [
          {
            kind: 'text',
            ranges: [
              {
                text: 'A line of text in a paragraph.'
              }
            ]
          }
        ]
      }
    ]
  }
})

class App extends Component {
  // 设置应用创建时的初始状态。
  state = {
    value: initialState
  }
  // 发生变更时，使用新的编辑器状态更新应用的 React 状态。
  onChange = ({ value }) => {
    this.setState({ value })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Editor value={this.state.value} onChange={this.onChange} />
      </div>
    );
  }
}

export default App;
