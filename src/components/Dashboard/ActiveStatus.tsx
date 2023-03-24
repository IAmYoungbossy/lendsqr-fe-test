interface ActiveStatusProps {
  color: string;
  status: string;
  bgColor: string;
}

export default function ActiveStatus({
  color,
  status,
  bgColor,
}: ActiveStatusProps) {
  return <div className="active-status">{status}</div>;
}
