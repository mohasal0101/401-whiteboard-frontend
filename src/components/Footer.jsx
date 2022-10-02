import "../App.css";

const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer>{`Copyright © Code Fellows ${year}`}</footer>;
  };
  
  export default Footer;