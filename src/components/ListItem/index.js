import './index.css'

const ListItem = props => {
  const {historyObj, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyObj

  const onDeleteItem = () => {
    onDelete(id)
  }

  return (
    <li className="list-item">
      <p className="time">{timeAccessed}</p>
      <div className="list-container">
        <div className="site-container">
          <img src={logoUrl} className="logo" alt="domain logo" />
          <div className="container1">
            <p className="name">{title}</p>
            <p className="site-url">{domainUrl}</p>
          </div>
        </div>
        <button type="button" onClick={onDeleteItem} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default ListItem
