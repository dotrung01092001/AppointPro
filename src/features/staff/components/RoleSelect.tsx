import Select from "@/components/ui/select";

interface ServiceOption {
    label: string;
    value: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const serviceOptions: ServiceOption[] = [
    {
        label: "Haircut & Style",
        value: "haircut-style",
    },
    {
        label: "Hair Coloring",
        value: "hair-coloring",
    },
    {
        label: "Hair Treatment",
        value: "hair-treatment",
    },
    {
        label: "Manicure",
        value: "manicure",
    },
    {
        label: "Pedicure",
        value: "pedicure",
    },
    {
        label: "Facial Treatment",
        value: "facial-treatment",
    },
    {
        label: "Acne Treatment",
        value: "acne-treatment",
    },
    {
        label: "Swedish Massage",
        value: "swedish-massage",
    },
    {
        label: "Deep Tissue Massage",
        value: "deep-tissue-massage",
    },
    {
        label: "Hot Stone Massage",
        value: "hot-stone-massage",
    },
    {
        label: "Body Scrub",
        value: "body-scrub",
    },
    {
        label: "Waxing",
        value: "waxing",
    },
];

export default function RoleSelect() {

    return (
        <Select data={serviceOptions} title="Role" placeholder="Select role..."/>
    )
}