import './App.css';
import Profile from './components/Profile';

function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert('button clicked!');
  };
  return (
    <>
      <button onClick={handleClick}>Event Button</button>
      <Profile
        image='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
        name='Sarah'
        title='Softwear Engineer'
      />
      <Profile
        image='https://images.unsplash.com/photo-1532171875345-9712d9d4f65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80'
        name='Sari'
        title='Softwear Engineer'
        isNew={true}
      />
      <Profile
        image='https://images.unsplash.com/photo-1543113415-ba3b69906499?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        name='Sorah'
        title='Softwear Engineer'
      />
    </>
  );
}

export default AppProfile;
