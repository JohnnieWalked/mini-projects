import { Outlet } from 'react-router-dom';
/* components */
import Nav from '../components/navigation/Nav';

export default function RootLayout() {
  return (
    <>
      <aside>
        <Nav />
      </aside>

      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
