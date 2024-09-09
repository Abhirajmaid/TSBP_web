"use client";
import { Toast } from "@src/context/ToastContex";
import { fetchSellerUser } from "@src/lib/actions/user.action";
import Link from "next/link";
import { useEffect, useState } from "react";

const SellerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [issue, setIssue] = useState(false);
  const [user, setUser] = useState([]);
  const { success, error, warn } = Toast();

  // useEffect(() => {
  //   console.log("User:", user);
  // }, [user]);

  // const fetchUser = (email, password) => {
  //   console.log(email);
  //   const { data } = fetchSellerUser(email, password);
  //   setUser(data);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == "" || password == "") {
      error("Fields are Empty.");
      setIssue(true);
    } else {
      setIssue(false);
      // fetchUser(email, password);
      warn("Fetching...");
    }
  };

  return (
    <section className="flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8 md:px-8">
          <h2 className="font-bold text-3xl text-primary">Login</h2>
          <p className="text-sm mt-4 text-primary">
            If you are already a member, easily log in
          </p>
          {/* {user[0] ? <p>Loaded</p> : <p>Loading...</p>} */}
          <form
            action=""
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <input
              className={`p-2 rounded-xl mt-8 border w-full ${
                issue ? "border-red-500" : ""
              }`}
              type="email"
              name="email"
              placeholder="johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <input
                className={`p-2 rounded-xl border w-full ${
                  issue ? "border-red-500" : ""
                }`}
                type="password"
                name="password"
                placeholder="**********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            </div>
            <button className="bg-primary rounded-xl text-white py-2 hover:scale-105 duration-300">
              Login
            </button>
          </form>

          <div className="mt-5 text-xs border-b border-primary_dark py-4 text-primary_dark">
            <a href="#">Forgot your password?</a>
          </div>

          <div className="mt-3 text-xs flex justify-between items-center text-primary_dark">
            <p>Don't have an account?</p>
            <Link href="/become-seller">
              <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                Register
              </button>
            </Link>
          </div>
        </div>
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl"
            src="https://images.unsplash.com/photo-1637476349345-d8f88e11e573?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </section>
  );
};

export default SellerLogin;
