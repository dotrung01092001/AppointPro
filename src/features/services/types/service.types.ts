export type ServiceTableItem = {
    id: string;
    name: string;
    category: string;
    duration: number;
    price: number;
    status: 'ACTIVE' | 'INACTIVE' | 'DRAFT'
}