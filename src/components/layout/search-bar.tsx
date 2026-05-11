import { Search } from "lucide-react";

export default function SearchBar() {
    return (
        <div className="relative w-100">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

            <input
                type="text"
                placeholder="Search appointments..."
                className="h-12 w-full rounded-lg border border-gray-200 bg-white pl-12 pr-4 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
        </div>
    );
}