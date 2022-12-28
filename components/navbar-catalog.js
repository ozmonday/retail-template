export default function Catalog({ name }) {
  return (
    <li className="catalog-parent">
      <button className="flex flex-col justify-center h-full px-4">
        <p className="c-white text-sm">{name}</p>
        <div className="flex w-full flex-row justify-center">
          <hr className="line" />
        </div>
      </button>
      <div className="catalog-child absolute left-0 w-screen justify-center bg-white p-3">
        <div>item catalog</div>
      </div>
    </li>
  );
}
