import React from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/api/lib/hooks';
import { signup } from '../../features/auth/model/redux/authThunk';
import { useNavigate } from 'react-router';
import './Sign.css';

export default function SignUpPage():React.JSX.Element {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const status = useAppSelector((store) => store.auth.status)
  return (
    <div className="bod">
      <form
        className="sign"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(signup(new FormData(e.currentTarget)))
            .unwrap()
            .then((data) => {
              console.log(data.user.name);
              navigate('/');
            })
            .catch((error: unknown) => {
              console.log(error);
            });
        }}
      >
        <h4>{status}</h4>
        <h3>Sign Up</h3>
        <input type="text" placeholder="Name" name="name" />
        <input type="text" placeholder="Email" name="email" />
        <input type="text" placeholder="Password" name="password" />
        <button>Sign Up</button>
      </form>
    </div>
  );
}
