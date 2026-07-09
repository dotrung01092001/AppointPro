

export default function CustomerInput({ title, type, placeholder }: { title: string, type: string, placeholder: string }) {
    return (
        <div className='pb-4'>
            <label className='font-medium'>{title}</label>
            <input type={type} className='mt-2 flex h-12 w-full items-center justify-between rounded-md border bg-white px-4 text-sm transition border-gray-300 hover:border-gray-400 focus:border-indigo-500 ring-1 ring-indigo-100 focus:outline-none ' placeholder={placeholder}/>
        </div>
    )
}