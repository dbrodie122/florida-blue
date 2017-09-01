import React from 'react';

export class DataInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      focused: false
    };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }
  componentDidUpdate(){
    if(this.textInput){
      this.textInput.focus();
    }
  }


  handleUpdate(e){
    let topTitle = this.props.topTitle;
    let index = this.props.index;
    let innerTitle = this.props.innerTitle;
    let label = this.props.label;

    const pathInfo = [topTitle, index, innerTitle, label]
    const path = [];
    pathInfo.forEach(part => {
      if (part !== undefined) {
        path.push(part)
      }
    })
    this.props.handleChange(e, path)
  }

  handleFocus(){
    this.setState({focused: !this.state.focused})
  }

  render(){
    const capitalizedLabel = this.props.capitalize(this.props.label)

    return this.state.focused ? (
      <label className='column blue-text margin-1' onBlur={this.handleFocus}>
        {capitalizedLabel}
        <input
        type='text'
        onChange={this.handleUpdate}
        value={this.props.value}
        ref={(input) => this.textInput = input }
        />
      </label>
    )
    : (<input
        className='margin-1'
        type='text'
        onFocus={this.handleFocus}
        placeholder={capitalizedLabel}
        value={this.props.value}
        />
      )
  }
} 
