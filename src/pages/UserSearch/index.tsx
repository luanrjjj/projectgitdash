import { Link } from 'react-router-dom';

import { FiChevronRight } from 'react-icons/fi'
import React, { FormEvent } from 'react';
import { Users } from './styles';
import { useEffect } from 'react';
import { useState } from 'react';
import api from '../../services/api';
import {useToasts} from 'react-toast-notifications'


interface User {
    full_name: string;
    login: string;
    description: string;
    avatar_url: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}

const UserSearch: React.FC = () => {
    const { addToast } = useToasts();

    const [newUser, setNewUser] = useState('');
    const [inputError, setInputError] = useState('');
    const [users, setUsers] = useState<User[]>(() => {
        const storageUsers = localStorage.getItem(`@GithubExplorer:users`)



        if (storageUsers) {
            return JSON.parse(storageUsers)
        }
        return [];

    })


    useEffect(() => {
        localStorage.setItem(
            `GithubExplorer:users`, JSON.stringify(users));


    }, [users]);

    async function handleAddUser(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        if (!newUser) {
            setInputError('Digite o autor/nome do repositório');
            return;
        }
        try {
            const response = await api.get(`users/${newUser}`)

            const user = response.data
            let i
            console.log(user)
            console.log('users',users)
            

            const checkUser = users.filter(eachUser => eachUser.login === user.login)
            console.log(100,checkUser.length)

            if (checkUser.length==0) {
                setUsers([user]);
            }

            setNewUser('');
            setInputError('');

        } catch (err) {
            addToast('User not found', { appearance: 'error' });
            setInputError('Repository not found')
        }


    }





    return (
        <>

            <Users>
                <div className="logo-container">
                    <div className="logo">
                        <span>
                            GitDa
                </span>
                        <p>sh.</p>
                    </div>
                </div>
                <form onSubmit={handleAddUser} className="input-group">
                    <div className="input-search">
                        <input
                            value={newUser}
                            onChange={(e) => setNewUser(e.target.value)} className = {newUser?'focusInput':''}/>
                        <span className="highlight"></span>
                        <label>Search the User</label>
                    </div>

                </form>

                <div className="user-searched">


                    {users.map(user => (
                        <Link key={user.login} to={`/users/${user.login}`} >
                            <img src={user.avatar_url} alt={user.login} />
                            <div className="user-informations">
                                <strong>{user.login}</strong>
                                <p>{user.description}</p>
                            </div>
                            <FiChevronRight size={20} />
                        </Link>


                    ))}
                </div>

            </Users>

        </>
    )
}
export default UserSearch;
