/**
 * Defines the structure for permissions.
 * Permissions can be simple boolean flags, or a list of allowed actions (CRUD, etc.).
 * The structure is hierarchical: module -> submodule/resource -> actions or boolean.
 *
 * Example:
 * {
 *   "system": {
 *     "manage_users": true,
 *     "access_audit_log": true
 *   },
 *   "academic": { // Module code
 *     "students": ["create", "read", "update", "delete"], // Actions on students resource
 *     "grades": { // Sub-module or more specific resource
 *        "math": ["read", "edit_own"],
 *        "history": ["read"]
 *     },
 *     "courses": true, // Equivalent to all actions or a general access flag
 *     "reports": {
 *        "view_transcripts": true,
 *        "generate_enrollment_reports": true
 *     }
 *   },
 *   "crm": {
 *     "leads": ["create", "read", "update"],
 *     "campaigns": true
 *   },
 *   "*" : ["read"] // Wildcard: applies to all modules/resources if not specifically overridden
 * }
 *
 * Actions can be predefined strings (e.g., 'create', 'read', 'update', 'delete', 'approve', 'manage')
 * or true/false for general access.
 */
export type PermissionAction = string; // e.g., 'create', 'read', 'update', 'delete', 'manage', 'all'
export type PermissionFlag = boolean;

export interface ResourcePermissions {
  [subResourceOrAction: string]: PermissionAction[] | PermissionFlag | ResourcePermissions;
}

export interface ModulePermissions {
  [moduleCodeOrResource: string]: ResourcePermissions | PermissionAction[] | PermissionFlag;
}

// This will be the type for `default_permissions` in Role and `permissions` in UserRole
export type PermissionsObject = ModulePermissions;

// Helper type for more specific action lists if needed for certain resources
// export type CrudActions = "create" | "read" | "update" | "delete";
