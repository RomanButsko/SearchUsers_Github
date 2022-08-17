import { NavLink } from 'react-router-dom'

export const Navigation = () => {
    return (
            <nav className='h-[50px] shadow-md bg-neutral-400'>
                <div className='flex justify-between py-3 m-auto w-[1200px]'>
                <h2 className='font-DynaPuff cursor-pointer'>GetUsersFromGithub</h2>
                <div className='font-osWald'>
                <NavLink to='/'><span className='pr-8 text-2xl hover:text-purple-700'>Home</span></NavLink>  
                <NavLink to='/favourites'><span className='hover:text-purple-700'>Favourites</span></NavLink>  
                </div>
                </div>
            </nav>
    )
}
