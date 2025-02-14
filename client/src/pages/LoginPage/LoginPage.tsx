import React from 'react';
import { useAppDispatch } from '../../shared/api/lib/hooks';
import { login } from '../../features/auth/model/redux/authThunk';
import '../SignUpPage/SignUp.css'

export default function LoginPage(): React.JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <div className="bod">
      <form
        className="sign"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(login(new FormData(e.currentTarget)))
            .unwrap()
            .then((data) => console.log(data.user.name))
            .catch((error: unknown) => console.log(error));
        }}
      >
        <h3>Login</h3>
        <input type="text" placeholder="Email" name="email" />
        <input type="text" placeholder="Password" name="password" />
        <button type="submit">Log</button>
      </form>
    </div>
  );
}
