export default function HeaderIcon({ title, Icon }) {
  return (
    <div className="m-nw-20 flex flex-col justify-center items-center select-none cursor-pointer hover:text-white active:text-red-400 sm:w-50">
      <Icon className="h-8" />
      <p>{title}</p>
    </div>
  );
}
