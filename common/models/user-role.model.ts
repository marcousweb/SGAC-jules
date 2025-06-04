import { PermissionsObject } from './permissions.types';

// Represents the assignment of a role to a user within a specific context (org, district, or institution)
export interface UserRole {
  id: string; // UUID or similar
  user_id: string; // Foreign key to User
  role_id: string; // Foreign key to Role
  organization_id: string; // Context: At least organization is required
  district_id?: string; // Optional context: For district-level roles
  institution_id?: string; // Optional context: For institution-level roles
  // Specific permissions for this user in this role,
  // This structure will be merged with the Role's default_permissions.
  // For example, UserRole permissions can override or add to Role permissions.
  permissions_override?: PermissionsObject; // Structured permissions override or extension
  createdAt: Date;
  updatedAt: Date;
}
