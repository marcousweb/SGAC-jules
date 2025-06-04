import { GeneralInstitutionSettings } from './institution-settings.types'; // New import

export interface InstitutionModuleSetting {
  module_code: string; // Links to Module.code
  // Specific settings for this module in this institution,
  // should conform to the Module.settings_schema
  settings: Record<string, any>;
  is_active: boolean; // Overrides the default activation
}

export interface Institution {
  id: string; // UUID or similar
  organization_id: string; // Foreign key to Organization
  district_id?: string; // Optional: Foreign key to District
  name: string;
  code: string; // Unique code for the institution
  domain?: string; // Custom domain
  timezone: string;
  logo_url?: string;
  primary_color?: string;
  secondary_color?: string;
  // General institution settings, not module-specific
  general_settings: GeneralInstitutionSettings; // USE THE NEW TYPE
  // Stores the list of modules active for this institution and their specific settings
  // This replaces the old 'active_modules' and 'settings' fields for better organization.
  // The 'active_modules' array can be derived from this if needed,
  // or a specific field 'activated_module_codes: string[]' can be maintained.
  module_configurations: InstitutionModuleSetting[];
  createdAt: Date;
  updatedAt: Date;
}

// It might also be beneficial to have a helper to get active module codes:
// export function getActiveModuleCodes(institution: Institution): string[] {
//   return institution.module_configurations
//     .filter(m => m.is_active)
//     .map(m => m.module_code);
// }
