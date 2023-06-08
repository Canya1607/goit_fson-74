import { useState } from 'react';

export const useToggle = arg => {
  const [isOpen, setIsOpen] = useState(arg);

  const open = () => setIsOpen(true); // always true
  const close = () => setIsOpen(false); // always false
  const toggleFunc = () => setIsOpen(!isOpen); // true -> false | false -> true

  return { isOpen, toggleFunc, open, close };
};
