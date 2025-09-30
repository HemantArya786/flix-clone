import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function KidsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect on component mount
    navigate("/coming-soon", { replace: true });
  }, [navigate]);

  return null; // nothing to show since redirect happens instantly
}

export default KidsPage;
