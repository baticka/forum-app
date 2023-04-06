import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation () {
    return <div>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            HomePage
        </NavLink>
        <NavLink
            to="/ChatPage"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            ChatPage
        </NavLink>
    </div>
}
