import React,{useState,useEffect,FormEvent} from 'react';
import {Title,Form,InputContainer, NavHeader,NavLogo} from './styles';
import gitLogo from '../../assets/gitLogo.png'
import api from '../../services/api'
import {RiSearchLine,RiNotificationLine,RiUserAddLine} from 'react-icons/ri'

interface User {
    full_name:string;
    login:string;
    description: string;
    avatar_url:string;
    owner: {
        login:string;
        avatar_url:string;
    }
}



const Header:React.FC = () => {

    const [newUser,setNewUser] = useState('');
    const [inputError,setInputError] = useState('');
    const [ users,setUsers] = useState <User[]>(()=> {
    const storageUsers = localStorage.getItem(`@GithubExplorer:users`)



    if (storageUsers) {
        return JSON.parse(storageUsers)
    }
    return [];

})


    useEffect (()=> {
        localStorage.setItem (
            `GithubExplorer:users`,JSON.stringify(users));
        

    },[users]);

    async function handleAddUser (event:FormEvent<HTMLFormElement>):Promise<void> {
        event.preventDefault();
    
        if (!newUser) {
            setInputError('Digite o autor/nome do repositório');
            return;
        }
        try {
            const response = await api.get(`users/${newUser}`)
            
            const user = response.data

            
            
            setUsers ([...users,user]);
            setNewUser('');
            setInputError('');

        } catch(err) {
            setInputError('Erro na busca por esse Repositório')
        }
        
    
    }





 



    return (

    <NavHeader>
        <NavLogo>
        <a className = 'logo' href = "/">
            GitDa
           
        </a>

        <p>sh.</p>
        </NavLogo>


     
     


        
    </NavHeader>
    )

}


export default Header