import React from 'react';
import ReactDOM from 'react-dom';

class AceEditor extends React.Component {

  static propTypes = {
    mode: React.PropTypes.string,
    content: React.PropTypes.string,
  };

  static defaultProps = {
    mode: 'json',
    code: '{}',
  };

  componentDidMount(){
    const node = ReactDOM.findDOMNode(this.refs.root);
    const editor = ace.edit(node);
    editor.setTheme("ace/theme/clouds");
    editor.getSession().setMode("ace/mode/json");
    editor.setShowPrintMargin(false);
    editor.setOptions({minLines: 25});
    editor.setOptions({maxLines: 50});
    // editor.getSession().on('change', (e) =>{
    //   console.log(editor.getValue());
    // });
  }

  saveChanges = () => {
    console.log('save changes');
    const node = ReactDOM.findDOMNode(this.refs.root);
    const editor = ace.edit(node);
    console.log(editor.getValue());
  };

  render() {
    const style = {fontSize: '14px !important', border: '1px solid lightgray'};
      return (
        <div>
          <div ref="root" style={style}>
            {this.props.code}
          </div>
          <input type="button" onClick={this.saveChanges} value="Save"/>
        </div>
      );
  }
}

export default AceEditor;
