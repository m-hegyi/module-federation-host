import { Button as HeadlessButton } from "@headlessui/react";

interface Props {
  label: string;
}

const Button = ({ label }: Props) => <HeadlessButton>{label}</HeadlessButton>;

export default Button;
