import cartIcon from "/cart_icon.svg";
function CartWidget() {
  return (
    <div className="flex flex-col justify-evenly">
      <img src={cartIcon} alt="" className="w-7" />
      <span className="flex justify-center">10</span>
    </div>
  );
}
export default CartWidget;
