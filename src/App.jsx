import './App.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { IoIosSearch } from 'react-icons/io';
import { FaCaretDown } from 'react-icons/fa';

function App() {
  return (
    <>
      <div
        className="top-nav-wrapper"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <div className="top-nav">
          <div>
            <div>Mock</div>
            <div>Mock</div>
            <div>Mock</div>
            <div>Mock</div>
            <div>Mock</div>
          </div>

          <div>
            <div className="phone">Mock</div>
            <div className="text-uppercase usa-wrapper">
              <img
                src="https://www.svgrepo.com/show/25128/united-states-of-america.svg"
                height="20px"
              />
              Mock
              <FaCaretDown size="1.2rem" />
            </div>
          </div>
        </div>
      </div>

      <div className="app">
        <div className="nav-wrapper">
          <nav className="mobile-nav">
            <h1>Foundations</h1>
            <RxHamburgerMenu size="2rem" className="rx-hamburger-menu" />

            <div className="search-for-products-wrapper">
              <div className="search-for-products-textbox-wrapper">
                <input
                  className="search-for-products-textbox"
                  type="text"
                  placeholder="Search for products"
                />
                <IoIosSearch
                  size="1.2rem"
                  style={{ transform: 'rotateY(180deg)' }}
                  color="gray"
                />
              </div>
              <MdOutlineShoppingCart
                size="2rem"
                className="md-shopping-cart"
                style={{ transform: 'rotateY(180deg)' }}
              />
            </div>
          </nav>
        </div>
        <div className="app-inner">
          <div className="img-out-wrapper">
            <div className="img-wrapper">
              <img src="https://www.foundations.com/skin/frontend/foundations/foundations/images/home/public-washrooms.jpg" />
              <div className="text-uppercase">Mock</div>
            </div>
            <div className="img-wrapper">
              <img src="https://www.foundations.com/skin/frontend/foundations/foundations/images/home/child-care-centers.jpg" />
              <div className="text-uppercase">Mock</div>
            </div>

            <div className="img-wrapper">
              <img src="https://www.foundations.com/skin/frontend/foundations/foundations/images/home/hospitality.jpg" />
              <div className="text-uppercase">Mock</div>
            </div>
          </div>
          <div className="changing-stations-wrapper">
            <h2>Changing Stations For A Changing World.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              laborum dicta aspernatur, suscipit voluptatibus et vero voluptatum
              rem a facere quo ducimus sed repudiandae quas nulla dolores
              numquam fuga, omnis deserunt atque. Sunt architecto nesciunt quas
              officia dolores minus nihil non obcaecati earum explicabo
              laudantium soluta autem laboriosam, culpa ab?
            </p>
            <button className="shop-public-restrooms-button">
              Shop Public Washrooms
            </button>
          </div>
          <h2
            style={{ padding: '20px', fontSize: '2.5rem', color: 'lightgray' }}
          >
            Featured Products
          </h2>
        </div>
      </div>
    </>
  );
}

export default App;
