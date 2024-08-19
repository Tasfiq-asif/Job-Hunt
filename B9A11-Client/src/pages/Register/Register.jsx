import  { useContext, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from "react-hot-toast";
import axios from 'axios';

function Register() {
    const { createUser, updateUserProfile,user,setUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const [error, setError] = useState("");
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: {
        name: "",
        email: "",
        password: "",
        photo: "",
      },
    });

    const onSubmit =async (d, e) => {
      e.preventDefault();
      const { name, photo, email, password } = d;

      if (password.length < 6) {
        setError("Password must be 6 characters or more");
        return;
      } else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
        setError("There must be one uppercase and one lowercase letter");
        return;
      }
      //create user
      setError("");
     
    try {
      const result = await createUser(email, password);

      updateUserProfile(name, photo);
      setUser({ ...user, photoUrl: photo, displayName: name });

      const { data } = await axios.post(
        `https://jobhunt-server-seven.vercel.app/jwt`,
        {
          email: result?.user?.email,
        },
        { withCredentials: true }
      );

      if (result.user) {
        navigate(location?.state || "/");
      }

      toast.success("Registration Successful !");
    } catch (error) {
      toast.error(error?.message);
      setError(error.message.replace("Firebase: ", ""));
    }

    };

  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register JobHunt</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 ">
        <h1 className=" text-3xl text-center pt-6 heading font-bold">
          Please Register
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              placeholder="name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className=" pt-1 text-red-600">This field is required</span>
            )}
          </div>
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
            {errors.email && (
              <span className=" pt-1 text-red-600">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              {...register("password", {
                required: true,
                min: 6,
              })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo url</span>
            </label>
            <input
              type="url"
              className="input input-bordered"
              placeholder="photo url"
              {...register("photo", {})}
            />
          </div>
          <div className="flex justify-center">
            <label className="label">
              <p className="label-text-alt link link-hover">
                Already Registered? Log in{" "}
                <Link to={"/login"} className=" text-orange font-bold">
                  {" "}
                  Here
                </Link>
              </p>
            </label>
          </div>
          {error && <p className=" mx-auto mt-1  text-red-600">{error}</p>}
          <div className="form-control mt-6">
            <button className="btn bg-[#2a68ff] text-white hover:bg-transparent hover:text-[#2a68ff] hover:border  hover:border-[#2a68ff] ">
              Register
            </button>
          </div>
        </form>
      </div>
    
    </div>
  );
}

export default Register