// Defines common structures for institution-wide personalization settings.

export interface AcademicYear {
  id: string;
  name: string; // e.g., "2023-2024"
  start_date: string; // ISO Date string
  end_date: string; // ISO Date string
  is_current: boolean;
}

export interface GradingScaleValue {
  grade: string; // e.g., "A+", "A", "B" or "10", "9.5"
  numeric_equivalent?: number; // e.g., 4.0, 3.7
  description?: string; // e.g., "Excellent", "Good"
  pass_fail_status?: 'pass' | 'fail';
}

export interface GradingScale {
  id: string;
  name: string; // e.g., "Standard Letter Grades", "Percentage Scale"
  values: GradingScaleValue[];
  default_passing_grade_value?: string; // references one of GradingScaleValue.grade
}

export interface ReportTemplate {
  id: string;
  name: string; // e.g., "Official Transcript", "Enrollment Certificate"
  template_url_or_definition: string; // Could be a path to a template file or a direct template string
  type: 'pdf' | 'email' | 'document';
}

// This interface will be used for the `general_settings` field in the Institution model
export interface GeneralInstitutionSettings {
  academic_years?: AcademicYear[];
  default_academic_year_id?: string; // ID of the current/default academic year

  grading_scales?: GradingScale[];
  default_grading_scale_id?: string; // ID of the default grading scale

  report_templates?: ReportTemplate[]; // General templates, module-specific ones might be in module settings

  // Admission settings might be general or part of a CRM/Admissions module.
  // If general, they could be here.
  admission_configuration?: {
    application_opens_date?: string; // ISO Date string
    application_closes_date?: string; // ISO Date string
    max_applicants_per_course?: number;
    // other general admission params
  };

  // Default communication preferences, can be overridden by user/module
  communication_preferences?: {
    default_email_sender?: string;
    default_sms_sender?: string;
  };

  // Other institution-wide settings
  [key: string]: any; // Allows for other ad-hoc settings
}
