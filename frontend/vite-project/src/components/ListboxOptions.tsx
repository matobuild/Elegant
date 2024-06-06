import { Fragment } from "react"
import { Listbox, Transition } from "@headlessui/react"

export type listbox = {
  id: number
  name: string
}

type ListboxOptionsProps = {
  list: listbox[]
  selected: listbox
  setSelected: (value: listbox) => void
}

function ListboxOptions({ selected, list, setSelected }: ListboxOptionsProps) {
  return (
    <div className=" border-neutral-4 body-2-semi w-ful rounded-lg border-2 border-solid p-2 md:w-[262px]">
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Button className="flex w-full cursor-default items-center justify-between ">
          <div>{selected?.name}</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.2071 9.79289C15.8166 9.40237 15.1834 9.40237 14.7929 9.79289L12 12.5858L9.20711 9.79289C8.81658 9.40237 8.18342 9.40237 7.79289 9.79289C7.40237 10.1834 7.40237 10.8166 7.79289 11.2071L11.2929 14.7071C11.6834 15.0976 12.3166 15.0976 12.7071 14.7071L16.2071 11.2071C16.5976 10.8166 16.5976 10.1834 16.2071 9.79289Z"
                fill="#6C7275"
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
            {list.map((item) => (
              <Listbox.Option
                key={item.id}
                value={item}
                className={({ active }) =>
                  `h-[42px] cursor-default select-none align-middle md:h-auto ${
                    active ? " bg-neutral-2" : " body-2 "
                  }`
                }
              >
                {item.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  )
}

export default ListboxOptions
