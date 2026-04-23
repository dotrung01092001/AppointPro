import { Settings } from 'lucide-react';

export default function SettingButton() {
    return (
        <button className='relative cursor-pointer'>
            <Settings className='h-6 w-6 text-gray-500' />
            <span className='absolute top-0 right-0 inline-flex items-center justify-center w-2 h-2 text-xs font-bold leading-none text-white bg-red-500 rounded-full'>
            </span>
        </button>
    )
}