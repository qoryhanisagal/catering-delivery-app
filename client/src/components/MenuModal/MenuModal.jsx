const MenuModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <dialog id="menu_modal" className="modal modal-open" open>
      <div className="modal-box max-w-md">
        <h3 className="font-bold text-xl">{item.title}</h3>
        <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded mt-4" />
        <p className="py-4">{item.description}</p>
        <p className="text-lg font-semibold text-primary">${item.price.toFixed(2)}</p>
        <div className="modal-action">
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </dialog>
  );
};

export default MenuModal;