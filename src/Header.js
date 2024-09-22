import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function Header() {
  return (
    <nav className="header">
      <div className="logo">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKGuO89M7LIEwUmVB4k7w-npEwSnRjb9F2cQ&s"
          alt="Logo"
          height="50"
        />
      </div>
      <div className="list-button">
        <span>Thể loại</span>
        <div className="dropdown-content list-one">
          <div className="dropdown">
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
          </div>
        </div>
      </div>
      <div className="list-button">
        <span>Quốc gia</span>
        <div className="dropdown-content list-two">
          <div className="dropdown">
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
          </div>
        </div>
      </div>
      <div className="list-button">
        <span>Phim lẻ</span>
        <div className="dropdown-content list-three">
          <div className="dropdown">
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
          </div>
        </div>
      </div>
      <div className="list-button">
        <span>Phim bộ</span>
        <div className="dropdown-content list-four">
          <div className="dropdown">
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
          </div>
        </div>
      </div>
      <div className="list-button">
        <span>Chiếu rạp</span>
      </div>
      <div className="list-button">
        <span>Sắp chiếu</span>
      </div>

      <div className="search-container">
        <input
          className="search"
          type="text"
          name="name"
          placeholder="Search"
        />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </nav>
  );
}

export default Header;
