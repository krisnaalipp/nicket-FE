function Footer() {
  return (
    <footer
      className="flex-shrink-0 py-4 text-white-50"
      style={{ backgroundColor: "black" }}
    >
      <div className="container text-center">
        <small style={{ color: "white" }}>
          Copyright &copy; {new Date().getFullYear()} Nicket
        </small>
      </div>
    </footer>
  );
}

export default Footer;
