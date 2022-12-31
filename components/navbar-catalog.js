export default function Catalog({ name }) {
  return (
    <li className="catalog-parent">
      <button className="flex flex-col justify-center h-full px-4">
        <p className="text-white font-montserrat text-sm font-medium">{name.toUpperCase()}</p>
        <div className="flex w-full flex-row justify-center">
          <hr className="line" />
        </div>
      </button>
      <div className="catalog-child absolute left-0 w-full justify-center bg-white p-3">
        <div>item catalog</div>
      </div>
    </li>
  );
}
