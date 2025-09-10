import { useState } from 'react';
import MyComponent from './MyComponent';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="App">
      <MyComponent title="Hello from MyComponent!" text="This is a paragraph of text within my component." />
      <div className="card">
        <p>Counter: {count}</p>
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
          <button onClick={() => setCount((c) => c + 1)}>Increment</button>
          <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;