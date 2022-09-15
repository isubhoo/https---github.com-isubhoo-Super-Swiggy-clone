import Header from "./Header"
import "./Item.css"
import Search from "./Search"

const Item = () => {
  return (
    <div container className="item">
      <div className="left">
        <Header/>
        <h1>Unexpected Guests?</h1>
        <h2>Order food from favourite restaurants near you.</h2>
      </div>
      <Search/>
      <div className="cities">
        <h3>POPULAR CITIES IN INDIA</h3>
        <a href="/">Ahmedabad </a>
        <a className="a1" href="/">Bangalore</a>
        <a href="/">Chennai</a>
        <a className="a1" href="/">Delhi</a>
        <a href="/">Gurgaon</a>
        <a className="a1" href="/">Hyderabad</a>
        <a href="/">Kolkata</a>
        <a className="a1" href="/">Mumbai</a>
        <div>
        <a href="/">Pune</a>
        <a className="a1" href="/">&more.</a>
        </div>
      </div>
      <div className="split right">
      </div>
    </div>
  )
}
export default Item