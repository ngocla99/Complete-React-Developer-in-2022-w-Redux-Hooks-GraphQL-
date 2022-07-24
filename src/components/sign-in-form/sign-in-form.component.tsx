import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  emailSignInStart,
  googleSignInStart,
} from '../../store/user/user.action';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormField] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormField = () => {
    setFormField(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormField();
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormField({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
