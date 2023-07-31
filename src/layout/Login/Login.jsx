import clsx from "clsx";
import * as React from "react";
import { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
import { toast } from "react-toastify";
import { users } from "../../Api/api";
import { useForm } from "react-hook-form";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const [isShowPasswords, setIsShowPasswords] = useState(false);
  const navigate = useNavigate();
  const active = clsx("hover:bg-amber-300 hover:text-black px-3 py-1 mr-5");
  const disabled = clsx(
    "cursor-not-allowed hover:bg-gray-300 text-gray-400 bg-gray-300 hover:text-gray-400 px-3 py-1 mr-5"
  );
  // const [data, setData] = useState({
  //   username: '',
  //   password: ''
  // });

  async function login() {
    let item = { email, password };

    let result = await fetch("/src/Api/db.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user", JSON.stringify(result));
    navigate("/Hedwig/*");
  }

  const handleSubmit0 = async (e) => {
    e.preventDefault();
    const response = await login({
      username,
      password,
      email,
    });
    if ("accessToken" in response) {
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      }).then((value) => {
        localStorage.setItem("accessToken", response["accessToken"]);
        localStorage.setItem("user", JSON.stringify(response["user"]));
        window.location.href = "/profile";
      });
    } else {
      swal("Failed", response.message, "error");
    }
  };


  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors }
  } = useForm({
    criteriaMode: 'all',
  });

  const onSubmit = async () => {
    const response = await fetch("/src/Api/db.json")
    if (response.statusCode = 200) {
        setError('root.serverError', {
          type: response.statusCode,
        })
    }
  }

  // const {uname, pass} = data;
  //     const checkUser = () => {
  //       const usercheck = users.find(user => (user.username === uname && user.password === pass));
  //       if(usercheck) {
  //         console.log("Login successful");
  //       }else {
  //         console.log("Wrong password or username");
  //       }
  //       // console.log(uname);
  //       console.log(usercheck);
  //     }

//      // const changeHandler = (e) => {
//      //   setData({...data, [e.target.name]:[e.target.value]})
//      // }
      // const handleSubmit1 = (e) => {
      //   e.preventDefault();
      //   checkUser();
      //   console.log(checkUser());
      // }


  {
    //*

    return (
      <>
        <Routes>
          <Route path="/Hedwig/SignUp" element={<SignUp />} />
        </Routes>
        <div className={clsx("")}>
          <form
            className={clsx(
              "container fixed z-[60] top-[50px] left-[60px] bg-gray-500 w-full h-full "
            )}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={clsx("card w-72 m-auto pt-20")}>
              <h2>User Login</h2>
              <div className={clsx("card-body flex flex-col items-end")}>
                <div className={clsx("form-group text-black mb-4")}>
                  <label className={clsx("mr-2")}>Email</label>
                  <input
                    type="text"
                    value={email || username}
                    defaultValue=""
                    {...register("example")}
                    onChange={(e) => setEmail(e.target.value)}
                    className={clsx("form-control bg-white text-black h-6")}
                    placeholder="Email or UserName ... "
                  />
                  
                </div>
                <div className={clsx("form-group text-black mb-4")}>
                  <label className={clsx("mr-2")}>Password</label>
                  <input
                    type="password"
                    value={password}
                    {...register("exampleRequired", { required: true })}
                    onChange={(e) => setPassword(e.target.value)}
                    className={clsx("form-control bg-white text-black h-6")}
                    placeholder="Password ..."
                  />
                </div>
              </div>
              <div className={clsx("")}>
                {errors.root?.serverError?.type === 400 && (
                    <p>server response message</p>
                  )}
                  <button
                  className={email && password ? active : disabled}
                  disabled={email && password ? false : true}
                  onClick={handleSubmit0}
                >
                  Login
                </button>
                <Link className={clsx("btn btn-success")} to={"/Hedwig/Signup"}>
                  <button
                    type="submit"
                    className={clsx(
                      "hover:bg-amber-300 hover:text-black px-3 py-1"
                    )}
                  >
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </>
    );
    //    */
  }
  //  =================================================================

  // return (
  //   <form
  //     onSubmit={handleSubmit(onSubmit)}
  //     className={clsx(
  //       "container fixed z-40 top-[50px] left-[60px] bg-gray-500 w-full h-full flex flex-col items-center m-auto pt-20"
  //     )}
  //   >
  //     <h2>User Login</h2>
  //     <span>Username</span>
  //     <input
  //       defaultValue=""
  //       {...register("example")}
  //       className={clsx("form-control bg-white text-black h-6")}
  //     />

  //     <input
  //       type="password"
  //       {...register("exampleRequired", { required: true })}
  //       className={clsx("form-control bg-white text-black h-6")}
  //     />

  //     {errors.exampleRequired && <span>This field is required</span>}

  //     <input
  //       type="submit"
  //       className={clsx("hover:bg-amber-300 hover:text-black px-3 py-1")}
  //       onClick={handleSubmit}
  //     />
  //   </form>
  // );
}

export default Login;
