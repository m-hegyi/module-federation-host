import { Field, Label, Input as HeadlessInput } from "@headlessui/react";

interface Props {
  label: string;
}

const Input = ({ label }: Props) => (
  <div className="w-full max-w-md">
    <Field>
      <Label className="font-medium text-sm/6">{label}</Label>
      <HeadlessInput className="block mt-3 w-full rounded-lg border px-3 py-1.5 text-sm/6" />
    </Field>
  </div>
);

export default Input;
