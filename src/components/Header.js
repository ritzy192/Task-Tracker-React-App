import PropTypes from "prop-types"
import Button from './Button'

const Header = ({title}) => {
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button color='lightgreen' text='Add'/>
        <Button color='Yellow' text='Delete All'/>
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