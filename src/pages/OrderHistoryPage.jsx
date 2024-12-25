import React from 'react'
import OrderCard from '../components/OrderCard'

const OrderHistoryPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-28 bg-gray-100 font-montserrat ">
      <div className="w-full p-6 md:p-10 lg:p-14 bg-white rounded-[32px] shadow-md flex flex-col gap-14">
      <div className="flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-6">
            <h1 className="text-[#1a0066] text-3xl md:text-4xl font-bold leading-10">
              Order History
            </h1>
            <hr className="border-t-2 border-primary my-4" />
            <OrderCard service="Service name" id="12345679021" date="29/04/2023" />
            <OrderCard service="Service name" id="12345679021" date="29/04/2023" />
            <OrderCard service="Service name" id="12345679021" date="29/04/2023" />
            </div>
            </div>
        </div>
      </div>
  )
}

export default OrderHistoryPage