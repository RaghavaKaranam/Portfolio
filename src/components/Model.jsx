import "../css/model.css";

const Model = ({ isOpen, onClose, file }) => {
  if (!isOpen || !file) return null;

  return (
    <div className="cert-overlay" onClick={onClose}>
      <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <img src={file} alt="Certificate" className="cert-image" />
      </div>
    </div>
  );
};

export default Model;
