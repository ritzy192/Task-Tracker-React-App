import PropTypes from "prop-types"
import Button from './Button'

const Header = ({title, onAddTaskClick, onDeleteAll, showAddButton}) => {
  
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button color='lightgreen' onClick={onAddTaskClick} text={showAddButton ? 'Close': 'Add'}/>
        <Button color='Yellow' onClick={onDeleteAll} text='Delete All'/>
    </header>
    
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header