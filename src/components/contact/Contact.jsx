import Navbar from "../navbar/Navbar";
import "./contact.scss";

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div className="contact">
        <h1>Contact</h1>
        <form >
        <div className="list">
          <div className="item">
            <h3>Full Name</h3>
            <input placeholder="      Kabi...." type="text" />
          </div>
          <div className="item">
            <h3>Phone</h3>
            <input placeholder=" xxxxxxxx" type="text" />
          </div>
          <div className="item">
            <h3>Email</h3>
            <input type="text" placeholder="     hritik@gmail.com" />
          </div>
          <div className="item">
            <input style={{ height: "200px" }} type="text" />
          </div>
          <button onSubmit={""}>Send</button>
        </div>
        
        </form>
      </div>
    </div>
  );
};

export default Contact;
