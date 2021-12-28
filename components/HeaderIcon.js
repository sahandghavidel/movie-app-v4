export default function HeaderIcon({ title, Icon }) {
  return (
    <div>
      <Icon className="h-8" />
      <p>{title}</p>
    </div>
  );
}
