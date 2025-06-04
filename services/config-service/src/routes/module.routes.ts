// Placeholder for module management routes within the Config Service
// These routes are typically for SuperAdmins or high-level Organization Admins.

import { Module, ModuleSettingField } from '../../../../common/models/module.model'; // Adjust path as needed
import { InstitutionModuleSetting } from '../../../../common/models/institution.model'; // Adjust path as needed

// --- DTOs for Listing Available Modules ---
export interface ListAvailableModulesResponse {
  modules: Array<Omit<Module, 'settings_schema'>>; // Send basic module info, schema might be heavy
}

// --- DTOs for Getting Module Details (including settings schema) ---
export interface GetModuleDetailsRequest {
  module_code: string;
}
export interface GetModuleDetailsResponse extends Module {}


// --- DTOs for Managing Modules for an Institution ---
export interface GetInstitutionModuleConfigurationRequest {
  organization_id: string;
  institution_id: string;
  module_code: string;
}

export interface GetInstitutionModuleConfigurationResponse extends InstitutionModuleSetting {}

export interface UpdateInstitutionModuleConfigurationRequest {
  organization_id: string;
  institution_id: string;
  module_code: string;
  is_active?: boolean;
  settings?: Record<string, any>; // Settings specific to this module for this institution
}

export interface UpdateInstitutionModuleConfigurationResponse {
  institution_id: string;
  module_code: string;
  is_active: boolean;
  settings: Record<string, any>;
  message: string;
}

// --- DTOs for SuperAdmin to manage system-wide module definitions (CRUD on Module entities) ---
// These would typically be separate from institution-specific activation/configuration.
// For now, we focus on activation/configuration per institution.

// Placeholder for route definitions (using Express.js style for illustration)
/*
Example routes:

// List all available modules in the system
router.get('/system/modules', (req, res: ListAvailableModulesResponse) => { ... });

// Get details of a specific module (including its settings_schema)
router.get('/system/modules/:module_code', (req: GetModuleDetailsRequest, res: GetModuleDetailsResponse) => { ... });

// Get a specific module's configuration for an institution
router.get('/organizations/:org_id/institutions/:inst_id/modules/:module_code', (req: GetInstitutionModuleConfigurationRequest, res: GetInstitutionModuleConfigurationResponse) => { ... });

// Update (activate/deactivate/configure) a module for an institution
router.put('/organizations/:org_id/institutions/:inst_id/modules/:module_code', (req: UpdateInstitutionModuleConfigurationRequest, res: UpdateInstitutionModuleConfigurationResponse) => { ... });

// Get all module configurations for an institution
router.get('/organizations/:org_id/institutions/:inst_id/modules', (req, res: { configurations: InstitutionModuleSetting[] }) => { ... });

*/
