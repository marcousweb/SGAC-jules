import { PermissionsObject } from './permissions.types';

export interface Role {
  id: string; // UUID or similar
  name: string; // e.g., 'admin', 'teacher', 'student' - could be codes
  description?: string;
  default_permissions: PermissionsObject; // Structured permissions
  scope: 'system' | 'organization' | 'district' | 'institution';
  is_system_role?: boolean; // True for superadmin, etc.
  // Indicates if this role can be customized at lower levels (e.g., an org admin creating institution-specific versions of a role)
  is_customizable?: boolean;
  // If this role is a customization of a base role
  base_role_id?: string; // Foreign key to another Role (self-referential)
  organization_id?: string; // If this role is specific to an organization (and customizable within it)
  createdAt: Date;
  updatedAt: Date;
}
