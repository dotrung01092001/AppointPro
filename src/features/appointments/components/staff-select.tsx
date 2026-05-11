import { ContactRound } from 'lucide-react'
import Select from '@/components/ui/select'

export type StaffOption = {
    label: string;
    value: string;
};

const staffOptions: StaffOption[] = [
    {
        label: "Dianne Russell",
        value: "dianne-russell",
    },
    {
        label: "Albert Flores",
        value: "albert-flores",
    },
    {
        label: "Mical Craig",
        value: "mical-craig",
    },
    {
        label: "Cody Press",
        value: "cody-press",
    },
    {
        label: "Jenny Wilson",
        value: "jenny-wilson",
    },
    {
        label: "Wade Warren",
        value: "wade-warren",
    },
];

export default function StaffSelect() {
    return <Select data={staffOptions} icon={ContactRound} title="Staff" placeholder="Select staff..."/>
}