import { useState } from "react";

const Login = ({ flip }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData((prev) => {
      const newData = { ...prev, [name]: value };
      return newData;
    });
  };

  const LoginSubmit = (e) => {
    e.preventDefault();
    alert("Formulario de login enviado");
    setData({
      email: "",
      password: "",
    });
  };

  const calculateProgress = () => {
    let progress = 0;
    let incrementToAdd = 50;

    if (data.email) {
      let pattern =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      if (pattern.test(data.email)) {
        progress += incrementToAdd;
      }
    }
    if (data.password) {
      progress += incrementToAdd;
    }

    return progress
  };

  return (
    <div
      className="form-container flex justify-center items-center py-8 sm:w-1/2 w-full"
      onSubmit={LoginSubmit}
    >
      <form className="flex flex-col gap-4 w-7/12 ">
        <h2 className="text-zinc-500 text-2xl font-bold text-center">
          {" "}
          Entrar em sua Conta{" "}
        </h2>

        <div className="flex flex-col gap-1">
          <label htmlFor="email2" className="text-blue-500 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email2"
            name="email"
            className="w-full h-10 p-2 text-zinc-500 font-normal border rounded-md shadow-md focus:outline-none"
            value={data.email}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password2" className="text-blue-500 font-medium">
            Senha
          </label>
          <input
            type="password"
            id="password2"
            name="password"
            className="w-full h-10 p-2 text-zinc-500 font-normal border rounded-md shadow-md focus:outline-none"
            value={data.password}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-between items-center text-xs">
          <span className="flex gap-1 items-center">
            <input type="checkbox" name="" id="" /> Lembrar de mim
          </span>
          <span className="text-blue-500 cursor-pointer duration-75 hover:scale-105">
            Esqueceu a senha?
          </span>
        </div>

        <button
          className="w-full bg-blue-500 rounded-md text-white h-10 shadow-md disabled:bg-zinc-400"
          type="submit"
          disabled={calculateProgress() !== 100}
        >
          Entrar
        </button>

        <p className="flex flex-col items-center">
          Ainda não tem uma conta?{" "}
          <span
            onClick={flip}
            className="text-blue-500 cursor-pointer duration-75 hover:scale-105"
          >
            Crie uma conta
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
