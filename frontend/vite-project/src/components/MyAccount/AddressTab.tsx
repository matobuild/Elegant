const AddressTab = () => {
  return (
    <div className=" px-[72px]">
      <div className=" flex flex-col gap-[19px]">
        <p className="text-primary-1 body-1-semi">Address</p>
        <div>
          <div className=" border-neutral-4 w-5/12 rounded-lg border border-solid p-4">
            <div className="flex flex-col gap-2">
              <div className=" flex justify-between">
                <p className="text-primary-1 body-2-semi">Billing Address</p>
                <button className=" flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M2 14.5H14M9.18961 4.04114C9.18961 4.04114 9.18961 5.13089 10.2794 6.22064C11.3691 7.31039 12.4589 7.31039 12.4589 7.31039M4.87975 12.492L7.16823 12.1651C7.49833 12.118 7.80424 11.965 8.04003 11.7292L13.5486 6.22064C14.1505 5.61879 14.1505 4.64299 13.5486 4.04114L12.4589 2.95139C11.857 2.34954 10.8812 2.34954 10.2794 2.95139L4.77078 8.45997C4.53499 8.69576 4.38203 9.00167 4.33488 9.33177L4.00795 11.6202C3.9353 12.1288 4.3712 12.5647 4.87975 12.492Z"
                      stroke="#6C7275"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <p className="text-neutral-4 body-2-semi">Edit</p>
                </button>
              </div>
              <div>
                <div className=" caption-1 text-primary-1 flex flex-col gap-1">
                  <p>Sofia Havertz</p>
                  <p>(+1) 234 567 890</p>
                  <p>345 Long Island, NewYork, United States</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddressTab
