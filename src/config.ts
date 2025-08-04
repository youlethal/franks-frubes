export interface BrandingConfig {
  businessName: string;
  logoUrl?: string;
  primaryColor: string;
  accentColor: string;
  fontFamily: string;
}

export interface TemplateConfig {
  branding: BrandingConfig;
  modules: string[];
  darkMode?: boolean;
}

// Default configuration - this will be overridden by client-specific settings
export const defaultConfig: TemplateConfig = {
  branding: {
    businessName: "Franks Frubes",
    logoUrl: "",
    primaryColor: "#6366f1",
    accentColor: "#6366f1",
    fontFamily: "Inter, sans-serif"
  },
  modules: ["gallery","booking"],
  darkMode: false
};

// Function to update configuration with client-specific settings
export function updateConfig(newConfig: Partial<TemplateConfig>): TemplateConfig {
  return {
    ...defaultConfig,
    ...newConfig,
    branding: {
      ...defaultConfig.branding,
      ...newConfig.branding
    }
  };
}

// Function to apply branding to CSS variables
export function applyBranding(branding: BrandingConfig) {
  const root = document.documentElement;
  root.style.setProperty('--primary-color', branding.primaryColor);
  root.style.setProperty('--accent-color', branding.accentColor);
  root.style.setProperty('--font-family', branding.fontFamily);
} 