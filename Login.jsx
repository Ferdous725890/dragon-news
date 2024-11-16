import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './src/AuthProvider/AuthProvider';

const Login = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='container border border-red-500'>

           

            <div className='w-10 border border-green-500'>

                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <div className="w-full max-w-md p-8 bg-red-500 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Welcome Back</h2>
                        <form className="space-y-6">
                            <div className="form-control">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full px-4 py-2 text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="input input-bordered w-full px-4 py-2 text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                                    required
                                />
                                <div className="text-right mt-1">
                                    <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
                                </div>
                            </div>
                            <div className="form-control mt-4">
                                <button
                                    type="submit"
                                    className="btn btn-primary w-full py-2 text-white rounded-lg transition hover:bg-primary-focus">
                                    Login
                                </button>
                            </div>
                        </form>
                        <div className="text-center mt-6">
                            <p className="text-sm text-gray-500">
                                Don’t have an account?
                                <Link to="/auth/register" className="text-primary font-medium hover:underline ml-1">Sign Up</Link>
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {user.name}
            
        </div>

    );
};

export default Login;