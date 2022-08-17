import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hook'
import { IUserRepo } from '../models/models'
import { addFavour, deleteFavour, favourSelector } from '../store/github/github.slice';


const RepoItem = ({ Repos } : {Repos : IUserRepo}) => {
    const {favourites} = useAppSelector(favourSelector);
    const [conditionFollow, setFollowComdition] = useState(favourites.includes(Repos.html_url))
    const dispatch = useAppDispatch();

    const handleAddFavour = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
            dispatch(addFavour(Repos.html_url))
            setFollowComdition(true)
    }

    const handleDeleteFavour = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        dispatch(deleteFavour(Repos.html_url))
        setFollowComdition(false)
    }
    return (
        <div className='border py-3 px-5 rounded mb-2 hover: shadow-md hover:bg-gray-100 transition-all'>
            <a href={Repos.html_url} rel="noreferrer" target='_blank' >
            <h2 className='text-lg font-bold'>{Repos.full_name}</h2>
            <p className='text-sm'>
                Forks: <span className='font-bold mr-2'>{Repos.forks}</span>
                Watchers: <span className='font-bold'>{Repos.watchers}</span>
            </p>
            <p className='text-sm font-thin'>{Repos?.description}</p>
            </a>
            {!conditionFollow && <button onClick={handleAddFavour} className='font-bold bg-purple-700 text-cyan-50 p-1 rounded-md'>Follow</button>}
            {conditionFollow && <button onClick={handleDeleteFavour} className='font-bold bg-purple-700 text-cyan-50 p-1'>Unfollow</button>}
        </div>
    )
}

export default RepoItem
