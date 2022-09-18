function Login() {
    return (
        <>
            <form>
                <label>
                    <span>Username</span>
                    <input type='text' required name='username' />
                </label>
                <label>
                    <span>Password</span>
                    <input type='password' required name='password' />
                </label>
            </form>
        </>
    )
}

export default Login;