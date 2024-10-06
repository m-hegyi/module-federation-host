import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const Cart = () => (
  <Popover className="relative">
    <PopoverButton>
      <ShoppingBagIcon className="size-6" />
    </PopoverButton>
    <PopoverPanel
      transition
      anchor="bottom end"
      className="divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0 bottom-4"
    >
      <div className="min-h-96 bg-white border p-2">Cart content</div>
    </PopoverPanel>
  </Popover>
);

export default Cart;
