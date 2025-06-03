// Placeholder for role management routes (CRUD operations on roles)
// Placeholder for role assignment/revocation routes

export interface CreateRoleRequest {
  name: string;
  description?: string;
  default_permissions: Record<string, any>;
  scope: 'system' | 'organization' | 'district' | 'institution';
}

export interface CreateRoleResponse {
  id: string;
  name: string;
}

export interface AssignRoleRequest {
  user_id: string;
  role_id: string;
  organization_id: string;
  district_id?: string;
  institution_id?: string;
  permissions?: Record<string, any>; // Optional: override or extend default role permissions
}

export interface AssignRoleResponse {
  user_role_id: string;
  message: string;
}

// Placeholder for route definitions
// e.g., router.post('/', ...); // Create role
// e.g., router.get('/:roleId', ...); // Get role
// e.g., router.post('/assign', ...); // Assign role to user
