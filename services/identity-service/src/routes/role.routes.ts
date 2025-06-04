import { PermissionsObject } from '../../../../common/models/permissions.types';
import { Role } from '../../../../common/models/role.model';
import { UserRole } from '../../../../common/models/user-role.model';

// --- DTOs for Role Management (CRUD) ---
export interface CreateRoleRequest {
  name: string;
  description?: string;
  default_permissions: PermissionsObject; // Use the structured permissions type
  scope: 'system' | 'organization' | 'district' | 'institution';
  is_customizable?: boolean;
  base_role_id?: string; // For creating a role based on an existing one
  // If scope is 'organization', this is required.
  // If scope is 'district' or 'institution', roles are typically customized from an org or system role,
  // or created within that org's context.
  organization_id?: string;
}

export interface CreateRoleResponse extends Role {} // Return the full role object

export interface UpdateRoleRequest {
  // id is usually part of the route parameter e.g. /roles/:roleId
  name?: string;
  description?: string;
  default_permissions?: PermissionsObject;
  is_customizable?: boolean;
  // Scope and base_role_id are typically not updatable directly to avoid complex cascading changes.
  // organization_id is also usually fixed.
}

export interface UpdateRoleResponse extends Role {}

export interface GetRoleResponse extends Role {}

export interface ListRolesQuery {
  scope?: 'system' | 'organization' | 'district' | 'institution';
  organization_id?: string; // Filter by organization
  is_customizable?: boolean;
  // Add other relevant query parameters like name_contains, etc.
}

export interface ListRolesResponse {
  roles: Role[];
  total: number;
}

// --- DTOs for UserRole Assignment ---
export interface AssignRoleToUserRequest {
  user_id: string;
  role_id: string;
  organization_id: string; // Explicit context for the assignment
  district_id?: string;
  institution_id?: string;
  // Optional: specific permission overrides for this user in this role assignment
  permissions_override?: PermissionsObject;
}

export interface AssignRoleToUserResponse extends UserRole {}

export interface UpdateUserRoleAssignmentRequest {
  // user_role_id is usually part of the route parameter
  permissions_override?: PermissionsObject;
}

export interface UpdateUserRoleAssignmentResponse extends UserRole {}

export interface GetUserRolesRequest {
  user_id: string;
  organization_id?: string;
  district_id?: string;
  institution_id?: string;
}

export interface GetUserRolesResponse {
  user_roles: UserRole[];
}


// --- DTOs/Concepts for Permission Checking ---
// This is more conceptual as actual checking happens server-side in middleware or service logic.

export interface CheckPermissionRequest {
  user_id: string; // Or implicitly from authenticated session
  organization_id?: string; // Context for the permission check
  district_id?: string;
  institution_id?: string;
  module: string; // e.g., 'academic'
  resource: string; // e.g., 'students' or 'grades.math'
  action: string; // e.g., 'create', 'read', 'edit_own'
}

export interface CheckPermissionResponse {
  has_permission: boolean;
  // Optionally, the resolved permissions that led to this decision
  // resolved_permissions?: PermissionsObject;
}

/*
Placeholder for route definitions (using Express.js style for illustration)

// Role CRUD
router.post('/roles', (req: CreateRoleRequest, res: CreateRoleResponse) => { ... });
router.get('/roles', (req: ListRolesRequest, res: ListRolesResponse) => { ... });
router.get('/roles/:roleId', (req, res: GetRoleResponse) => { ... });
router.put('/roles/:roleId', (req: UpdateRoleRequest, res: UpdateRoleResponse) => { ... });
router.delete('/roles/:roleId', (req, res) => { ... }); // Soft delete usually

// UserRole Assignment
router.post('/user-roles', (req: AssignRoleToUserRequest, res: AssignRoleToUserResponse) => { ... });
router.get('/user-roles', (req: GetUserRolesRequest, res: GetUserRolesResponse) => { ... }); // Get roles for a user, or users for a role
router.put('/user-roles/:userRoleId', (req: UpdateUserRoleAssignmentRequest, res: UpdateUserRoleAssignmentResponse) => { ... });
router.delete('/user-roles/:userRoleId', (req, res) => { ... });

// Permission Checking (Conceptual - likely not a direct API endpoint for every check, but illustrates needs)
// More often, this logic is embedded in middleware or service methods.
// router.post('/permissions/check', (req: CheckPermissionRequest, res: CheckPermissionResponse) => { ... });
*/
