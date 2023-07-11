import clsx from "clsx";

export default function ApiInfor(Book) {
  return (
    <>
      <div className={clsx(
          "fixed text-black w-[28%] h-full flex flex-col top-12 right-0 bottom-0 z-40 bg-gray-200 px-5 "
        )}>
        <div className="nameInforBook">{Book.name}</div>
        <button>x</button>
        <div >
          <img className="imgInforBook" src={Book.image} alt="" />
        </div>
        <div className="authorInforBook">{Book.author}</div>
        <div className="descriptionBook">{Book.description}</div>
        <div className="priceInforBook">{Book.price}</div>
      </div>
    </>
  );
}
