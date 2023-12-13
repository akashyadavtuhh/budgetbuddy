import { useState } from 'react';

const OverViewButton: React.FC<{
  activeOverview: 'OverView' | 'Spending' | 'List';
  setActiveOverview: React.Dispatch<React.SetStateAction<'OverView' | 'Spending' | 'List'>>;
  title: string;
}> = ({ activeOverview, setActiveOverview, title }) => {
  return (
    <li
      role="button"
      onClick={() => setActiveOverview(title as 'OverView' | 'Spending' | 'List')}
      className={`text-white rounded-xl px-4 py-1 text-center ${
        activeOverview === title ? 'bg-pink-400 text-black' : ''
      }`}
    >
      <a href="#">{title}</a>
    </li>
  );
};

export const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [activeOverview, setActiveOverview] = useState<'OverView' | 'Spending' | 'List'>('OverView');
  return (
    <>
      <div className="h-24 bg-pink-600 w-full flex flex-col justify-evenly">
        <div className="flex w-full px-2">
          <span className="text-white text-center ">
            <i className="fas fa-cog"></i>
          </span>
          <span className="text-white grow text-center ">OverView: Current Budget</span>
          <span className="text-white text-center ">
            <i className="fas fa-search"></i>
          </span>
        </div>
        <nav>
          <ul className="flex justify-around">
            {/*three nav items overview,spending,list  */}
            {['OverView', 'Spending', 'List'].map((item) => {
              return (
                <OverViewButton key={item}  title={item} activeOverview={activeOverview} setActiveOverview={setActiveOverview} />
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="px-1 md:m-5 pb-2 w-screen h-full bg-gray-200 ">{children}</div>;
    </>
  );
};
