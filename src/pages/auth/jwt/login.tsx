import { Helmet } from 'react-helmet-async';

import LoginPageFirebase from 'src/sections/auth/jwt';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Jwt: Login</title>
      </Helmet>

      <LoginPageFirebase />
    </>
  );
}
