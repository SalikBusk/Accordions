import React, { useRef } from 'react'

interface AccordionsItemProps {
    item: {
        id: number,
        title: string,
        content: string,
    };
    active: number | null;
    handleToggle: (id: number) => void,
}

const AccordionsItem: React.FC<AccordionsItemProps> = ({item, active, handleToggle}: AccordionsItemProps) => {
    const contentEl = useRef<HTMLDivElement | null>(null);
  return (
    <div className={`p-[1rem] border-[1px] border-[#6d6c6d] transition ease-in-out duration-700 ${active === item.id ? "rounded-xl" : "rounded-full"}`}>
        <div>
            <h2 onClick={() => handleToggle(item.id)} className="text-[1.25rem] font-[400] text-[##222] flex justify-between cursor-pointer" >
                {item.title} <span className='text-[#8b8b8b]'>{item.id === active ? "-" : "+"}</span>
            </h2>
        </div>
        <div 
            ref={contentEl}
            className={`bg-[#8b8b8b] h-0 overflow-hidden transition ease-in-out duration-700 ${active === item.id ? "h-auto mt-[1rem]" : ""}`}
            style={
                active === item.id
                ? {height: contentEl?.current?.scrollHeight}
                : {height: "0px"}
            }
        >
            <p>{item.content}</p>
        </div>
    </div>
  )
}

export default AccordionsItem