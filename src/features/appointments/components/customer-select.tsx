import Select from "@/components/ui/select";
import { User } from "lucide-react";

type CustomerOption = {
    label: string;
    value: string;
};

const customerOptions: CustomerOption[] = [
    {
        label: "Olivia Rhye",
        value: "olivia-rhye",
    },
    {
        label: "Phoenix Baker",
        value: "phoenix-baker",
    },
    {
        label: "Lana Steiner",
        value: "lana-steiner",
    },
    {
        label: "Demi Wilkinson",
        value: "demi-wilkinson",
    },
    {
        label: "Ari Lane",
        value: "ari-lane",
    },
    {
        label: "Candice Wu",
        value: "candice-wu",
    },
    {
        label: "Mical Craig",
        value: "mical-craig",
    },
    {
        label: "Drew Cano",
        value: "drew-cano",
    },
    {
        label: "Orlando Diggs",
        value: "orlando-diggs",
    },
];

export default function CustomerSelect() {
    return <Select data={customerOptions} icon={User} title="Customer" placeholder="Select customer..."/>
}


