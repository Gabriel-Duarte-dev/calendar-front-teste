import React, { useEffect } from "react";
// import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";

export function Home() {
  const Login = async () => {
    // const width = 500;
    // const height = 600;
    // const left = window.innerWidth / 2 - width / 2;
    // const top = window.innerHeight / 2 - height / 2;
    // const authWindow = window.open(
    //   "http://localhost:8000/calendar/auth/google",
    //   "Google Auth",
    //   `width=${width},height=${height},top=${top},left=${left}`
    // );
    // const checkAuth = setInterval(async () => {
    //   if (authWindow?.closed) {
    //     clearInterval(checkAuth);
    //     const data = await api.get("/calendar/get-token");
    //     console.log(data);
    //   }
    // }, 1000);
  };

  // useEffect(() => {
  //   async function getData() {
  //     return await api.get("/calendar/get-token");
  //   }

  //   console.log(getData());
  // }, []);

  async function creatEvent() {
    const body = {
      summary: "Camoes gay",
      description: "Descrição dfaskljfkldasjf kldasjflkdsajfskj",
      location: "SP Brasil",
      startDateTime: "2024-09-24T21:00",
      endDateTime: "2024-09-24T22:00",
    };

    const response = await api.post("/calendar/creat-event", body);
    console.log(response);
  }

  return (
    <div>
      <a href="http://localhost:8000/calendar/auth/google">Login</a>
      <button onClick={creatEvent}>criar evento</button>
    </div>
  );
}
