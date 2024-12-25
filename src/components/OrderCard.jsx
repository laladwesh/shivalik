import React from 'react'

const OrderCard = ({service , id , date}) => {
  return (
    <div class="h-[184px] flex-col justify-start items-end mt-10 gap-8 inline-flex">
    <div class="self-stretch justify-between items-center inline-flex">
        <div class="flex-col justify-center items-start gap-4 inline-flex">
            <div class="text-[#3d3d3d] text-2xl font-bold font-['Montserrat'] leading-normal">{service}</div>
            <div class="text-[#3d3d3d] text-base font-semibold font-['Montserrat'] leading-none">Order ID: {id}</div>
        </div>
        <div class="text-[#3d3d3d] text-base font-bold font-['Montserrat'] leading-none">{date}</div>
    </div>
    <div class="px-12 py-6 rounded-3xl border-2 hover:bg-secondary cursor-pointer border-[#5230b2] justify-center items-center gap-2 inline-flex">
        <div class="justify-start items-center  gap-4 flex">
            <div class="text-[#5230b2]  text-base font-semibold font-['Montserrat'] leading-none">Download invoice</div>
        </div>
    </div>
    <div class="self-stretch h-[0px] border border-[#3d3d3d]"></div>
</div>
  )
}

export default OrderCard