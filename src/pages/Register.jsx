import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Header from '../components/home/Header';
import '../components/home/Login.css'

const Register = (props) => {
    const initialState = { username: "", password: "" };
    const [input, setInput] = useState(initialState);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const createdUserToken = await props.signUp(input);

        if (createdUserToken) {
            navigate('/');
        } else {
            navigate("/")
        }
        setInput(initialState);
    };

    const handleChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    return (
        <>
            <Header />
            <div className='login-container'>
                <h1 className='header'>Register</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username: </label>
                    <input
                        id="username"
                        name="username"
                        value={input.username}
                        onChange={handleChange}
                    />
                    <label htmlFor="password">Password: </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={input.password}
                        onChange={handleChange}
                    />
                    <input type='submit' className="login-button" value='signup' />
                </form>
            </div>
        </>
    )
}

export default Register;