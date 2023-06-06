import useSupabase from "@/composables/UseSupabase";
import { ref } from "vue";

const user = ref(null);

export default function useAuthUser() {
  const { supabase } = useSupabase();

  const login = async ({ username, password }) => {
    const { user, error } = await supabase.auth.signIn({ username, password });
    if (error) throw error;
    return user;
  };

  const loginWithSocialProvider = async (provider) => {
    const { user, error } = await supabase.auth.signIn({ provider });
    if (error) throw error;
    return user;
  };

  const logout = async () => {
    const { error } = supabase.auth.signOut();
    if (error) throw error;
  };

  const isLoggedIn = () => {
    return !!user.value;
  };

  const register = async ({ name, password }) => {
    const { user, error } = await supabase.auth.signUp(
      { email: '', password },
      {
        data: { name },
        redirectTo: `${window.location.origin}/me?fromEmail=registrationConfirmation`,
      }
    );
    if (error) throw error;
    return user;
  };

  const update = async (data) => {
    const { user, error } = await supabase.auth.update(data);
    if (error) throw error;
    return user;
  };

  const sendPasswordResetEmail = async (email) => {
    const { user, error } = await supabase.auth.api.resetPasswordForEmail(email);
    if (error) throw error;
    return user;
  };

  const maybeHandleEmailConfirmation = async (route) => {
    // Implementation for handling email confirmation if needed
  };

  return {
    user,
    login,
    loginWithSocialProvider,
    logout,
    isLoggedIn,
    register,
    update,
    sendPasswordResetEmail,
    maybeHandleEmailConfirmation,
  };
}
