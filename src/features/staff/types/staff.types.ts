

export type StaffTableItem = {
    id: string;
    name: string;
    role: string;
    phone: string;
    email: string;
    status: 'ACTIVE' | 'INACTIVE';
    avatar: string;
}