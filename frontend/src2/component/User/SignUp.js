import React from "react";
import './SignUp.css'
const SignUp = () => {

    return (
        <>
            <div className='win'>
                <div className='form'>
                    <h2>SignUp</h2>
                    <form>

                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email"
                        />

                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password"
                        />

                        <input 
                            type="password" 
                            name="cpassword" 
                            placeholder="Confirm Password"
                        />

                        <button type='submit'>SignUp</button>
                    </form>
                </div>
            </div>
        </>
    );

}

export default SignUp;