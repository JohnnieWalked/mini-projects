import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

/* constants */
import { PAGES_ARRAY } from '../../constants';

export default function Nav() {
  const location = useLocation();
  const [sibebarNavLine, setSidebarNavLine] = useState<number | null>(null);

  /* move active navbar line */
  useEffect(() => {
    const currentPageIndex = PAGES_ARRAY.findIndex(
      (item) => item === location.pathname.replace('/', '')
    );
    setSidebarNavLine((100 / PAGES_ARRAY.length) * currentPageIndex);
  }, [location.pathname]);

  const renderedNavLinks = PAGES_ARRAY.map((item) => {
    return (
      <li key={item}>
        <NavLink end={item === PAGES_ARRAY[0] && true} to={item}>
          {item !== '' ? item.toUpperCase() : 'HOME'}
        </NavLink>
      </li>
    );
  });

  return (
    <>
      <div className="logo">
        <svg
          width="120"
          height="100"
          viewBox="0 0 120 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="logo">
            <g id="letters">
              <path
                id="W"
                d="M112.761 25H98.7651L95.2263 28.286L95.0463 27.5205L94.7464 26.2509L94.4465 25H82.1503L78.5515 28.342L78.3715 27.5579L78.1516 26.2883L77.8117 25H61.5168L50.1603 35.6049L50.7202 37.6213L51.28 39.6191L55.9185 56.4226L60.917 74.477H74.3528L78.5915 70.5189L79.1113 73.2448L79.4112 74.477H92.6071L103.964 63.8721L104.323 62.6772L104.643 61.4823L113.86 28.9955L114.44 26.9791L115 25H112.761ZM112.141 28.6221L102.924 61.1089L102.584 62.3038H92.1472L91.8473 61.0529L88.2484 46.6205L84.6696 61.0529L84.3497 62.3412H73.613L73.2931 61.1276L64.3159 28.6221L63.7561 26.6057H76.4121L76.692 27.8939L79.7711 41.9155L83.19 27.8566L83.4899 26.6057H93.0669L93.3668 27.8753L96.7058 41.9902L99.8648 27.8753L100.145 26.6057H112.761L112.141 28.6221Z"
              />
              <path
                id="J"
                d="M45.2562 25H31.2606L23.8229 31.8708V47.0313H16.3652L5.00879 57.6362V60.8849C4.8818 64.3842 6.13385 67.8054 8.52769 70.5002L8.62766 70.5936C8.899 70.881 9.18596 71.1552 9.48739 71.4151L9.72731 71.6205C10.1068 71.9556 10.5147 72.2615 10.9469 72.5353L11.1269 72.6473C11.4815 72.8765 11.8485 73.0884 12.2265 73.2821L12.6664 73.4875C12.9718 73.6395 13.2855 73.7766 13.6061 73.8983L14.1259 74.1037L15.0456 74.4024L15.6055 74.5518L16.5452 74.7571L17.105 74.8691L18.1447 74.9998H20.144C25.1025 74.9998 37.8185 68.1851 44.1365 58.9058C46.3158 56.3666 47.0556 53.5287 47.0556 47.7034V25H45.2562ZM45.2562 28.2113V47.8341C45.2562 53.3233 44.6364 55.8065 42.717 58.0469C41.3637 59.5889 39.6568 60.8273 37.7223 61.6707C35.7879 62.5141 33.6753 62.9411 31.5405 62.92C25.3824 62.92 18.1647 59.5966 18.1247 50.2613V48.637H31.0006L31.1006 50.1493C31.2406 52.4084 31.7004 52.4084 32.0603 52.4084C32.4202 52.4084 33.02 52.4084 33.02 49.8879V26.6057H45.3561L45.2562 28.2113Z"
              />
            </g>
          </g>
        </svg>
      </div>
      <nav>
        <ul>
          <div
            style={{ top: `${sibebarNavLine}%` }}
            className="sidebar-active-line"
          ></div>
          {renderedNavLinks}
        </ul>
      </nav>
    </>
  );
}
