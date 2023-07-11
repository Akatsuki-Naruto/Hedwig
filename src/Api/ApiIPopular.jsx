import clsx from "clsx";
import { FlexboxGrid } from "rsuite";

export default function ApiIndexBook(Book) {
  return (
    <>
      <button className={clsx("flex bg-white p-0 w-52" )}onClick={() => Book.getBooks(Book.id)}>
        <div className={clsx("imgBook flex w-12 h-20 ")}>
          <img className={clsx("rounded-lg")} src={Book.image} alt="" />
        </div>
        <div className={clsx(" w-3/5")}>
          <div className={clsx(" font-bold text-sm")}>{Book.name}</div>
          <div className={clsx("authorBook text-xs font-normal italic text-gray-600")}>{Book.author}</div>
        </div>
        <div className={clsx("flex h-20 items-end")}>
          <div className={clsx("priceBook flex rounded-lg w-10 font-bold text-white bg-black items-center justify-center")}>{Book.price}</div>
        </div>
      </button>
    </>
  );
}
