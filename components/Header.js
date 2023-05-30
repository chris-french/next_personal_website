// components/Header.js
function Header({ header }) {
  return (
    <div className="mb-4 text-foreground">
      <p className="text-lg">{header.location}</p>
      <p className="text-lg">{header.email}</p>
      <p className="text-lg">{header.phoneNumber}</p>
    </div>
  );
}

export default Header;
