import clsx from "clsx";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [username,setUsername] = useState("")
  
  async function login() {
    let item = { email, password, userName };

    let result = await fetch(
      'https://my-json-server.typicode.com/Akatsuki-Naruto/dbUser/User',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(item),
      }
    );

    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/Hedwig/*");
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await login({
      username,
      password
    });
    if ('accessToken' in response) {
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      })
      .then((value) => {
        localStorage.setItem('accessToken', response['accessToken']);
        localStorage.setItem('user', JSON.stringify(response['user']));
        window.location.href = "/profile";
      });
    } else {
      swal("Failed", response.message, "error");
    }
  }

  return (
    <>
      <div className={clsx("")}>
        <form
          className={clsx(
            "container fixed z-40 top-[50px] left-[60px] bg-gray-500 w-full h-full "
          )}
        >
          <div className={clsx("card w-72 m-auto pt-20")}>
            <h2>User Sign In</h2>
            <div className={clsx("card-body flex flex-col items-end")}>
            <div className={clsx("form-group text-black mb-2")}>
                <label className={clsx("mr-2")}>User Name</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={clsx("form-control bg-white text-black")}
                  placeholder="UserName"
                ></input>
              </div>
              <div className={clsx("form-group text-black mb-2")}>
                <label className={clsx("mr-2")}>Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={clsx("form-control bg-white text-black")}
                  placeholder="Email"
                ></input>
              </div>
              <div className={clsx("form-group text-black mb-2")}>
                <label className={clsx("mr-2")}>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={clsx("form-control bg-white text-black")}
                  placeholder="Password ..."
                />
              </div>
            </div>
            <div className={clsx("")}>
              <button
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
