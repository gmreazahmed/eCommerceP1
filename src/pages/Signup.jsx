import React, { useState } from 'react';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.log('Passwords do not match');
            return;
        }
        console.log('Signup attempted with:', { email, password });
        // Add your signup logic here (e.g., API call to register user)
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
                <div className="flex justify-center mb-6">
                    <svg className="w-12 h-12" viewBox="0 0 48 48">
                        <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                        <path fill="#34A853" d="M46.98 24.55c0-1.7-.15-3.34-.43-4.9H24v9.3h12.97c-.56 2.97-2.24 5.49-4.78 7.18l7.98 6.19c4.65-4.29 7.81-10.61 7.81-17.77z" />
                        <path fill="#FBBC05" d="M10.53 28.59c-1.11-3.34-1.11-6.94 0-10.28l-7.98-6.19C.93 15.66 0 19.73 0 24s.93 8.34 2.56 11.88l7.98-6.29z" />
                        <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.8l-7.98-6.19c-2.2 1.49-5.01 2.37-7.91 2.37-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                    </svg>
                </div>
                <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">Create your account</h2>
                <h3 className="text-sm text-center text-gray-600 text-[12px] mb-6">Use your Google Account</h3>
                <div>
                    <div className="mb-4">
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            placeholder="Email or phone"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <a href="#" className="text-blue-600 text-sm hover:underline">Already have an account? Sign in</a>
                    </div>
                    <div className="flex justify-end">
                        <button
                            className="bg-blue-600 text-white px-6 py-2 rounded-[4px] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="button"
                            onClick={handleSubmit}
                        >
                            Create Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;