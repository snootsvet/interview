import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import clsx from "clsx";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

const { fieldContext, useFieldContext, formContext, useFormContext } =
  createFormHookContexts();

function FormItemError({
  errors,
  center = false,
}: {
  errors?: Array<string | { message: string; level: string }>;
  center?: boolean;
}) {
  const error = errors?.[0];
  if (!error) {
    return null;
  }
  const errorText = typeof error === "string" ? error : error.message;
  return (
    <p
      className={
        clsx(
          "text-destructive font-semibold leading-6 tracking-[-2.4%] mb-4",
          center && "text-center",
        )
      }
    >
      {errorText}
    </p>
  );
}

interface FormLabelProps {
  className?: string;
  margin?: boolean;
  center?: boolean;
  isValid?: boolean;
}
export function FormLabel({
  value,
  className,
  margin = false,
  center = false,
  isValid = true,
}: FormLabelProps & { value: string }) {
  return (
    <div
      className={
        clsx(
          "block text-2xl font-normal text-neutral-700 leading-[42px] sm:leading-[48px] tracking-[-1.2%] align-middle",
          margin && "mb-4",
          center && "text-center mx-auto",
          isValid ? "text-neutral-700" : "text-destructive",
          className,
        )
      }
    >
      {value}
    </div>
  );
}
export function FormDescription({
  value,
  className,
  margin = false,
  center = false,
}: FormLabelProps & { value: string }) {
  return (
    <p
      className={
        clsx(
          "text-md mt-1.5",
          margin && "mb-4",
          center && "text-center",
          className,
        )
      }
    >
      {value}
    </p>
  );
}

interface FormItemSharedProps {
  label?: string | React.ReactNode;
  description?: string | React.ReactNode;
}

export function FormItem({
  label,
  description,
  errors,
  className,
  children,
  margin,
  center,
  ...props
}: {
  errors?: Array<string | { message: string; level: string }>;
  children?: React.ReactNode;
} & FormLabelProps &
  FormItemSharedProps) {
  const renderLabel =
    label && typeof label === "string" ? (
      <FormLabel
        className={className}
        value={label}
        margin={margin && !description
        }
        center={center}
        {...props}
      />
    ) : (
      label
    );
  const renderDescription =
    description && typeof description === "string" ? (
      <FormDescription
        className={className}
        value={description}
        margin={margin}
        center={center}
        {...props}
      />
    ) : (
      description
    );
  return (
    <label>
      {renderLabel}
      {renderDescription}
      <FormItemError errors={errors} />
      {children}
    </label>
  );
}

function InputField({
  stretch = false,
  icon,
  ...props
}: {
  stretch?: boolean;
  icon?: React.ReactNode;
} & FormItemSharedProps) {
  const field = useFieldContext<string>();
  return (
    <FormItem {...props} {...field.state.meta} margin >
      <div className="relative" >
        <Input
          className="py-2 px-3 bg-neutral-100"
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)
          }
        />
        {icon && (
          <div className="absolute right-0 inset-y-0 flex items-center pr-3" >
            {icon}
          </div>
        )}
      </div>
    </FormItem>
  );
}

function CheckboxField({ ...props }: {} & FormItemSharedProps) {
  const field = useFieldContext<boolean>();
  return (
    <FormItem {...props} {...field.state.meta} margin >
      <Checkbox
        checked={field.state.value}
        name={field.name}
        onCheckedChange={(checked) => field.handleChange(checked ? true : false)
        }
      />
    </FormItem>
  );
}

function DateInputField({
  ...props
}: FormItemSharedProps) {
  const field = useFieldContext<Date | undefined>();
  return (
    <FormItem {...props} {...field.state.meta} margin >
      <Calendar
        selected={field.state.value}
        onSelect={(value: Date | undefined) => field.handleChange(value)}
      />
    </FormItem>
  );
}

function SubmitButton({
  className,
  children
}: {
  className?: string;
  children?: React.ReactNode
}) {
  const form = useFormContext();
  return (
    <form.Subscribe selector={(state) => state.isSubmitting
    }>
      {(isSubmitting) => (
        <Button
          type="submit"
          className={clsx("hover:cursor-pointer", className)}
          disabled={isSubmitting}
        >
          {children}
        </Button>
      )}
    </form.Subscribe>
  );
}

function GlobalError({
  center = false,
  className,
}: {
  center?: boolean;
  className?: string;
}) {
  const form = useFormContext();
  return (
    <form.Subscribe
      // onSubmit has pretty random typing  - sometimes its undefined, sometimes a string, sometimes a nested object
      // The selector fn throws an error if an object is returned from this fn so we need to guard
      selector={(state) =>
        typeof state.errorMap.onSubmit === "string"
          ? state.errorMap.onSubmit
          : null
      }
    >
      {(onSubmit) => {
        if (!onSubmit) return null;
        return (
          <p
            className={
              clsx(
                "text-destructive text-[19px] font-semibold leading-6 tracking-[-2.4%]",
                center && "text-center",
                className,
              )
            }
          >
            {onSubmit}
          </p>
        );
      }}
    </form.Subscribe>
  );
}

export const { useAppForm, withForm } = createFormHook({
  fieldComponents: {
    InputField,
    DateInputField,
    CheckboxField,
  },
  formComponents: {
    SubmitButton,
    GlobalError,
  },
  fieldContext,
  formContext,
});
