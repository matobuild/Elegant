import { useState } from "react"
import { Listbox } from "@headlessui/react"

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
]

function SortOption() {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <Listbox.Button className=" body-2-semi flex w-full items-center justify-between gap-1 text-[#121212]">
        <div>Sort by</div>
        <div>
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

      <Listbox.Options>
        {people.map((person) => (
          <Listbox.Option
            key={person.id}
            value={person}
            disabled={person.unavailable}
          >
            {person.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}

export default SortOption
