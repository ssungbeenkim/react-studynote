import logo from './logo.svg';
import './App.css';

function AppJSX() {
  const name = 'Vincent';
  const list = ['mili', 'apple', 'water', 'strawberry'];
  return (
    <>
      <h1 className='orange'>Hello</h1>
      <h2>Hi</h2>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        style={{ width: '200px', height: '200px' }}
        src='https://plus.unsplash.com/premium_photo-1677942035529-db39d2a25915?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
        alt='test'
      />
    </>
  );
}

export default AppJSX;
