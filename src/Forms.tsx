import { HeadText } from "./showHeadText";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

export default function FormsPage() {
  interface MyForm {
    login: string;
    password: string;
  }

  const [tasks, setTasks] = useState<MyForm[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MyForm>({
    mode: "onBlur",
  });

  const saveElement: SubmitHandler<MyForm> = (data) => {
    setTasks((prev) => [...prev, data]);
    reset();
  };

  return (
    <>
      <HeadText>Формы</HeadText>

      <div className="form">
        <form onSubmit={handleSubmit(saveElement)} className="firstForm">
          <div className="firstInput">
            <label>Логин </label>
            <input
              type="text"
              {...register("login", {
                required: true,
                minLength: {
                  value: 3,
                  message: "От 3 символов",
                },
              })}
            ></input>
            <div>{errors.login?.message}</div>
          </div>

          <div className="secondInput">
            <label>Пароль </label>
            <input
              type="text"
              {...register("password", {
                required: true,
                minLength: {
                  value: 3,
                  message: "От 3 символов",
                },
              })}
            ></input>
            <div>{errors.password?.message}</div>
          </div>

          <div className="submitButton">
            <button type="submit">Отправить</button>
          </div>
        </form>

        {tasks.map((task) => (
          <div>
            {task.login} - {task.password}
          </div>
        ))}
      </div>
    </>
  );
}
