type Player = "❌" | "🟢" | null;
function Square({
  value,
  onClick,
  winner,
}: {
  winner: Player;
  value: Player;
  onClick: () => void;
}) {
  if (!value) {
    return <button disabled={Boolean(winner)} />;
  }
  return <button>This is a square</button>;
}

export default Square;
