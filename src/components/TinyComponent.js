import { useEffect } from "react";
import { useUser } from "../hooks/useUser";

// eslint-disable-next-line react/prop-types
export const TinyComponent = ({title, counter}) => {
  const username = useUser();
  // useEffect(() => {
  //   const timerId = setInterval(() => {console.log('My interval')}, 1000);

  //   return () => {
  //     clearInterval(timerId);
  //   }
  // }, []);

  useEffect(() => {
    console.log(`Tiny component mounted - counter '${counter}'`)
  }, [counter]);

  return <div style={{ fontSize: '24px' }}>{title} - {counter} - {username}</div>;
};
