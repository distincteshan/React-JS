/* eslint-disable react/prop-types */
const Footer = ({ items }) => {
  if (!items.length)
    return (
      <footer className="stats">
        <span>Start adding some items to your packing list🚀</span>;
      </footer>
    );

  const itemsLength = items.length;
  const packedCount = items.filter((item) => item.packed).length;
  const packedPercent = Math.round((packedCount / itemsLength) * 100);
  return (
    <footer className="stats">
      {packedPercent != 100 ? (
        <span>
          You have {itemsLength} items in your list, and you have already packed{" "}
          {packedCount} ({packedPercent}%)
        </span>
      ) : (
        <span>You got everything! Ready to Go!!</span>
      )}
    </footer>
  );
};

export default Footer;
