import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import '../styles/site.css';

function SiteLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.body.style.background = '#181818';
    document.body.style.color = '#ffffff';
    document.body.style.margin = '0';
    document.body.style.minHeight = '100vh';

    return () => {
      document.body.style.background = '';
      document.body.style.color = '';
      document.body.style.minHeight = '';
    };
  }, []);

  return (
    <div className="zv-site">
      <Outlet />
    </div>
  );
}

export default SiteLayout;
