const Login = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    const remember = event.target.remember.checked;
    console.log(username, password, remember);
  };

  return (
    <>
      <h1>Login</h1>

      <img src="https://via.placeholder.com/250" alt="placeholder img" />

      <form id="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username-input">Username</label>
          <input type="text" id="username-input" />
        </div>

        <div>
          <label htmlFor="password-input">Password</label>
          {/* // * type password does not have role */}
          <input
            role="password"
            type="password"
            name="password"
            id="password-input"
          />
        </div>

        <div>
          <label htmlFor="remember-input">
            Remember me?
            <input type="checkbox" id="remember-input" />
          </label>
        </div>

        <div>
          <button type="submit">Login</button>
        </div>

        <p>Privacy Policy, Terms of Service, and Cookie Notice.</p>
      </form>
    </>
  );
};
export default Login;
