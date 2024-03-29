import { Disclosure, Transition } from "@headlessui/react"

type DisclosureBoxProps = {
  title: string
  details?: string
  packaging?: string
}

const DisclosureBox = ({ title, details, packaging }: DisclosureBoxProps) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="border-neutral-4  w-full border-b border-solid pb-2">
            <div className="flex justify-between">
              <p className="button-m text-neutral-7">{title}</p>
              <svg
                className={open ? "" : "rotate-180 transform"}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6.27246 9L12.2725 15L18.2725 9"
                  stroke="#141718"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className=" flex flex-col gap-4 py-2">
              <div className="flex flex-col gap-2">
                <p className="caption-1-semi text-neutral-4">Details</p>
                <p className="caption-2 text-neutral-7">{details}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="caption-1-semi text-neutral-4">Packaging</p>
                <p className="caption-2 text-neutral-7">{packaging}</p>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

export default DisclosureBox
