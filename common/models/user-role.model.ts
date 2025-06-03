// Represents the assignment of a role to a user within a specific context (org, district, or institution)
export interface UserRole {
  id: string; // UUID or similar
  user_id: string; // Foreign key to User
  role_id: string; // Foreign key to Role
  organization_id: string; // Context: At least organization is required
  district_id?: string; // Optional context: For district-level roles
  institution_id?: string; // Optional context: For institution-level roles
  // Specific permissions for this user in this role, can override or extend role.default_permissions
  // This allows for fine-grained control.
  permissions: Record<string, any>; // JSONB
  createdAt: Date;
  updatedAt: Date;
}
