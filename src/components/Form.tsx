"use client";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";

export default function Form() {
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
        <label htmlFor="name">Name</label>
        <input
          id="name"
          placeholder="Your name"
          type="text"
          className="py-3 px-4 outline outline-1"
          {...register("name", {
            required: "Required",
          })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          placeholder="Your email"
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
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          className="py-3 px-4 outline outline-1"
          rows={4}
        />
      </div>
      <Button className="w-min self-center">Send</Button>
    </form>
  );
}
