export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  PENDING_VERIFICATION = 'pending_verification',
}

export interface User {
  id: string; // UUID or similar
  email: string; // Unique email
  password_hash: string;
  first_name?: string;
  last_name?: string;
  status: UserStatus;
  last_login?: Date;
  language: string; // e.g., 'es', 'en'
  settings: Record<string, any>; // JSONB for user-specific preferences
  createdAt: Date;
  updatedAt: Date;
}
