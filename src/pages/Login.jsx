import '../components/home/Login.css'

function Login() {
    return (
        <div className='login-container'>
            <h1 className='header'>Netflicks</h1>
            <form>
                <label>
                    <div className='form-line'>
                        <span className='span-username'>Username</span>
                        <input className='login-input username-input' type='text' required name='username' />
                    </div>
                </label>
                <label>
                    <div className='form-line'>
                        <span className='span-password'>Password</span>
                        <input className='login-input password-input' type='password' required name='password' />
                    </div>
                </label>
                <a href='#' class='login-button'>Log In</a>
            </form >
        </div >
    )
}

export default Login;