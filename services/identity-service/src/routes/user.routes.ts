// Placeholder for user management routes (CRUD operations on users)

export interface GetUserResponse {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  status: string; // Should map to UserStatus enum
  language: string;
  last_login?: Date;
  created_at: Date;
  // Add roles or other relevant info
}

// Placeholder for route definitions
// e.g., router.get('/:userId', ...);
// e.g., router.put('/:userId', ...);
