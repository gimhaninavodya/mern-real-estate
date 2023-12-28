import {Link} from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>

      <h1 className='text-3xl text-center font-semibold my-8'>Sign Up</h1>
      
      <form className='flex flex-col gap-4'>

        <input type='text' placeholder='username' 
        className='border p-3 rounded-2xl' id='username'></input>
        <input type='text' placeholder='email' 
        className='border p-3 rounded-2xl' id='email'></input>
        <input type='text' placeholder='password' 
        className='border p-3 rounded-2xl' id='password'></input>

        <button className='bg-slate-600 text-white p-3 rounded-xl 
        uppercase hover:opacity-95 disabled:opacity-70'>Sign up</button>

      </form>

      <div className='flex gap-2 mt-4'>
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>

    </div>
  )
}
