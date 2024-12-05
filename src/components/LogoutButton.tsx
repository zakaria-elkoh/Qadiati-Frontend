// src/components/LogoutButton.tsx or wherever you handle logout
import { signOut } from "aws-amplify/auth";
import { useDispatch } from "react-redux";
import { logout } from "@/store/slices/authSlice";

const handleLogout = async () => {
  try {
    await signOut();
    dispatch(logout());
  } catch (error) {
    console.error("Error signing out:", error);
  }
};
