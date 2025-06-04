export interface ModuleSettingField {
  key: string;
  type: 'string' | 'number' | 'boolean' | 'select' | 'multiselect';
  label: string;
  description?: string;
  options?: Array<{ value: string; label: string }>; // For select/multiselect
  defaultValue?: any;
  required?: boolean;
}

export interface Module {
  id: string; // UUID or similar unique identifier for the module entry
  code: string; // A unique, machine-readable code for the module (e.g., 'academic', 'crm')
  name: string; // Human-readable name of the module
  description?: string;
  version: string; // Version of the module (e.g., '1.0.0')
  // Defines the structure of settings this module requires/allows an institution to configure.
  // This could be a JSON schema or a more simplified structure.
  settings_schema?: ModuleSettingField[];
  // Icon or other UI related properties for the module
  icon?: string;
  // Default state for new institutions (can be overridden by superadmin)
  default_active_for_new_institutions?: boolean;
  // Dependencies on other module codes
  dependencies?: string[];
  createdAt: Date;
  updatedAt: Date;
}
