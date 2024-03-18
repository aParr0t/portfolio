"use client";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import { useToast } from "@/components/ui/use-toast";

type Props = {
  i18n: {
    name: string;
    email: string;
    message: string;
  };
  className?: string;
};

interface UseFormInputs {
  name: string;
  email: string;
  message: string;
}

export default function Form({ i18n, className }: Props) {
  const { toast } = useToast();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<UseFormInputs>();

  async function onSubmit(data: any) {
    // Call the backend endpoint instead of SES directly
    fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        replyToEmail: data.email,
        sourceEmail: "mail@ataslapenas.no",
        toEmail: "mail@ataslapenas.no",
        message: data.message,
        subject: `${data.name} sent you a message`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        toast({
          title: "Email sent! 📬",
          description: "We will get back to you as soon as possible.",
        });
        reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        toast({
          title: "Error sending email 😢",
          description: "Please try again later.",
        });
      });
  }

  return (
    <form
      className={`flex flex-col gap-6 mt-6 ${className}`}
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
          placeholder={i18n.message}
          className="py-3 px-4 outline outline-1"
          rows={4}
          {...register("message", {
            required: "Required",
          })}
        />
      </div>
      <Button className="w-min self-center">Send</Button>
    </form>
  );
}
