import "./styles/ActiveStatus.css";
import { useEffect, useState } from "react";

interface StatusProps {
  status: string;
}

export default function Status({ status }: StatusProps) {
  const [className, setClassName] = useState("");
  useEffect(() => {
    if (status === "Active") setClassName("active");
    if (status === "Pending") setClassName("pending");
    if (status === "Inactive") setClassName("inactive");
    if (status === "Blacklisted")
      setClassName("blacklisted");
  });

  return (
    <div className={`${className} status`}>{status}</div>
  );
}
