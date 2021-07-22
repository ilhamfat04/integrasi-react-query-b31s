import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { useHistory } from "react-router-dom"

export default function Register() {

    const title = "Register"
    document.title = 'DumbMerch | ' + title

    const [state, dispatch] = useContext(UserContext)

    let history = useHistory()

    const login = () => {
        dispatch({
            type: "LOGIN_SUCCESS",
            payload: {
                id: 1,
                name: 'Admin',
                email: 'admin@mail.com',
                phone: '011111111111',
                gender: 'Male',
                address: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                status: 'admin'
            }
        })
        history.push("/complain-admin")
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="card-auth p-4">
                <div style={{ fontSize: '36px', lineHeight: '49px', fontWeight: '700' }}>Register</div>
                <div className="mt-5 form">
                    <input placeholder="Name" className="px-3 py-2" />
                    <input placeholder="Email" className="px-3 py-2 mt-3" />
                    <input placeholder="Password" className="px-3 py-2 mt-3" />
                </div>
                <div className="d-grid gap-2 mt-5">
                    <button onClick={login} className="btn btn-login">Register</button>
                </div>
            </div>
        </div>
    )
}
