"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const formSchema = z.object({
  prompt: z.string().min(7, {message: "Prompt must be at least 7 characters long!"}),
});

export default function page() {
  const [outputImg, setOutputImg] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="w-full h-dvh flex justify-center items-center pt-[60px] flex-col">
      <div className="w-full border border-red-500 p-3">
        <h1 className="text-center font-bold text-whitentext-4xl">Create</h1>
        <p className="text-white/60 text-center">
          Genrate Stunning Images from Text for FREE
        </p>
      </div>
      <div className="flex border border-green-500 w-full gap-3 h-full">
        <div className="__form flex flex-col justify-center flex-[2] border border-yellow-400">
          <p className="text-left text-sm text-white/80">
            Type your prompt below to create any image you can imagine
          </p>
          <div className="flex gap-2 w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full flex gap-2"
              >
                <FormField
                  control={form.control}
                  name="prompt"
                  render={({ field }) => (
                    <FormItem className="w-full max-w-[70%]">
                      <FormControl>
                        <Input
                          placeholder="a cat sitting over a sofa..."
                          className="transition-all border-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button variant="secondary">Generate</Button>
              </form>
            </Form>

            
          </div>
        </div>
        <div className="__output flex-[1] bg-white/5 rounded-md"></div>
      </div>
    </div>
  );
}
