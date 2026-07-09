import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { useState } from "react";
import { MailOpen } from "lucide-react";


export default function NotificationsPanel() {
    const [isAll, setIsAll] = useState(true)
    const [isUnread, setIsUnread] = useState(false)

    const handleAllButton = () => {
        setIsAll(true)
        setIsUnread(false)
    }

    const handleUnreadButton = () => {
        setIsAll(false)
        setIsUnread(true)
    }

    return (
        <div className="flex justify-between border-b border-[#E5E7EB] pb-2">
            <div className="flex gap-2">
                <Button onClick={handleAllButton} className={cn("w-30  py-1  cursor-pointer", isAll ? 'border text-[#4F46E5] bg-[#f0f0fa]' : '')}>All</Button>
                <Button onClick={handleUnreadButton} className={cn("w-30  py-1  cursor-pointer", isUnread ? 'border text-[#4F46E5] bg-[#f0f0fa]' : '')}>Unread</Button>
            </div>
            <Button className='px-4 py-1 border cursor-pointer border-[#E5E7EB]'>
                <MailOpen /> Mark all as read
            </Button>
        </div>
    )
}