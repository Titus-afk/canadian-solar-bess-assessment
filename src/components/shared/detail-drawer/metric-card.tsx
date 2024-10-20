interface MetricCardProps {
  label: string;
  value: string;
}

const MetricCard = ({ label, value }: MetricCardProps) => {
  return (
    <div>
      <span className="text-gray-500 text-sm">{label}</span>
      <h5 className="text-lg font-bold">{value}</h5>
    </div>
  );
};

export default MetricCard;
