import { useEffect, useState } from "react";
import "./App.css";

export const App = () => {
  const [nameUser, setNameUser] = useState();

  useEffect(() => {
    (function (src) {
      var a = document.createElement("script");
      a.type = "text/javascript";
      a.async = true;
      a.src = src;
      var b = document.getElementsByTagName("script")[0];
      b.parentNode.insertBefore(a, b);
    })("//sandbox.tinypass.com/xbuilder/experience/load?aid=PeVZORGJsu");

    setTimeout(() => {
      const tp = window.tp || [];
      tp.push(["setCookieDomain", "piano-prueb.netlify.app"]);
    }, 1000);
  }, []);

  const PianoLogin = () => {
    console.log("login");
    // const tp = window.tp || [];
    window.tp.push([
      "init",
      function () {
        window.tp.pianoId.show({
          disableSignUp: false,
          displayMode: "modal",
          screen: "register",
          containerSelector: "#login-form",
          loggedIn: function (data) {
            console.log("user", data.user, "logged in with token", data.token);
            setNameUser(data.user.given_name);
          },

          loggedOut: function () {
            console.log("El usuario cerro sesión");
          },
        });
      },
    ]);
  };

  const PianoLogout = () => {
    // const tp = window.tp || [];
    window.tp.push([
      "init",
      function () {
        console.log("logout");
        window.tp.pianoId.logout();
        window.location.reload();
      },
    ]);
  };

  const PianoProfile = () => {
    // const tp = window["tp"] || [];
    window.tp.push([
      "init",
      function () {
        window.tp.myaccount.show({
          displayMode: "inline",
          containerSelector: "#my-account",
        });
      },
    ]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Bienvenido a mi sitio {nameUser}</p>
        <a
          className="App-link"
          href="#"
          rel="noopener noreferrer"
          onClick={PianoLogin}
        >
          Iniciar
        </a>
        <button onClick={PianoProfile}>Mi Perfil</button>
        <button onClick={PianoLogout}>Logout</button>
      </header>
    </div>
  );
};
