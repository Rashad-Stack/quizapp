import { useState } from 'react';
import Form from '../Form';
import Illustration from '../Illustration';
import TextInput from '../Signup/TextInput';
import Button from '../Button';
import { AiOutlineMail, AiOutlineUnlock, AiOutlineLock } from 'react-icons/ai';

function Login() {
  const [showPassword, setShowPassword] = useState(true);

  const showPasswordHandler = () => {
    setShowPassword((o) => !o);
  };

  return (
    <>
      <h1 className="text-left font-bold text-xl">login to your account</h1>
      <div className="flex flex-wrap justify-between items-center mr-8 text-xs">
        <Illustration />
        <Form className="w-full md:w-1/2 flex flex-col gap-5">
          <TextInput
            type="email"
            placeholder="Enter email"
            icon={<AiOutlineMail size={20} />}
          />
          <TextInput
            type={showPassword ? 'password' : 'text'}
            placeholder="Enter password"
            icon={
              showPassword ? (
                <AiOutlineLock size={20} />
              ) : (
                <AiOutlineUnlock size={20} />
              )
            }
            onClickToShowPassword={showPasswordHandler}
          />

          <Button>Login</Button>

          <div className="flex gap-2 justify-center items-center font-medium">
            Already have an account?
            <a href="#!" className="text-blue-500">
              Login
            </a>
            instead.
          </div>
        </Form>
      </div>
    </>
  );
}

export default Login;
