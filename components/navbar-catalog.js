import Link from "next/link";

export default function Catalog({ name }) {
  return (
    <li className="catalog-parent">
      <Link
        href={`/category/${name}`}
        className="flex h-full flex-col justify-center px-4"
      >
        <p className="font-montserrat text-sm font-medium text-white">
          {name.toUpperCase()}
        </p>
        <div className="flex w-full flex-row justify-center">
          <hr className="line" />
        </div>
      </Link>
      <div className="catalog-child absolute left-0 w-full justify-center bg-white p-3">
        <div>item catalog</div>
      </div>
    </li>
  );
}
