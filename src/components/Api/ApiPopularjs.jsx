export default function ApiIndexBook(Book) {
  return (
    <>
      <button className="book"
      onClick={() => Book.getBooks(Book.id)}>
        <div className="nameBook">{Book.name}</div>
        <div className="authorBook">{Book.author}</div>
        <div className="priceBook">{Book.price}</div>
        <div className="imgBook">
          <img src={Book.image} alt="" />
        </div>
      </button>
    </>
  );
}
