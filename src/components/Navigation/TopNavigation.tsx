function TopNavigation() {
  return (
    <div className="navbar bg-base-100 flex justify-between">
      <div className="avatar ml-4">
        <div className="w-10 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
          <img src="https://media.licdn.com/dms/image/D5603AQEd-yrCp8q8Kg/profile-displayphoto-shrink_200_200/0/1698428735075?e=1708560000&v=beta&t=98WhHyU9haktDfftxaj3kJyMTZPBTe7XYTxPR4vQruc" />
        </div>
        <span className="pl-4">
          <a className="btn-ghost text-xs">Hey! Dein Handy</a>
          <h4 className="text-md font-medium btn-wide">Monthly Budget</h4>
        </span>
      </div>

      <div className="navbar-end">
        <label className="cursor-pointer grid place-items-center">
          <input
            type="checkbox"
            value="dark"
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
        </label>
      </div>
    </div>
  );
}

export default TopNavigation;