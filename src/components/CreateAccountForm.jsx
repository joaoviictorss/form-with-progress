import { useState } from "react";
const CreateAccountForm = ({flip}) => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    maritalStatus: "",
    gender: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData((prev) => {
      const newData = { ...prev, [name]: value };
      return newData;
    });
  };

  const calculateProgress = () => {
    let progress = 0;
    let incrementToAdd = 20;

    if (data.fullName) {
      const splitedName = data.fullName.split(" ");
      if (splitedName[1]) {
        progress += incrementToAdd;
      }
    }
    if (data.email) {
      let pattern =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      if (pattern.test(data.email)) {
        progress += incrementToAdd;
      }
    }
    if (data.password) {
      let pattern = /^(?=.*\d).{8,}$/;
      if (pattern.test(data.password)) {
        progress += incrementToAdd;
      }
    }
    if (data.maritalStatus) {
      progress += incrementToAdd;
    }
    if (data.gender) {
      progress += incrementToAdd;
    }
    return progress;
  };

  const createAccountSubmit = (e) => {
    e.preventDefault()
    alert('Formulario para criação de conta enviado!')
    setData({
      fullName: "",
      email: "",
      password: "",
      maritalStatus: "",
      gender: "",
    })
  }

  return (
    <div className="form-container flex justify-center items-center w-1/2 py-8" onSubmit={createAccountSubmit}>
      <form className="flex flex-col gap-4 w-7/12 ">
        <h2 className="text-zinc-500 text-2xl font-bold text-center">
          Criar uma conta
        </h2>
        <div className="border h-2 w-full">
          <div
            className={`bg-blue-600 h-full`}
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="fullName" className="text-blue-500 font-medium">
            Nome completo
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="w-full h-10 p-2 text-zinc-500 font-normal border rounded-md shadow-md focus:outline-none"
            value={data.fullName}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-blue-500 font-medium">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full h-10 p-2 text-zinc-500 font-normal border rounded-md shadow-md focus:outline-none"
            autoComplete="off"
            value={data.email}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-blue-500 font-medium">
            Senha
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full h-10 p-2 text-zinc-500 font-normal border rounded-md shadow-md focus:outline-none"
            autoComplete="off"
            value={data.password}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-blue-500 font-medium">
            Estado civil
          </label>
          <select
            id="marital-status"
            name="maritalStatus"
            className="w-full h-10 p-2 text-zinc-500 font-normal border rounded-md shadow-md focus:outline-none"
            value={data.maritalStatus}
            onChange={handleChange}
          >
            <option value="">--- Selecione ---</option>
            <option value="solteiro">Solteiro</option>
            <option value="casado">Casado</option>
            <option value="divorciado">Divorciado</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-blue-500 font-medium">
            Gênero
          </label>
          <div className="flex gap-4  ">
            <span className="flex justify-center items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="masculino"
                onChange={handleChange}
                checked={data.gender === "masculino"}
              />
              Masculino
            </span>

            <span className="flex justify-center items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="feminino"
                onChange={handleChange}
                checked={data.gender === "feminino"}
              />
              Feminino
            </span>
          </div>
        </div>

        <button
          className="w-full bg-blue-500 rounded-md text-white h-10 shadow-md disabled:bg-zinc-400"
          disabled={calculateProgress() !== 100}
        >
          Criar conta
        </button>

        <p className="flex items-center justify-center gap-2">
          Já tem uma conta?{" "}
          <span onClick={flip} className="text-blue-500 cursor-pointer duration-75 hover:scale-105">
            Acesse aqui
          </span>
        </p>
      </form>
    </div>
  );
};

export default CreateAccountForm;
