import type { CurrentUser } from "../../app/store/auth-store";

export default function ProfileSidebar({ user }: { user: CurrentUser }) {
    return (
        <div className="flex items-center gap-3 p-4">
            <img src={user.avatarUrl} className='w-10 rounded-full' />
            <div className='flex flex-col'>
                <h2 className='text-lg font-semibold text-[#111827]'>{user.fullName}</h2>
                <p className='text-sm text-[#6B7280]'>{user.role}</p>
            </div>
        </div>
    )
}