import { useEffect, useState } from 'react';
import RepoItem from '../components/RepoItem';
import {useDebounce} from '../hooks/debounce';
import { useGetUserQuery, useLazyGetUserRepositoriesQuery } from '../store/github/github.api';

export const Home = () => {
  const [search, setSearch] = useState('');
  const [dropdown, setDropDown] = useState(false)
  const debounced = useDebounce(search);
  const {data , isLoading, isError} = useGetUserQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true
  });
  const [fetchRepos, {isLoading: ReposLoading, data: Repos}] = useLazyGetUserRepositoriesQuery()

  useEffect(() => {
    setDropDown(debounced.length > 3 && data?.length! > 0);
  }, [debounced, data])

  const getVisibleUsers = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
  }

  const getReposUsers = (users: string) => {
    fetchRepos(users)
    setDropDown(false)

  }
  return ( 
    <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
      {isLoading && <h2 className='text-center text-red-500'>Loading...</h2>}
      {isError && <h2>Something was wrong...</h2>}
      <div className='relative w-[500px] h-[50px]'>
      <input 
        type="text" 
        className='border py-2 px-4 w-full h-[42px] mb-2'
        placeholder='Search username....'
        onChange={getVisibleUsers}
        value={search}
        />

        {dropdown && <div className='absolute top-[42px] left-0 right-0 mt-2 max-h-[200px] shadow-lg bg-gray-500 overflow-y-scroll'>
          {data?.map(item => 
          <li key={item.id} onClick={() => getReposUsers(item.login)} className='list-none pl-5 hover:bg-purple-700 hover:text-white transition-colors cursor-pointer'>
            {item.login}
          </li>
          )}
        </div>
        }
        <div className='container'>
          {ReposLoading && <h2>Loading...</h2>}
          {Repos?.map(item => <RepoItem Repos={item} key={item.id}/>)}
        </div>
        </div>
    </div>
  );
};
