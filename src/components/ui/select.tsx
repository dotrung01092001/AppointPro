import { cn } from '@/lib/utils/cn'
import { useState, useRef, useEffect } from 'react'
import { type LucideIcon } from 'lucide-react'
import { ChevronDown } from "lucide-react";

type Option = {
    label: string;
    value: string;
};

export default function Select({ data, icon, title, placeholder }: { data: Option[], icon: LucideIcon, title: string, placeholder: string }) {
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<Option | null>(
        null
    );

    const Icon = icon;

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={wrapperRef} className="relative pb-4">
            <label className="font-medium">{title}</label>

            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className={cn(
                    "mt-2 flex h-12 w-full items-center justify-between rounded-md border bg-white px-4 text-sm transition",
                    open
                        ? "border-indigo-500 ring-2 ring-indigo-100"
                        : "border-gray-300 hover:border-gray-400"
                )}
            >
                <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-gray-500" />

                    <span
                        className={cn(
                            selected ? "text-gray-900" : "text-gray-400"
                        )}
                    >
                        {selected?.label || placeholder}
                    </span>
                </div>

                <ChevronDown
                    className={cn(
                        "h-5 w-5 text-gray-400 transition-transform duration-200",
                        open && "rotate-180"
                    )}
                />
            </button>

            {open && (
                <div className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg">
                    {data.map((item) => (
                        <button
                            key={item.value}
                            type="button"
                            onClick={() => {
                                setSelected(item);
                                setOpen(false);
                            }}
                            className={cn(
                                "block w-full px-4 py-3 text-left text-sm transition hover:bg-gray-50",
                                selected?.value === item.value
                                    ? "bg-indigo-50 text-indigo-600"
                                    : "text-gray-700"
                            )}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}