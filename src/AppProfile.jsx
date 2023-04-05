import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';

function AppProfile() {
  const name = 'Vincent';
  const list = ['mili', 'apple', 'water', 'strawberry'];
  return (
    <>
      <Profile />
      <Profile />
      <Profile />
    </>
  );
}

export default AppProfile;
