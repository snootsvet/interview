"use client";

import { TriageFormSchema } from "@/forms/triage/schema";
import { useAppForm } from "@/forms/form";
import { LucideMail } from "lucide-react";

export default function TriageScreen() {
  const form = useAppForm({
    defaultValues: {
      formId: "triage",
      email: ""
    },
    validators: {
      onSubmit: TriageFormSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(JSON.stringify(value, null, 2))
    },
  });

  return (
    <div className="w-full min-h-[100svh] flex flex-col justify-center py-12">
      <div className="lg:w-[640px] lg:mx-auto min-h-[100svh] lg:min-h-fit lg:max-h-96 py-32 rounded-3xl flex flex-col justify-between items-center gap-y-8 lg:gap-y-12">
        <div className="w-full lg:max-w-lg px-6">
          <h2
            className="flex flex-col gap-y-2 items-center justify-between mb-20"
          >
            <p className="text-4xl font-semibold text-neutral-700">Existing Member Triage</p>
          </h2>
          <form
            className="flex flex-col gap-y-6 items-stretch"
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
            onChange={() => { }}
          >
            <form.AppForm>
              <form.GlobalError />
              <form.AppField
                name="email"
                children={(field) => (
                  <field.InputField
                    label="Email"
                    stretch
                    icon={
                      <LucideMail
                        size={24}
                        className=""
                        stroke="currentColor"
                      />
                    }
                  />
                )}
              />
              <form.SubmitButton
                className="bg-neutral-600"
              >
                Submit!
              </form.SubmitButton>
            </form.AppForm>
          </form>
        </div>
      </div>
    </div>
  );
}
