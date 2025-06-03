export interface District {
  id: string; // UUID or similar
  organization_id: string; // Foreign key to Organization
  name: string;
  code: string; // Unique code for the district within the organization
  settings: Record<string, any>; // JSONB for various settings
  createdAt: Date;
  updatedAt: Date;
}
