import Select from '@/components/ui/select'
import {  BriefcaseBusiness } from "lucide-react";


type ServiceOption = {
  label: string;
  value: string;
};

const services: ServiceOption[] = [
  {
    label: "Haircut & Style",
    value: "haircut-style",
  },
  {
    label: "Facial Treatment",
    value: "facial-treatment",
  },
  {
    label: "Laser Hair Removal",
    value: "laser-hair-removal",
  },
  {
    label: "Massage Therapy",
    value: "massage-therapy",
  },
  {
    label: "Manicure",
    value: "manicure",
  },
  {
    label: "Nail Coloring",
    value: "nail-coloring",
  },
];

export default function ServiceSelect() {
  return <Select data={services} icon={BriefcaseBusiness} title="Service" placeholder="Select service..."/>
}

