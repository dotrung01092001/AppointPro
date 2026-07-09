import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils/cn";

const SERVICE_STATUS_COLORS: Record<string, string>= {
    ACTIVE: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    INACTIVE: "bg-slate-500/15 text-slate-400 border-slate-500/30",
}

const SERVICE_STATUS_LABELS: Record<string, string> = {
    ACTIVE: "Active",
    INACTIVE: "Inactive",
}

export function ServiceStatusBadge({status} : {status: string}) {
    return (
        <Badge
            className={cn(``, SERVICE_STATUS_COLORS[status])}
        >
            {SERVICE_STATUS_LABELS[status]}
        </Badge>
    )
}