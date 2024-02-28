import { useState } from "react"
import { Listbox } from "@headlessui/react"

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
]

function ListboxOptions() {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <div className=" border-neutral-4 body-2-semi w-[262px] rounded-lg border-2 border-solid p-2">
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <Listbox.Button className="flex w-full items-center justify-between">
          <div>{selectedPerson.name}</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.2071 9.79289C15.8166 9.40237 15.1834 9.40237 14.7929 9.79289L12 12.5858L9.20711 9.79289C8.81658 9.40237 8.18342 9.40237 7.79289 9.79289C7.40237 10.1834 7.40237 10.8166 7.79289 11.2071L11.2929 14.7071C11.6834 15.0976 12.3166 15.0976 12.7071 14.7071L16.2071 11.2071C16.5976 10.8166 16.5976 10.1834 16.2071 9.79289Z"
                fill="#6C7275"
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
    </div>
  )
}

export default ListboxOptions
