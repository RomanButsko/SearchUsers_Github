import { useAppDispatch, useAppSelector } from '../hooks/hook';
import { deleteFavour, favourSelector } from '../store/github/github.slice';

const Favourites = () => {
  const {favourites} = useAppSelector(favourSelector);
  const dispatch = useAppDispatch();

  const handleFavour = (i: string) => {
    dispatch(deleteFavour(i))
    localStorage.removeItem(i);
  }

  if (favourites.length === 0) return <p className='text-center'>No items...</p>
  return (
    <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
      <ul className='list-none'>
        {favourites.map((item: string) => (
          <li key={item}>
            <a href={item} target="_blank">{item}</a>
            <button type='reset' onClick={() => handleFavour(item)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Favourites;
