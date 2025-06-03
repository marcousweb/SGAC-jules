export interface Role {
  id: string; // UUID or similar
  name: string; // e.g., 'admin', 'teacher', 'student' - could be codes
  description?: string;
  // default_permissions could be a direct JSON object or a reference to a more complex permission system
  default_permissions: Record<string, any>; // JSONB for default permissions associated with this role template
  // Scope can be 'organization', 'district', 'institution', or 'system'
  scope: 'system' | 'organization' | 'district' | 'institution';
  is_system_role?: boolean; // True for superadmin, etc.
  createdAt: Date;
  updatedAt: Date;
}
