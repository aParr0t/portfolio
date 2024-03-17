"use client";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";

type Props = {
  i18n: {
    name: string;
    email: string;
    message: string;
  };
};

export default function Form({ i18n }: Props) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <form
      className="flex flex-col gap-6 mt-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name">{i18n.name}</label>
        <input
          id="name"
          placeholder={i18n.name}
          type="text"
          className="py-3 px-4 outline outline-1"
          {...register("name", {
            required: "Required",
          })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">{i18n.email}</label>
        <input
          id="email"
          placeholder={i18n.email}
          type="email"
          className="py-3 px-4 outline outline-1"
          {...register("email", {
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message">{i18n.message}</label>
        <textarea
          id="message"
          name="message"
          placeholder={i18n.message}
          className="py-3 px-4 outline outline-1"
          rows={4}
        />
      </div>
      <Button className="w-min self-center">Send</Button>
    </form>
  );
}
