import PropTypes from "prop-types"
import Button from './Button'

const Header = ({title}) => {
  const onClick = (e) =>{
    console.log('click')
    console.log(e)
}
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button color='lightgreen' onClick={onClick} text='Add'/>
        <Button color='Yellow' onClick={onClick} text='Delete All'/>
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