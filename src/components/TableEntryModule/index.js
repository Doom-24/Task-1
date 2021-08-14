import {Component} from 'react'

import {v4} from 'uuid'

import TableViewModule from '../TableViewModule'

import './index.css'

class TableEntryModule extends Component {
  state = {
    AddRow: false,
    tableEntryList: [],
    tableSubmit: false,
    tableEntry1: '',
    tableEntry2: '',
    tableEntry3: '',
    tableEntry4: '',
    tableEntry5: '',
    tableEntry6: '',
    tableEntry7: '',
    tableEntry8: '',
    tableEntry9: '',
    tableEntry10: '',
    tableEntry11: '',
    tableEntry12: '',
    tableEntry13: '',
    tableEntry14: '',
    tableEntry16: '',
    tableEntry15: '',
    tableEntry17: '',
    tableEntry18: '',
    tableEntry19: '',
    tableEntry20: '',
    tableEntryDate1: '',
    tableEntryDate2: '',
    tableEntryDate3: '',
    tableEntryDate4: '',
    tableEntryDate5: '',
    tableEntryDate6: '',
    tableEntryDate7: '',
    tableEntryDate8: '',
    tableEntryDate9: '',
    tableEntryDate10: '',
    tableEntryDate11: '',
    tableEntryDate12: '',
    tableEntryDate13: '',
    tableEntryDate14: '',
    tableEntryDate16: '',
    tableEntryDate15: '',
    tableEntryDate17: '',
    tableEntryDate18: '',
    tableEntryDate19: '',
    tableEntryDate20: '',
    tableEntrySelect1: '',
    tableEntrySelect2: '',
    tableEntrySelect3: '',
    tableEntrySelect4: '',
    tableEntrySelect5: '',
    tableEntrySelect6: '',
    tableEntrySelect7: '',
    tableEntrySelect8: '',
    tableEntrySelect9: '',
    tableEntrySelect10: '',
    tableEntrySelect11: '',
    tableEntrySelect12: '',
    tableEntrySelect13: '',
    tableEntrySelect14: '',
    tableEntrySelect15: '',
    tableEntrySelect16: '',
    tableEntrySelect17: '',
    tableEntrySelect18: '',
    tableEntrySelect19: '',
    tableEntrySelect20: '',
  }

  onChangeSelect1 = event => {
    const values = event.target.value
    this.setState({tableEntrySelect1: event.target.value})
    console.log(values)
  }

  onChangeSelect2 = event => {
    const values = event.target.value
    this.setState({tableEntrySelect2: event.target.value})
    console.log(values)
  }

  onChangeSelect3 = event => {
    const values = event.target.value
    this.setState({tableEntrySelect3: event.target.value})
    console.log(values)
  }

  onChangeSelect4 = event => {
    const values = event.target.value
    this.setState({tableEntrySelect4: event.target.value})
    console.log(values)
  }

  onChangeSelect5 = event => {
    const values = event.target.value
    this.setState({tableEntrySelect5: event.target.value})
    console.log(values)
  }

  onChangeSelect6 = event => {
    const values = event.target.value
    this.setState({tableEntrySelect6: event.target.value})
    console.log(values)
  }

  onChangeSelect7 = event => {
    const values = event.target.value
    this.setState({tableEntrySelect7: event.target.value})
    console.log(values)
  }

  onChangeSelect8 = event => {
    const values = event.target.value
    this.setState({tableEntrySelect8: event.target.value})
    console.log(values)
  }

  onChangeSelect9 = event => {
    const values = event.target.value
    this.setState({tableEntrySelect9: event.target.value})
    console.log(values)
  }

  onChangeSelect10 = event => {
    const values = event.target.value
    this.setState({tableEntrySelect10: event.target.value})
    console.log(values)
  }

  onChangeSelect11 = event => {
    const values = event.target.value
    this.setState({tableEntrySelect11: event.target.value})
    console.log(values)
  }

  onChangeSelect12 = event => {
    const values = event.target.value
    this.setState({tableEntrySelect12: event.target.value})
    console.log(values)
  }

  onChangeSelect13 = event => {
    const values = event.target.value
    this.setState({tableEntrySelect13: event.target.value})
    console.log(values)
  }

  onChangeSelect14 = event => {
    const values = event.target.value
    this.setState({tableEntrySelect14: event.target.value})
    console.log(values)
  }

  onChangeSelect15 = event => {
    const values = event.target.value
    this.setState({tableEntrySelect15: event.target.value})
    console.log(values)
  }

  onChangeSelect16 = event => {
    const values = event.target.value
    this.setState({tableEntrySelect16: event.target.value})
    console.log(values)
  }

  onChangeSelect17 = event => {
    const values = event.target.value
    this.setState({tableEntrySelect17: event.target.value})
    console.log(values)
  }

  onChangeSelect18 = event => {
    const values = event.target.value
    this.setState({tableEntrySelect18: event.target.value})
    console.log(values)
  }

  onChangeSelect19 = event => {
    const values = event.target.value
    this.setState({tableEntrySelect19: event.target.value})
    console.log(values)
  }

  onChangeSelect20 = event => {
    const values = event.target.value
    this.setState({tableEntrySelect20: event.target.value})
    console.log(values)
  }

  onChange1 = event => {
    const values = event.target.value
    this.setState({tableEntry1: event.target.value})
    console.log(values)
  }

  onChange2 = event => {
    this.setState({tableEntry2: event.target.value})
    console.log(event.target.value)
  }

  onChange3 = event => {
    this.setState({tableEntry3: event.target.value})
    console.log(event.target.value)
  }

  onChange4 = event => {
    this.setState({tableEntry4: event.target.value})
    console.log(event.target.value)
  }

  onChange5 = event => {
    this.setState({tableEntry5: event.target.value})
    console.log(event.target.value)
  }

  onChange6 = event => {
    this.setState({tableEntry6: event.target.value})
    console.log(event.target.value)
  }

  onChange7 = event => {
    this.setState({tableEntry7: event.target.value})
    console.log(event.target.value)
  }

  onChange8 = event => {
    this.setState({tableEntry8: event.target.value})
    console.log(event.target.value)
  }

  onChange9 = event => {
    this.setState({tableEntry9: event.target.value})
    console.log(event.target.value)
  }

  onChange10 = event => {
    this.setState({tableEntry10: event.target.value})
    console.log(event.target.value)
  }

  onChange11 = event => {
    this.setState({tableEntry11: event.target.value})
    console.log(event.target.value)
  }

  onChange12 = event => {
    this.setState({tableEntry12: event.target.value})
    console.log(event.target.value)
  }

  onChange13 = event => {
    this.setState({tableEntry13: event.target.value})
    console.log(event.target.value)
  }

  onChange14 = event => {
    this.setState({tableEntry14: event.target.value})
    console.log(event.target.value)
  }

  onChange15 = event => {
    this.setState({tableEntry15: event.target.value})
    console.log(event.target.value)
  }

  onChange16 = event => {
    this.setState({tableEntry16: event.target.value})
    console.log(event.target.value)
  }

  onChange17 = event => {
    this.setState({tableEntry17: event.target.value})
    console.log(event.target.value)
  }

  onChange18 = event => {
    this.setState({tableEntry18: event.target.value})
    console.log(event.target.value)
  }

  onChange19 = event => {
    this.setState({tableEntry19: event.target.value})
    console.log(event.target.value)
  }

  onChange20 = event => {
    this.setState({tableEntry20: event.target.value})
    console.log(event.target.value)
  }

  onChangeDate1 = event => {
    const values = event.target.value
    this.setState({tableEntryDate1: event.target.value})
    console.log(values)
  }

  onChangeDate2 = event => {
    const values = event.target.value
    this.setState({tableEntryDate2: event.target.value})
    console.log(values)
  }

  onChangeDate3 = event => {
    const values = event.target.value
    this.setState({tableEntryDate3: event.target.value})
    console.log(values)
  }

  onChangeDate4 = event => {
    const values = event.target.value
    this.setState({tableEntryDate4: event.target.value})
    console.log(values)
  }

  onChangeDate5 = event => {
    const values = event.target.value
    this.setState({tableEntryDate5: event.target.value})
    console.log(values)
  }

  onChangeDate6 = event => {
    const values = event.target.value
    this.setState({tableEntryDate6: event.target.value})
    console.log(values)
  }

  onChangeDate7 = event => {
    const values = event.target.value
    this.setState({tableEntryDate7: event.target.value})
    console.log(values)
  }

  onChangeDate8 = event => {
    const values = event.target.value
    this.setState({tableEntryDate8: event.target.value})
    console.log(values)
  }

  onChangeDate9 = event => {
    const values = event.target.value
    this.setState({tableEntryDate9: event.target.value})
    console.log(values)
  }

  onChangeDate10 = event => {
    const values = event.target.value
    this.setState({tableEntryDate10: event.target.value})
    console.log(values)
  }

  onChangeDate11 = event => {
    const values = event.target.value
    this.setState({tableEntryDate11: event.target.value})
    console.log(values)
  }

  onChangeDate12 = event => {
    const values = event.target.value
    this.setState({tableEntryDate12: event.target.value})
    console.log(values)
  }

  onChangeDate13 = event => {
    const values = event.target.value
    this.setState({tableEntryDate13: event.target.value})
    console.log(values)
  }

  onChangeDate14 = event => {
    const values = event.target.value
    this.setState({tableEntryDate14: event.target.value})
    console.log(values)
  }

  onChangeDate15 = event => {
    const values = event.target.value
    this.setState({tableEntryDate15: event.target.value})
    console.log(values)
  }

  onChangeDate16 = event => {
    const values = event.target.value
    this.setState({tableEntryDate16: event.target.value})
    console.log(values)
  }

  onChangeDate17 = event => {
    const values = event.target.value
    this.setState({tableEntryDate17: event.target.value})
    console.log(values)
  }

  onChangeDate18 = event => {
    const values = event.target.value
    this.setState({tableEntryDate18: event.target.value})
    console.log(values)
  }

  onChangeDate19 = event => {
    const values = event.target.value
    this.setState({tableEntryDate19: event.target.value})
    console.log(values)
  }

  onChangeDate20 = event => {
    const values = event.target.value
    this.setState({tableEntryDate20: event.target.value})
    console.log(values)
  }

  onSubmitTableEntry = () => {
    const {
      tableEntry1,
      tableEntry2,
      tableEntry3,
      tableEntry4,
      tableEntry5,
      tableEntry6,
      tableEntry7,
      tableEntry8,
      tableEntry9,
      tableEntry10,
      tableEntry11,
      tableEntry12,
      tableEntry13,
      tableEntry14,
      tableEntry15,
      tableEntry16,
      tableEntry17,
      tableEntry18,
      tableEntry19,
      tableEntry20,
      tableEntryDate1,
      tableEntryDate2,
      tableEntryDate3,
      tableEntryDate4,
      tableEntryDate5,
      tableEntryDate6,
      tableEntryDate7,
      tableEntryDate8,
      tableEntryDate9,
      tableEntryDate10,
      tableEntryDate11,
      tableEntryDate12,
      tableEntryDate13,
      tableEntryDate14,
      tableEntryDate15,
      tableEntryDate16,
      tableEntryDate17,
      tableEntryDate18,
      tableEntryDate19,
      tableEntryDate20,
      tableEntrySelect1,
      tableEntrySelect2,
      tableEntrySelect3,
      tableEntrySelect4,
      tableEntrySelect5,
      tableEntrySelect6,
      tableEntrySelect7,
      tableEntrySelect8,
      tableEntrySelect9,
      tableEntrySelect10,
      tableEntrySelect11,
      tableEntrySelect12,
      tableEntrySelect13,
      tableEntrySelect14,
      tableEntrySelect15,
      tableEntrySelect16,
      tableEntrySelect17,
      tableEntrySelect18,
      tableEntrySelect19,
      tableEntrySelect20,
    } = this.state

    const newTableList = {
      id: v4(),

      tableEntry1,
      tableEntry2,
      tableEntry3,
      tableEntry4,
      tableEntry5,
      tableEntry6,
      tableEntry7,
      tableEntry8,
      tableEntry9,
      tableEntry10,
      tableEntry11,
      tableEntry12,
      tableEntry13,
      tableEntry14,
      tableEntry15,
      tableEntry16,
      tableEntry17,
      tableEntry18,
      tableEntry19,
      tableEntry20,

      tableEntryDate1,
      tableEntryDate2,
      tableEntryDate3,
      tableEntryDate4,
      tableEntryDate5,
      tableEntryDate6,
      tableEntryDate7,
      tableEntryDate8,
      tableEntryDate9,
      tableEntryDate10,
      tableEntryDate11,
      tableEntryDate12,
      tableEntryDate13,
      tableEntryDate14,
      tableEntryDate15,
      tableEntryDate16,
      tableEntryDate17,
      tableEntryDate18,
      tableEntryDate19,
      tableEntryDate20,

      tableEntrySelect1,
      tableEntrySelect2,
      tableEntrySelect3,
      tableEntrySelect4,
      tableEntrySelect5,
      tableEntrySelect6,
      tableEntrySelect7,
      tableEntrySelect8,
      tableEntrySelect9,
      tableEntrySelect10,
      tableEntrySelect11,
      tableEntrySelect12,
      tableEntrySelect13,
      tableEntrySelect14,
      tableEntrySelect15,
      tableEntrySelect16,
      tableEntrySelect17,
      tableEntrySelect18,
      tableEntrySelect19,
      tableEntrySelect20,
    }

    this.setState(prevState => ({
      tableEntryList: [...prevState.tableEntryList, newTableList],
      tableSubmit: true,
      tableEntry1: '',
      tableEntry2: '',
      tableEntry3: '',
      tableEntry4: '',
      tableEntry5: '',
      tableEntry6: '',
      tableEntry7: '',
      tableEntry8: '',
      tableEntry9: '',
      tableEntry10: '',
      tableEntry11: '',
      tableEntry12: '',
      tableEntry13: '',
      tableEntry14: '',
      tableEntry16: '',
      tableEntry15: '',
      tableEntry17: '',
      tableEntry18: '',
      tableEntry19: '',
      tableEntry20: '',
      tableEntryDate1: '',
      tableEntryDate2: '',
      tableEntryDate3: '',
      tableEntryDate4: '',
      tableEntryDate5: '',
      tableEntryDate6: '',
      tableEntryDate7: '',
      tableEntryDate8: '',
      tableEntryDate9: '',
      tableEntryDate10: '',
      tableEntryDate11: '',
      tableEntryDate12: '',
      tableEntryDate13: '',
      tableEntryDate14: '',
      tableEntryDate16: '',
      tableEntryDate15: '',
      tableEntryDate17: '',
      tableEntryDate18: '',
      tableEntryDate19: '',
      tableEntryDate20: '',
      tableEntrySelect1: '',
      tableEntrySelect2: '',
      tableEntrySelect3: '',
      tableEntrySelect4: '',
      tableEntrySelect5: '',
      tableEntrySelect6: '',
      tableEntrySelect7: '',
      tableEntrySelect8: '',
      tableEntrySelect9: '',
      tableEntrySelect10: '',
      tableEntrySelect11: '',
      tableEntrySelect12: '',
      tableEntrySelect13: '',
      tableEntrySelect14: '',
      tableEntrySelect15: '',
      tableEntrySelect16: '',
      tableEntrySelect17: '',
      tableEntrySelect18: '',
      tableEntrySelect19: '',
      tableEntrySelect20: '',
    }))
  }

  Add = () => {
    this.setState({AddRow: true})
    // this.AddingRow()
  }

  //   AddingRow = () => {
  //     const {AddRow, tableEntry1, tableEntryDate1} = this.state
  //     const {columnList} = this.props
  //     const result = AddRow
  //       ? columnList.map(each => (
  //           <ul className="table-entry-lists">
  //             <li className="li2">
  //               {each.options === 'date' ? (
  //                 <input
  //                   className="input"
  //                   type={each.options}
  //                   onChange={this.onChangeDate1}
  //                   value={tableEntryDate1}
  //                 />
  //               ) : (
  //                 ''
  //               )}
  //               {each.options === 'number' ? (
  //                 <input
  //                   className="input"
  //                   type={each.options}
  //                   onChange={this.onChange1}
  //                   value={tableEntry1}
  //                 />
  //               ) : (
  //                 ''
  //               )}
  //               {each.options !== 'date' && each.options !== 'number' ? (
  //                 <select className="select" onChange={this.onChangeSelect1}>
  //                   {each.options.map(eachOption => (
  //                     <option value={eachOption}>{eachOption}</option>
  //                   ))}
  //                 </select>
  //               ) : (
  //                 ''
  //               )}
  //             </li>
  //           </ul>
  //         ))
  //       : ''

  //     return result
  //   }

  render() {
    const {columnList} = this.props
    const {
      AddRow,
      tableEntryList,
      tableSubmit,
      tableEntry1,
      tableEntry2,
      tableEntry3,
      tableEntry4,
      tableEntry5,
      tableEntry6,
      tableEntry7,
      tableEntry8,
      tableEntry9,
      tableEntry10,
      tableEntry11,
      tableEntry12,
      tableEntry13,
      tableEntry14,
      tableEntry15,
      tableEntry16,
      tableEntry17,
      tableEntry18,
      tableEntry19,
      tableEntry20,
      tableEntryDate1,
      tableEntryDate2,
      tableEntryDate3,
      tableEntryDate4,
      tableEntryDate5,
      tableEntryDate6,
      tableEntryDate7,
      tableEntryDate8,
      tableEntryDate9,
      tableEntryDate10,
      tableEntryDate11,
      tableEntryDate12,
      tableEntryDate13,
      tableEntryDate14,
      tableEntryDate15,
      tableEntryDate16,
      tableEntryDate17,
      tableEntryDate18,
      tableEntryDate19,
      tableEntryDate20,
    } = this.state

    return (
      <div className="table-entry-container">
        <div className="table-entry">
          {columnList.map(each => (
            <ul className="table-entry-lists">
              <li className="li1">{each.name}</li>
              <li className="li2">
                {each.options === 'date' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChangeDate1}
                    value={tableEntryDate1}
                  />
                ) : (
                  ''
                )}
                {each.options === 'number' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChange1}
                    value={tableEntry1}
                  />
                ) : (
                  ''
                )}
                {each.options !== 'date' && each.options !== 'number' ? (
                  <select className="select" onChange={this.onChangeSelect1}>
                    {each.options.map(eachOption => (
                      <option value={eachOption}>{eachOption}</option>
                    ))}
                  </select>
                ) : (
                  ''
                )}
              </li>
              <li className="li2">
                {each.options === 'date' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChangeDate2}
                    value={tableEntryDate2}
                  />
                ) : (
                  ''
                )}
                {each.options === 'number' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChange2}
                    value={tableEntry2}
                  />
                ) : (
                  ''
                )}
                {each.options !== 'date' && each.options !== 'number' ? (
                  <select className="select" onChange={this.onChangeSelect2}>
                    {each.options.map(eachOption => (
                      <option value={eachOption}>{eachOption}</option>
                    ))}
                  </select>
                ) : (
                  ''
                )}
              </li>
              <li className="li2">
                {each.options === 'date' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChangeDate3}
                    value={tableEntryDate3}
                  />
                ) : (
                  ''
                )}
                {each.options === 'number' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChange3}
                    value={tableEntry3}
                  />
                ) : (
                  ''
                )}
                {each.options !== 'date' && each.options !== 'number' ? (
                  <select className="select" onChange={this.onChangeSelect3}>
                    {each.options.map(eachOption => (
                      <option value={eachOption}>{eachOption}</option>
                    ))}
                  </select>
                ) : (
                  ''
                )}
              </li>
              <li className="li2">
                {each.options === 'date' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChangeDate4}
                    value={tableEntryDate4}
                  />
                ) : (
                  ''
                )}
                {each.options === 'number' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChange4}
                    value={tableEntry4}
                  />
                ) : (
                  ''
                )}
                {each.options !== 'date' && each.options !== 'number' ? (
                  <select className="select" onChange={this.onChangeSelect4}>
                    {each.options.map(eachOption => (
                      <option value={eachOption}>{eachOption}</option>
                    ))}
                  </select>
                ) : (
                  ''
                )}
              </li>
              <li className="li2">
                {each.options === 'date' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChangeDate5}
                    value={tableEntryDate5}
                  />
                ) : (
                  ''
                )}
                {each.options === 'number' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChange5}
                    value={tableEntry5}
                  />
                ) : (
                  ''
                )}
                {each.options !== 'date' && each.options !== 'number' ? (
                  <select className="select" onChange={this.onChangeSelect5}>
                    {each.options.map(eachOption => (
                      <option value={eachOption}>{eachOption}</option>
                    ))}
                  </select>
                ) : (
                  ''
                )}
              </li>
              <li className="li2">
                {each.options === 'date' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChangeDate6}
                    value={tableEntryDate6}
                  />
                ) : (
                  ''
                )}
                {each.options === 'number' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChange6}
                    value={tableEntry6}
                  />
                ) : (
                  ''
                )}
                {each.options !== 'date' && each.options !== 'number' ? (
                  <select className="select" onChange={this.onChangeSelect6}>
                    {each.options.map(eachOption => (
                      <option value={eachOption}>{eachOption}</option>
                    ))}
                  </select>
                ) : (
                  ''
                )}
              </li>
              <li className="li2">
                {each.options === 'date' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChangeDate7}
                    value={tableEntryDate7}
                  />
                ) : (
                  ''
                )}
                {each.options === 'number' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChange7}
                    value={tableEntry7}
                  />
                ) : (
                  ''
                )}
                {each.options !== 'date' && each.options !== 'number' ? (
                  <select className="select" onChange={this.onChangeSelect7}>
                    {each.options.map(eachOption => (
                      <option value={eachOption}>{eachOption}</option>
                    ))}
                  </select>
                ) : (
                  ''
                )}
              </li>

              <li className="li2">
                {each.options === 'date' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChangeDate8}
                    value={tableEntryDate8}
                  />
                ) : (
                  ''
                )}
                {each.options === 'number' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChange8}
                    value={tableEntry8}
                  />
                ) : (
                  ''
                )}
                {each.options !== 'date' && each.options !== 'number' ? (
                  <select className="select" onChange={this.onChangeSelect8}>
                    {each.options.map(eachOption => (
                      <option value={eachOption}>{eachOption}</option>
                    ))}
                  </select>
                ) : (
                  ''
                )}
              </li>
              <li className="li2">
                {each.options === 'date' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChangeDate9}
                    value={tableEntryDate9}
                  />
                ) : (
                  ''
                )}
                {each.options === 'number' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChange9}
                    value={tableEntry9}
                  />
                ) : (
                  ''
                )}
                {each.options !== 'date' && each.options !== 'number' ? (
                  <select className="select" onChange={this.onChangeSelect9}>
                    {each.options.map(eachOption => (
                      <option value={eachOption}>{eachOption}</option>
                    ))}
                  </select>
                ) : (
                  ''
                )}
              </li>
              <li className="li2">
                {each.options === 'date' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChangeDate10}
                    value={tableEntryDate10}
                  />
                ) : (
                  ''
                )}
                {each.options === 'number' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChange10}
                    value={tableEntry10}
                  />
                ) : (
                  ''
                )}
                {each.options !== 'date' && each.options !== 'number' ? (
                  <select className="select" onChange={this.onChangeSelect10}>
                    {each.options.map(eachOption => (
                      <option value={eachOption}>{eachOption}</option>
                    ))}
                  </select>
                ) : (
                  ''
                )}
              </li>

              <li className="li2">
                {each.options === 'date' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChangeDate11}
                    value={tableEntryDate11}
                  />
                ) : (
                  ''
                )}
                {each.options === 'number' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChange11}
                    value={tableEntry11}
                  />
                ) : (
                  ''
                )}
                {each.options !== 'date' && each.options !== 'number' ? (
                  <select className="select" onChange={this.onChangeSelect11}>
                    {each.options.map(eachOption => (
                      <option value={eachOption}>{eachOption}</option>
                    ))}
                  </select>
                ) : (
                  ''
                )}
              </li>
              <li className="li2">
                {each.options === 'date' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChangeDate12}
                    value={tableEntryDate12}
                  />
                ) : (
                  ''
                )}
                {each.options === 'number' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChange12}
                    value={tableEntry12}
                  />
                ) : (
                  ''
                )}
                {each.options !== 'date' && each.options !== 'number' ? (
                  <select className="select" onChange={this.onChangeSelect12}>
                    {each.options.map(eachOption => (
                      <option value={eachOption}>{eachOption}</option>
                    ))}
                  </select>
                ) : (
                  ''
                )}
              </li>
              <li className="li2">
                {each.options === 'date' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChangeDate13}
                    value={tableEntryDate13}
                  />
                ) : (
                  ''
                )}
                {each.options === 'number' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChange13}
                    value={tableEntry13}
                  />
                ) : (
                  ''
                )}
                {each.options !== 'date' && each.options !== 'number' ? (
                  <select className="select" onChange={this.onChangeSelect13}>
                    {each.options.map(eachOption => (
                      <option value={eachOption}>{eachOption}</option>
                    ))}
                  </select>
                ) : (
                  ''
                )}
              </li>

              <li className="li2">
                {each.options === 'date' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChangeDate14}
                    value={tableEntryDate14}
                  />
                ) : (
                  ''
                )}
                {each.options === 'number' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChange14}
                    value={tableEntry14}
                  />
                ) : (
                  ''
                )}
                {each.options !== 'date' && each.options !== 'number' ? (
                  <select className="select" onChange={this.onChangeSelect14}>
                    {each.options.map(eachOption => (
                      <option value={eachOption}>{eachOption}</option>
                    ))}
                  </select>
                ) : (
                  ''
                )}
              </li>
              <li className="li2">
                {each.options === 'date' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChangeDate15}
                    value={tableEntryDate15}
                  />
                ) : (
                  ''
                )}
                {each.options === 'number' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChange15}
                    value={tableEntry15}
                  />
                ) : (
                  ''
                )}
                {each.options !== 'date' && each.options !== 'number' ? (
                  <select className="select" onChange={this.onChangeSelect15}>
                    {each.options.map(eachOption => (
                      <option value={eachOption}>{eachOption}</option>
                    ))}
                  </select>
                ) : (
                  ''
                )}
              </li>
              <li className="li2">
                {each.options === 'date' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChangeDate16}
                    value={tableEntryDate16}
                  />
                ) : (
                  ''
                )}
                {each.options === 'number' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChange16}
                    value={tableEntry16}
                  />
                ) : (
                  ''
                )}
                {each.options !== 'date' && each.options !== 'number' ? (
                  <select className="select" onChange={this.onChangeSelect16}>
                    {each.options.map(eachOption => (
                      <option value={eachOption}>{eachOption}</option>
                    ))}
                  </select>
                ) : (
                  ''
                )}
              </li>

              <li className="li2">
                {each.options === 'date' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChangeDate17}
                    value={tableEntryDate17}
                  />
                ) : (
                  ''
                )}
                {each.options === 'number' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChange17}
                    value={tableEntry17}
                  />
                ) : (
                  ''
                )}
                {each.options !== 'date' && each.options !== 'number' ? (
                  <select className="select" onChange={this.onChangeSelect17}>
                    {each.options.map(eachOption => (
                      <option value={eachOption}>{eachOption}</option>
                    ))}
                  </select>
                ) : (
                  ''
                )}
              </li>
              <li className="li2">
                {each.options === 'date' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChangeDate18}
                    value={tableEntryDate18}
                  />
                ) : (
                  ''
                )}
                {each.options === 'number' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChange18}
                    value={tableEntry18}
                  />
                ) : (
                  ''
                )}
                {each.options !== 'date' && each.options !== 'number' ? (
                  <select className="select" onChange={this.onChangeSelect18}>
                    {each.options.map(eachOption => (
                      <option value={eachOption}>{eachOption}</option>
                    ))}
                  </select>
                ) : (
                  ''
                )}
              </li>

              <li className="li2">
                {each.options === 'date' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChangeDate19}
                    value={tableEntryDate19}
                  />
                ) : (
                  ''
                )}
                {each.options === 'number' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChange19}
                    value={tableEntry19}
                  />
                ) : (
                  ''
                )}
                {each.options !== 'date' && each.options !== 'number' ? (
                  <select className="select" onChange={this.onChangeSelect19}>
                    {each.options.map(eachOption => (
                      <option value={eachOption}>{eachOption}</option>
                    ))}
                  </select>
                ) : (
                  ''
                )}
              </li>
              <li className="li2">
                {each.options === 'date' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChangeDate20}
                    value={tableEntryDate20}
                  />
                ) : (
                  ''
                )}
                {each.options === 'number' ? (
                  <input
                    className="input"
                    type={each.options}
                    onChange={this.onChange20}
                    value={tableEntry20}
                  />
                ) : (
                  ''
                )}
                {each.options !== 'date' && each.options !== 'number' ? (
                  <select className="select" onChange={this.onChangeSelect20}>
                    {each.options.map(eachOption => (
                      <option value={eachOption}>{eachOption}</option>
                    ))}
                  </select>
                ) : (
                  ''
                )}
              </li>
              {AddRow ? (
                <li className="li2">
                  {each.options === 'date' ? (
                    <input
                      className="input"
                      type={each.options}
                      onChange={this.onChangeDate20}
                      value={tableEntryDate20}
                    />
                  ) : (
                    ''
                  )}
                  {each.options === 'number' ? (
                    <input
                      className="input"
                      type={each.options}
                      onChange={this.onChange20}
                      value={tableEntry20}
                    />
                  ) : (
                    ''
                  )}
                  {each.options !== 'date' && each.options !== 'number' ? (
                    <select className="select" onChange={this.onChangeSelect20}>
                      {each.options.map(eachOption => (
                        <option value={eachOption}>{eachOption}</option>
                      ))}
                    </select>
                  ) : (
                    ''
                  )}
                </li>
              ) : (
                ''
              )}
              {/* {this.AddingRow()} */}
            </ul>
          ))}
        </div>
        <button
          onClick={this.onSubmitTableEntry}
          className="button"
          type="button"
        >
          Submit
        </button>
        <button type="button" className="button" onClick={this.Add}>
          AddOneMoreRow
        </button>
        {tableSubmit && (
          <TableViewModule
            tableEntryList={tableEntryList}
            columnList={columnList}
          />
        )}
      </div>
    )
  }
}

export default TableEntryModule
