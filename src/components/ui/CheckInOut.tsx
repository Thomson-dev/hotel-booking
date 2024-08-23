import { Description, Field, Label, Select } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import clsx from "clsx";

export default function CheckInOut() {
  return (
    <div className="w-full max-w-md px-4">
      <Field>
        <Label className="text-sm/6 font-medium text-[#666]">
          Project status
        </Label>
        <Description className="text-sm/6 text-orange">
          This will be visible to clients on the project.
        </Description>
        <div className="relative">
          <Select
            className={clsx(
              "mt-3 block w-full appearance-none rounded-lg border-black border bg-white/5 py-1.5 px-3 text-sm/6 text-orange",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
              // Make the text of each option black on Windows
              "*:text-black"
            )}
          >
            <option value="active" className="">Active</option>
            <option value="paused">Paused</option>
            <option value="delayed">Delayed</option>
            <option value="canceled">Canceled</option>
          </Select>
          <BiChevronDown
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-orange"
            aria-hidden="true"
          />
        </div>
      </Field>
    </div>
  );
}
