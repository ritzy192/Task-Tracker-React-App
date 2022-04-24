import PropTypes from "prop-types"
const Header = ({title}) => {
  return (
    <header>{title}</header>
  )
}

Header.defaultProps = {
    title: 'Default Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header