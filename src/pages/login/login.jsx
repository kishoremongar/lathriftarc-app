import { PasswordInput, TextInput } from '@mantine/core';
import React from 'react';
import { ReactComponent as LogIn } from '../../asset/loginBg.svg';
function Login() {
  return (
    <div>
      <div className='flex mt-24'>
        <div className='w-2/4'>
          <LogIn className='w-[80%]' />
        </div>
        <div className='w-2/4 flex flex-col items-center justify-center gap-y-10'>
          <p className='text-4xl text-gray-500'>Create your account</p>
          <div className='text-lg'>
            <TextInput placeholder='Your name' label='Full name' withAsterisk />
            <TextInput placeholder='Email' label='Email' withAsterisk />
            <PasswordInput
              placeholder='Password'
              label='Password'
              description='Password must include at least one letter, number and special character'
              withAsterisk
            />
            <PasswordInput
              placeholder='Password'
              label='Confirm password'
              description='Password must include at least one letter, number and special character'
              withAsterisk
            />
          </div>
          <div>
            <button className='bg-primaryColor px-6 py-4 rounded-3xl text-white hover:bg-darkPink'>
              Create an account
            </button>
          </div>
          <div className='flex flex-col items-center -mt-6 gap-y-4'>
            <div className='flex text-center'>
              <p>Or</p>
            </div>
            <div>
              You already have an account ?{' '}
              <span className='text-blue-500'>Login</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
