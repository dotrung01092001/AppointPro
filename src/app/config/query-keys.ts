export const queryKeys = {
  auth: {
    all: ["auth"] as const,
    me: ["auth", "me"] as const,
  },

  dashboard: {
    all: ["dashboard"] as const,
    summary: ["dashboard", "summary"] as const,
  },

  appointments: {
    all: ["appointments"] as const,
    list: (params?: Record<string, unknown>) =>
      ["appointments", "list", params] as const,
    detail: (id: string) => ["appointments", "detail", id] as const,
    activity: (id: string) => ["appointments", "activity", id] as const,
  },

  calendar: {
    all: ["calendar"] as const,
    event: (id: string) => ["calendar", "event", id] as const,
    availability: (params?: Record<string, unknown>) =>
      ["calendar", "availability", params] as const,
  },

  customers: {
    all: ["customers"] as const,
    list: (params?: Record<string, unknown>) =>
      ["customers", "list", params] as const,
    detail: (id: string) => ["customers", "detail", id] as const,
    appointments: (id: string, params?: Record<string, unknown>) =>
      ["customers", "appointments", id, params] as const,
  },

  staff: {
    all: ["staff"] as const,
    list: (params?: Record<string, unknown>) =>
      ["staff", "list", params] as const,
    detail: (id: string) => ["staff", "detail", id] as const,
    workingHours: (id: string) => ["staff", "workingHours", id] as const,
    timeOff: (id: string, params?: Record<string, unknown>) =>
      ["staff", "timeOff", id, params] as const,
    services: (id: string) => ["staff", "services", id] as const,
  },

  services: {
    all: ["services"] as const,
    list: (params?: Record<string, unknown>) =>
      ["services", "list", params] as const,
    detail: (id: string) => ["services", "detail", id] as const,
    categories: ["services", "categories"] as const,
  },

  users: {
    all: ["users"] as const,
    list: (params?: Record<string, unknown>) =>
      ["users", "list", params] as const,
    detail: (id: string) => ["users", "detail", id] as const,
  },

  notifications: {
    all: ["notifications"] as const,
    list: (params?: Record<string, unknown>) =>
      ["notifications", "list", params] as const,
    unreadCount: ["notifications", "unreadCount"] as const,
  },

  settings: {
    all: ["settings"] as const,
    bussiness: ["settings", "bussiness"] as const,
  },
};
