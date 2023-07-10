export default function ApiInfor(Book) {
  return (
    <>
      <button className="inforBook">
        <div className="nameInforBook">{Book.name}</div>
        <div className="imgInforBook">
          <img src={Book.image} alt="" />
        </div>
        <div className="authorInforBook">{Book.author}</div>
        <div className="descriptionBook">{Book.description}</div>
        <div className="priceInforBook">{Book.price}</div>
      </button>
    </>
  );
}
