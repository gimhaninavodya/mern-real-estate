import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

export default function SignIn() {

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData(
      {
        ...formData,
        [e.target.id]: e.target.value,
      }
    );
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      const res = await fetch('http://localhost:3000/api/auth/signin', {
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
     });
    const data = await res.json();
    console.log(data);
    if(data.success === false){
      setloading(false);
      setError(data.message);
      return;
    }
    setloading(false);
    setError(null);
    navigate('/');
    } catch (error) {
      setloading(false);
      setError(error.message);
    }
  };
 
  return (
    <div className='p-3 max-w-lg mx-auto'>

      <h1 className='text-3xl text-center font-semibold my-8'>Sign In</h1>
      
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

        <input type='email' 
        placeholder='email' 
        className='border p-3 rounded-2xl' 
        id='email' 
        onChange={handleChange}>
        </input>

        <input type='password' 
        placeholder='password' 
        className='border p-3 rounded-2xl' 
        id='password' 
        onChange={handleChange}>
        </input>

        <button disabled={loading} 
        className='bg-slate-600 text-white p-3 rounded-xl uppercase hover:opacity-95 disabled:opacity-70'>
          {loading ? 'Loading...' : 'Sign In'}
        </button>

      </form>

      <div className='flex gap-2 mt-4'>
        <p>Dont have an account?</p>
        <Link to={'/sign-up'}>
          <span className='text-blue-700'>Sign up</span>
        </Link>
      </div>

      {error && <p className='text-red-400 mt-5'>{error}</p>}
    </div>
  );
}

