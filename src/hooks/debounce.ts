import { useState, useEffect } from 'react';

export const useDebounce = (value: string, delay = 300): string => {
    const [debounced, setDebounced] = useState(value)
    useEffect(() => {
        const handlerTime = setTimeout(() => {
            setDebounced(value)
        }, delay)
        return () => clearTimeout(handlerTime)
    }, [value, delay])

    return debounced
}

