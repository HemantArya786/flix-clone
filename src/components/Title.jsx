import { useEffect } from "react";

export default function Title({ text }) {
  useEffect(() => {
    document.title = text || "Netflix" ;
  }, [text]);

  return null; // This component doesn't render anything
}
