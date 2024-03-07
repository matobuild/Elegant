import { Listbox, Transition } from "@headlessui/react"
import { Fragment } from "react"

type SortOptionProps = {
  selected: { name: string }
  list: { name: string }[]
  setSelected: (value: { name: string }) => void
}

function SortOption({ selected, list, setSelected }: SortOptionProps) {
  return (
    <div className="body-2-semi w-24 ">
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Button className="flex w-full cursor-default items-center justify-between gap-1 text-[#121212]">
          <div className="flex items-center justify-end gap-1">
            <div>{selected.name}</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M5.22705 7.5L10.227 12.5L15.227 7.5"
                stroke="#121212"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </Listbox.Button>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options>
            {list.map((option) => (
              <Listbox.Option
                key={option.name}
                value={option}
                className={({ active }) =>
                  `cursor-default select-none ${
                    active ? " bg-neutral-2 " : " body-2"
                  }`
                }
              >
                {option.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  )
}

export default SortOption
