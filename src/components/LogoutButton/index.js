// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  console.log('prem in logout button')
  console.log(props)

  const onLogout = () => {
    console.log('clicked on logout')
    // const token=Cookies.get("jwt_token")
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
    console.log('removed')
  }
  return (
    <button type="button" onClick={onLogout}>
      LogoutButton
    </button>
  )
}
export default withRouter(LogoutButton)
