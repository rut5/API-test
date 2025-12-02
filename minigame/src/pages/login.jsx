import "../login.css";

function Login() {

    return (

        <div className="login-page">
            <h1 className="title">Login Page</h1>

            <div className="inputs">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="margin-b" />

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" />
            </div>
        </div>

    );
};

export default Login;