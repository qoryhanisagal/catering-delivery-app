const MenuModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <dialog id="menu_modal" className="modal modal-open" open>
      <div className="modal-box max-w-md">
        {/* Close button */}
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Title */}
        <h3 className="font-bold text-2xl mb-2">{item.title}</h3>

        {/* Image */}
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-56 object-cover rounded"
        />

        {/* Content */}
        <div className="mt-4">
          <p className="text-sm text-gray-600 mb-3">{item.description}</p>
          <p className="text-lg font-semibold text-primary mb-4">
            ${item.price.toFixed(2)}
          </p>

          {/* Tags */}
          {item.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="badge badge-outline text-xs">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
};

export default MenuModal;