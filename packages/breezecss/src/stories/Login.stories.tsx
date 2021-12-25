export const Login = () => {
  return (
    <main>
      <article>
        <hgroup>
          <h1>Login</h1>
          <h2>Authentication generated with FX</h2>
        </hgroup>
        <form>
          <input name="email" type="email" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </article>
    </main>
  );
};

export default {
  title: "Pages/Login",
};
