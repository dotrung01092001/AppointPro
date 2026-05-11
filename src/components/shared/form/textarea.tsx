import { useForm } from "react-hook-form";

interface TextAreaProps {
    title: string;
    placeholder: string;
}

export default function TextArea({ title, placeholder }: TextAreaProps) {
    const { register, watch } = useForm();

    const customerNotes = watch('customerNotes') || "";

    return (
        <div>
            <label className="font-medium pb-2 block">{title}</label>
            <div className='relative'>
                <textarea placeholder={placeholder} className="w-full outline-none border border-gray-300 resize-none min-h-20 px-4 py-2" maxLength={500} {...register('customerNotes')} />
                <span className='absolute right-1 bottom-2'>{customerNotes.length} / 500</span>
            </div>
        </div>
    )
}