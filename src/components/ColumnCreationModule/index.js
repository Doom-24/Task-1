import {Component} from 'react'

import {v4} from 'uuid'

import TableEntryModule from '../TableEntryModule'

import './index.css'

class ColumnCreationModule extends Component {
  state = {
    clicked: false,
    columnName: '',
    selectedOption: 'date',
    onClickSubmit: false,
    columnList: [],
  }

  onChangeColumnName = event => {
    const values = event.target.value
    this.setState({columnName: values})
  }

  onEnterValues = event => {
    const values = event.target.value
    const res = values.split(',')

    this.setState({selectedOption: res})
  }

  onChangeOptions = event => {
    if (event.target.value === 'multi select') {
      this.setState({clicked: true})
    }

    if (event.target.value === 'date') {
      this.setState({selectedOption: 'date'})
      this.setState({clicked: false})
    }

    if (event.target.value === 'number') {
      this.setState({selectedOption: 'number'})
      this.setState({clicked: false})
    }
  }

  onClickColumnBtn = event => {
    event.preventDefault()
    const {columnName, selectedOption} = this.state
    const newList = {
      id: v4(),
      name: columnName,
      options: selectedOption,
    }

    this.setState(prevState => ({
      columnList: [...prevState.columnList, newList],
      columnName: '',
      selectedOption: '',
      onClickSubmit: true,
    }))
  }

  render() {
    const {
      clicked,
      columnName,
      multiValues,
      onClickSubmit,
      columnList,
    } = this.state

    return (
      <div className="container">
        <form className="column-creation-module">
          <input
            type="text"
            placeholder="enter your text"
            className="column-name"
            value={columnName}
            onChange={this.onChangeColumnName}
          />
          <div className="select-box">
            <select className="column-type" onChange={this.onChangeOptions}>
              <option value="date">date</option>
              <option value="number">number</option>
              <option value="multi select">multi select</option>
            </select>

            {clicked ? (
              <input
                className="input-comma"
                type="text"
                placeholder="enter values with comma separated"
                onChange={this.onEnterValues}
                value={multiValues}
              />
            ) : (
              ''
            )}
          </div>
          <button
            onClick={this.onClickColumnBtn}
            className="submit-btn"
            type="button"
          >
            Submit
          </button>
        </form>
        <div>
          {onClickSubmit && <TableEntryModule columnList={columnList} />}
        </div>
      </div>
    )
  }
}

export default ColumnCreationModule
