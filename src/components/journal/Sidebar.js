import React from 'react'
import { JournalEntries } from './JournalEntries'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth'
import {notesAction} from '../../actions/notesAction'

export const Sidebar = () => {

    const dispatch = useDispatch()

    const { name } = useSelector(state => state.auth);

    const handleLogout = () => {
        console.log('Click')
        dispatch(startLogout())
    }

    return (
        <aside className="journal__sidebar">

            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <img src="" alt="" />
                    <span> {name}</span>
                </h3>

                <button className="btn"
                    onClick={handleLogout}>
                    Logout
                </button>
            </div>

            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5" onClick ={()=> dispatch(notesAction())}>
                    New entry
                </p>
            </div>

            <JournalEntries />

        </aside>
    )
}
