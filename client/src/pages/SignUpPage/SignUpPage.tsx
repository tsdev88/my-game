import React from 'react';
import {useAppDispatch} from '../../shared/api/lib/hooks';
import {signup} from '../../features/auth/model/redux/authThunk';
import {useNavigate} from 'react-router';
import './SignUp.css';

export default function SignUpPage(): React.JSX.Element {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

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
                <h3>Sign Up</h3>
                <input type="text" placeholder="Name" name="name" autoComplete='off'/>
                <input type="text" placeholder="Email" name="email" autoComplete='off'/>
                <input type="text" placeholder="Password" name="password" autoComplete='off'/>
                <button>Sign Up</button>
            </form>
        </div>
    );
}
