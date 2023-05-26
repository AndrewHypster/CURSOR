import { Route, Routes } from 'react-router-dom';
import Error from './components/Error';
import Forgot from './components/Forgot-password';
import { SingIn } from "./components/Sign-in";
import { SingUp } from "./components/Sign-up";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<SingIn />} />
        <Route path='*' element={<Error />} />
        <Route path='sign-up' element={<SingUp />} />
        <Route path='forgot-password' element={<Forgot />} />
      </Routes>
    </>
  );
}

export default App;
