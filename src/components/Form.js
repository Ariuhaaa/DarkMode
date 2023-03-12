function Form() {
  return (
    <div className="main container">
      <p className="sign" align="center">
        Sign In
      </p>
      <form className="form1">
        <input className="username" type="text" placeholder="Username" />
        <input className="password" type="password" placeholder="Password" />
        <a className="submit" align="center">
          Sign in
        </a>
        <p className="forgot" align="center">
          <a href="forgot" align="center">
            Forgot Password?
          </a>
        </p>
      </form>
    </div>
  );
}

export default Form;
