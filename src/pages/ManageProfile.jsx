import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ManagePage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect on component mount
    navigate("/under-construction", { replace: true });
  }, [navigate]);

  return null; // nothing to show since redirect happens instantly
}

export default ManagePage;
