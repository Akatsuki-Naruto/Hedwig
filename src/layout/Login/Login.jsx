import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
// import { loginApi } from "../../component/user/userService";
import { toast } from "react-toastify";
import { users } from "../../Api/api";

function Login() {
  // const userRef = userRef();
  // const errRef = userRef();

  const [users, setUsers] = useState([]);
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

  //   function signIn(email, password) {
  //     var userObj = {email: email, password: password};
  //     var jsonBody = JSON.stringify(userObj);

  //     fetch("https://my-json-server.typicode.com/Akatsuki-Naruto/dbUser/User", {
  //         // mode: "no-cors",
  //         method: 'POST',
  //         headers: {
  //             "Accept-language": "RU",
  //             "Content-Type": "application/json"
  //         },
  //         body: jsonBody
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //         if (data.error) {
  //             alert("Error Password or Username");
  //         } else {
  //             return data;
  //         }
  //     })
  //     .catch((err) => {
  //         console.log(err);
  //     });
  // }

  // const postUser = async (id) => {
  //   const response = await users.post(`/id=${id}`);
  //   setUsers(users.filter((user)=> user.id === id))
  // }

  async function login() {
    let item = { email, password };

    console.log("2!");
    let result = await fetch(
      "https://my-json-server.typicode.com/Akatsuki-Naruto/dbUser/User",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    console.log("2");

    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("http://localhost:5173/Hedwig");
    console.log("3");
  }

  return (
    <>
      <Routes>
        <Route path="/SignUp/" element={<SignUp />} />
      </Routes>
      <div className={clsx("")}>
        <form
          className={clsx(
            "container fixed z-40 top-[50px] left-[60px] bg-gray-500 w-full h-full "
          )}
        >
          <div className={clsx("card w-72 m-auto pt-20")}>
            <h2>User Login</h2>
            <div className={clsx("card-body flex flex-col items-end")}>
              <div className={clsx("form-group text-black mb-2")}>
                <label className={clsx("mr-2")}>Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={clsx("form-control bg-white text-black")}
                  placeholder="Email or UserName ... "
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
                className={email && password ? active : disabled}
                disabled={email && password ? false : true}
                onClick={login}
              >
                Login
              </button>

              <Link className={clsx("btn btn-success")} to={"/Signup"}>
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
}

export default Login;
