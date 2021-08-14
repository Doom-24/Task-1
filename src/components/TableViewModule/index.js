import {Component} from 'react'

import './index.css'

class TableViewModule extends Component {
  render() {
    const {tableEntryList} = this.props

    return (
      <div className="table-view">
        {tableEntryList.map(each => (
          <ul className="table-view-lists">
            <li>
              {each.tableEntryDate1 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntryDate1}</h1>
              )}

              {each.tableEntryDate2 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntryDate2}</h1>
              )}

              {each.tableEntryDate3 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntryDate3}</h1>
              )}

              {each.tableEntryDate4 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntryDate4}</h1>
              )}

              {each.tableEntryDate5 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntryDate5}</h1>
              )}

              {each.tableEntryDate6 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntryDate6}</h1>
              )}

              {each.tableEntryDate7 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntryDate7}</h1>
              )}

              {each.tableEntryDate8 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntryDate8}</h1>
              )}

              {each.tableEntryDate9 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntryDate9}</h1>
              )}

              {each.tableEntryDate10 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntryDate10}</h1>
              )}

              {each.tableEntryDate11 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntryDate11}</h1>
              )}

              {each.tableEntryDate12 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntryDate12}</h1>
              )}

              {each.tableEntryDate13 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntryDate13}</h1>
              )}

              {each.tableEntryDate14 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntryDate14}</h1>
              )}

              {each.tableEntryDate15 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntryDate15}</h1>
              )}

              {each.tableEntryDate16 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntryDate16}</h1>
              )}

              {each.tableEntryDate17 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntryDate17}</h1>
              )}

              {each.tableEntryDate18 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntryDate18}</h1>
              )}

              {each.tableEntryDate19 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntryDate19}</h1>
              )}

              {each.tableEntryDate20 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntryDate20}</h1>
              )}
            </li>

            <li>
              {each.tableEntry1 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntry1}</h1>
              )}

              {each.tableEntry2 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntry2}</h1>
              )}

              {each.tableEntry3 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntry3}</h1>
              )}

              {each.tableEntry4 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntry4}</h1>
              )}
              {each.tableEntry5 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntry5}</h1>
              )}
              {each.tableEntry6 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntry6}</h1>
              )}

              {each.tableEntry7 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntryDate7}</h1>
              )}
              {each.tableEntry8 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntry8}</h1>
              )}
              {each.tableEntry9 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntry9}</h1>
              )}
              {each.tableEntry10 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntry10}</h1>
              )}
              {each.tableEntry11 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntry11}</h1>
              )}
              {each.tableEntry12 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntry12}</h1>
              )}
              {each.tableEntry13 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntry13}</h1>
              )}
              {each.tableEntry14 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntry14}</h1>
              )}
              {each.tableEntry15 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntry15}</h1>
              )}
              {each.tableEntry16 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntry16}</h1>
              )}
              {each.tableEntry17 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntry17}</h1>
              )}
              {each.tableEntry18 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntry18}</h1>
              )}
              {each.tableEntry19 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntry19}</h1>
              )}
              {each.tableEntry20 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntry20}</h1>
              )}
            </li>
            <li>
              {each.tableEntrySelect1 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntrySelect1}</h1>
              )}
              {each.tableEntrySelect2 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntrySelect2}</h1>
              )}

              {each.tableEntrySelect3 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntrySelect3}</h1>
              )}
              {each.tableEntrySelect4 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntrySelect4}</h1>
              )}
              {each.tableEntrySelect5 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntrySelect5}</h1>
              )}
              {each.tableEntrySelect6 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntrySelect6}</h1>
              )}
              {each.tableEntrySelect7 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntrySelect7}</h1>
              )}
              {each.tableEntrySelect8 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntrySelect8}</h1>
              )}
              {each.tableEntrySelect9 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntrySelect9}</h1>
              )}
              {each.tableEntrySelect10 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntrySelect10}</h1>
              )}
              {each.tableEntrySelect11 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntrySelect11}</h1>
              )}
              {each.tableEntrySelect12 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntrySelect12}</h1>
              )}
              {each.tableEntrySelect13 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntrySelect13}</h1>
              )}
              {each.tableEntrySelect14 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntrySelect14}</h1>
              )}
              {each.tableEntrySelect15 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntrySelect15}</h1>
              )}
              {each.tableEntrySelect16 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntrySelect16}</h1>
              )}
              {each.tableEntrySelect17 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntrySelect17}</h1>
              )}
              {each.tableEntrySelect18 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntrySelect18}</h1>
              )}
              {each.tableEntrySelect19 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntrySelect19}</h1>
              )}
              {each.tableEntrySelect20 === '' ? (
                ''
              ) : (
                <h1 className="li">{each.tableEntrySelect20}</h1>
              )}
            </li>
          </ul>
        ))}
      </div>
    )
  }
}

export default TableViewModule
