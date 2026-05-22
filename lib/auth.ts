const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL || 'admin@travelcompanion.com';
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';
const SESSION_KEY = 'travelCompanion_admin_session';

export const isAdminEmail = (email: string | null | undefined): boolean => {
  return email?.toLowerCase() === ADMIN_EMAIL.toLowerCase();
};

export const checkAdminAuth = async (): Promise<boolean> => {
  try {
    return localStorage.getItem(SESSION_KEY) === 'true';
  } catch {
    return false;
  }
};

export const signInAdmin = async (
  email: string,
  password: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    if (!isAdminEmail(email)) {
      return {
        success: false,
        error: 'Access denied. Only authorized administrators can access this system.',
      };
    }

    if (password !== ADMIN_PASSWORD) {
      return {
        success: false,
        error: 'Invalid credentials',
      };
    }

    localStorage.setItem(SESSION_KEY, 'true');
    return { success: true };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'An error occurred during login';
    return {
      success: false,
      error: message,
    };
  }
};

export const signOutAdmin = async (): Promise<void> => {
  localStorage.removeItem(SESSION_KEY);
};
