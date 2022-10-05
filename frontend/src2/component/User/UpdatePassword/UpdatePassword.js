import React from 'react';
import './ResetPassword.css'

const ResetPassword = () => {
    return (
        <>
            <div className='win'>
                <div className='form'>
                    <h2>Update Password</h2>
                    <form>
                        <input type='password' name="oldpassword" placeholder='Old Password' />
                        <input type='password' name="newpassword" placeholder='New Password' />
                        <input type='password' name='confirmpassword' placeholder='Confirm Password' />
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ResetPassword