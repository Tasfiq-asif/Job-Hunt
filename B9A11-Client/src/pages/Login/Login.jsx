import { useContext, useEffect, useState } from 'react'
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import axios from 'axios';



function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const { signIn, googleLogin,user,loading} = useContext(AuthContext);

    useEffect(() => {
      if(user){
        navigate('/')
      }
    },[user,navigate])
    const from = location.state || "/";
 
    const { register, handleSubmit } = useForm({
      defaultValues: {
        email: "",
        password: "",
      },
    });
    const onSubmit = async(d) => {
      const { email, password } = d;
      setError("");

    try {
      const result = await signIn(email, password);
      const { data } = await axios.post(
        `https://jobhunt-server-seven.vercel.app/jwt`,
        {
          email: result.user.email,
        },
        { withCredentials: true }
      );
      navigate(from, { replace: true });
    } catch (error) {
      setError(error.message.replace("Firebase: ", ""));
    }
    };
    if (user || loading) return;
  return (
    <div className="hero min-h-screen ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login JobHunt</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        <h1 className=" text-3xl text-center pt-6 heading font-bold">
          Please Log In
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control ">
            <label className="label ">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", { required: true })}
              type={!showPassword ? "password" : "text"}
              placeholder="password"
              className="input input-bordered relative"
              required
            />
            <button
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className="absolute right-12 top-[238px]"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
            <div className="flex justify-cemnter">
              <label className="label">
                <p className="label-text-alt ">
                  Do Not have an Account? Please{" "}
                  <Link
                    className="link-hover hover:text-orange text-orange"
                    to={"/register"}
                  >
                    Register
                  </Link>
                </p>
              </label>
            </div>
          </div>
          {error && <p className=" mx-auto mt-1  text-red-600">{error}</p>}
          <div className="form-control mt-6 flex flex-col gap-3">
            <button className="btn bg-[#2a68ff] text-white hover:bg-transparent hover:text-[#2a68ff] hover:border  hover:border-[#2a68ff] ">
              Login
            </button>
          </div>
        </form>
        <div className="flex flex-col gap-3 mb-5 w-[87%] mx-auto">
          <button
            onClick={async () => {
              try {
                // 1. google sign in from firebase
                const result = await googleLogin();
            
                const { data } = await axios.post(
                  `https://jobhunt-server-seven.vercel.app/jwt`,
                  {
                    email: result?.user?.email,
                  },
                  { withCredentials: true }
                );
              
                toast.success("You Just logged in !");
                // Navigate after login
                navigate(location?.state ? location.state : "/");
              } catch (error) {
                console.error(error);
                toast.error("Failed to login. Please try again.");
              }
            }}
            className="btn bg-white border-black hover:border-orange hover:bg-white"
          >
            <FaGoogle size={24} />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login