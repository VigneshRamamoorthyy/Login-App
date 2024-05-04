import './index.css'

const Login = props => {
  const {logout} = props

  return (
    <button type="button" className="login-button" onClick={logout}>
      Logout
    </button>
  )
}
export default Login
