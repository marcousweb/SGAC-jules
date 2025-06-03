export interface Institution {
  id: string; // UUID or similar
  organization_id: string; // Foreign key to Organization
  district_id?: string; // Optional: Foreign key to District
  name: string;
  code: string; // Unique code for the institution
  domain?: string; // Custom domain
  timezone: string;
  logo_url?: string;
  primary_color?: string;
  secondary_color?: string;
  settings: Record<string, any>; // JSONB for various settings
  active_modules: string[]; // Array of active module codes/IDs
  createdAt: Date;
  updatedAt: Date;
}
