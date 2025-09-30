import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HelpCenter() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect on component mount
    navigate("/under-construction", { replace: true });
  }, [navigate]);

  return null; // nothing to show since redirect happens instantly
}

export default HelpCenter;

