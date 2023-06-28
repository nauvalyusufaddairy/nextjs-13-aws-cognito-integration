import React, { useState } from "react";
import { useRouter } from "next/router";

const Logan = () => {
  // untuk likn navigation
  const router = useRouter();
  //initial state
  const initial = {
    email: "",
    password: "",
  };

  // penyimpanan input
  const [data, setData] = useState(initial);

  // ke trigger ketika tombol sigin di pencet

  /**
   *
   * @param e
   * @returns if true return useRouter if false return alerts
   */
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (data.email !== "admin" || data.password !== "123") {
      return alert("maneh lain admin");
    }

    router.push("/landingPage");
  };

  /**
   *
   * @param e event target
   */
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };
  return (
    <div>
      <input
        name="email"
        type="text"
        value={data.email}
        onChange={(e) => handleChange(e)}
      />
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={handleSubmit}> login</button>
    </div>
  );
};

export default Logan;
