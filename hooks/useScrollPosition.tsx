import { useCallback, useEffect } from 'react';
import { useAppDispatch } from '@/store/store';
import { setScrollPosition } from '@/store/scrollSlice';




export function useScrollPosition () {

  const dispatch = useAppDispatch();

  const listenScroll = useCallback(() => {
    dispatch(setScrollPosition(document.documentElement.scrollTop));
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', listenScroll);
    return () => window.removeEventListener('scroll', listenScroll);
  }, [])

}