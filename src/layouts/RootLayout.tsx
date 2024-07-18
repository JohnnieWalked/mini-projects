import { Outlet } from 'react-router-dom';
/* components */
import Nav from '../components/navigation/Nav';

export default function RootLayout() {
  return (
    <>
      <div className="navigation-bar">
        <Nav />
      </div>

      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
