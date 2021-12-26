const css = `
  .container {
    padding: 6rem 1rem;
    max-width: 360px;
    margin: 0 auto;
  }
`;

export const Login = () => {
  return (
    <>
      <style>{css}</style>
      <form className="container">
        <center>
          <hgroup>
            <h1>Log into your account</h1>
            <h2>Authentication generated with FX</h2>
          </hgroup>
        </center>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="Email" />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
        />
        <button type="button" className="full">
          Login
        </button>
      </form>
    </>
  );
};

export default {
  title: "Pages/Login",
};
