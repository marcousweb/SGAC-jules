export interface Organization {
  id: string; // UUID or similar
  name: string;
  code: string; // Unique code for the organization
  settings: Record<string, any>; // JSONB for various settings
  subscription_plan_id?: string; // Optional: Link to a subscription plan
  createdAt: Date;
  updatedAt: Date;
}
