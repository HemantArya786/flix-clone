import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MyListPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // redirect to Coming Soon page when user visits this page
    navigate("/coming-soon");
  }, [navigate]);

  return null; // nothing renders since we redirect immediately
}

export default MyListPage;
