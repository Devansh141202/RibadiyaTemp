import React from 'react';
import './ResetPassword.css'

const ResetPassword = () => {
    return (
        <>
            <div className='win'>
                <div className='form'>
                    <h2>Reset Password</h2>
                    <form>
                        <input type='password' name="npassword" placeholder='New Password' />
                        <input type='password' name='password' placeholder='Confirm Password' />
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ResetPassword