import { 
  useState,
  useEffect,
  // useRef,
  useMemo
} from 'react';
import { TinyComponent } from './components/TinyComponent';
import './App.css';
import { useToggle } from './hooks/useToggle';
import { UserMenu } from './components/UserMenu';
// import { Player } from './components/Player';

function computeSum(a, b) {
  return a + b;
}

function App() {
  // const playerRef = useRef();
  const [counter, setCounter] = useState(0);
  const { isOpen, close } = useToggle(true);

  const sum = useMemo(
    // compute
    () => computeSum(100, counter),
    // deps
    [counter]
  );
  // counter 1, a 1, b 1, 3
  // counter 0, a 2, b 1, 3
  // const sum = computeSum(100, counter);

  useEffect(() => {
    document.title = `${counter} times`;
    // console.log(playerRef.current.getBoundingClientRect())
  }, [counter]);

  return (
    <div className='App'>
      {isOpen && <TinyComponent title={'Hi I am tiny component'} counter={counter} />}
      <button type='button' onClick={close}>
        Click me
      </button>

      <div>You clicked {counter} times</div>
      <button type='button' onClick={() => setCounter(counter + 1)}>
        Add counter
      </button>

      <p>Sum = {sum}</p>
      <UserMenu />
      {/* <Player ref={playerRef} source="http://media.w3.org/2010/05/sintel/trailer.mp4" />; */}
    </div>
  );
}

export default App;
