import Form from '../Form';
import Illustration from '../Illustration';
import TextInput from './TextInput';
import CheckBox from './CheckBox';
import Button from '../Button';
import { AiOutlineUser, AiOutlineMail, AiOutlineUnlock } from 'react-icons/ai';

function Signup() {
  return (
    <>
      <h1 className="text-left font-bold text-xl">Create an account</h1>
      <div className="flex flex-wrap justify-between items-center mr-8 text-xs">
        <Illustration />
        <Form className="w-full md:w-1/2 flex flex-col gap-5">
          <TextInput
            type="text"
            placeholder="Enter name"
            icon={<AiOutlineUser size={20} />}
          />
          <TextInput
            type="email"
            placeholder="Enter email"
            icon={<AiOutlineMail size={20} />}
          />
          <TextInput
            type="password"
            placeholder="Enter password"
            icon={<AiOutlineUnlock size={20} />}
          />
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon={<AiOutlineUnlock size={20} />}
          />
          <CheckBox text="I agree to the Term &amp; Condition" />
          <Button>Sign up</Button>

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

export default Signup;
