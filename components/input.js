export default function Input({title}) {
  return (
    <div className="flex flex-col my-2">
      <p>{title}:</p>
      <input className="bg-input p-2 max-w-xs" type="text "/>
    </div>
    )
}