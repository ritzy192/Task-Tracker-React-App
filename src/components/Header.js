import { getQueriesForElement } from "@testing-library/react"
import PropTypes from "prop-types"
const Header = ({title}) => {
  return (
    <header style={headerStyle}>{title}
        <h2 style={{color:'red'}}>Second Header</h2>
    </header>
    
  )
}

Header.defaultProps = {
    title: 'Default Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

const headerStyle = {
    color: 'Yellow',
    backgroundColor: 'Green'
}

export default Header