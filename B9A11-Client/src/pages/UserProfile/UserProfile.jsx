import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


function UserProfile() {
    const {user} = useContext(AuthContext)
   
  return (
    <div className="w-full mx-auto max-w-sm overflow-hidden rounded-lg shadow-2xl mt-20 borders">
      <img
        className="object-cover object-center w-3/4 rounded-full h-50  mx-auto mb-4"
        src={user.photoURL}
        alt="avatar"
      />

      <div className="flex items-center px-6 py-3 bg-gray-900">
        <svg
          aria-label="headphones icon"
          className="w-6 h-6 text-white fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"
          />
        </svg>

        <h1 className="mx-3 text-lg font-semibold text-white">Contributing</h1>
      </div>

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold">{user.displayName}</h1>

        

        
      

        <div className="flex items-center mt-4">
          <svg
            aria-label="email icon"
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
            />
          </svg>

          <h1 className="px-2 text-sm">{user.email}</h1>
        </div>
      </div>
    </div>
  );
}

export default UserProfile