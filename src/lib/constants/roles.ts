export const USER_ROLES = ['ADMIN', 'RECEPTIONIST', 'STAFF'] as const;

export type UserRole = typeof USER_ROLES[number];

export const ROLE_LABELS: Record<UserRole, string> = {
  ADMIN: 'Admin',
  RECEPTIONIST: 'Receptionist',
  STAFF: 'Staff',
};