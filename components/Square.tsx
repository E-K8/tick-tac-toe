type Player = "❌" | "🟢" | null;
function Square({
  value,
  onClick,
  winner,
}: {
  winner: Player;
  value: Player;
  // void ↓ means that the function doesn't return anything
  onClick: () => void;
}) {
  if (!value) {
    return <button className="square" disabled={Boolean(winner)} />;
  }
  return (
    <button className={`square square_${value.toLocaleLowerCase}`} disabled>
      {value}
    </button>
  );
}

export default Square;
