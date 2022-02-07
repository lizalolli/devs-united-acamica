import React from 'react'
import { firestore, storage, auth, loginConGoogle, logout } from '../firebase';

const Logout = () => {
    return (
        <div>
            <button onClick={logout}>Log out</button>
        </div>
    )
}

export default Logout
