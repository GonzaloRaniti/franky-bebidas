import './ConfirmModal.css'

const ConfirmModal = ({ isOpen, onClose, onConfirm, title, message, confirmText = "Confirmar", cancelText = "Cancelar" }) => {
  if (!isOpen) return null

  return (
    <div className="confirm-modal-overlay" onClick={onClose}>
      <div className="confirm-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="confirm-modal-header">
          <h3 className="confirm-modal-title">{title}</h3>
          <button onClick={onClose} className="confirm-modal-close">
            ✕
          </button>
        </div>
        
        <div className="confirm-modal-body">
          <p className="confirm-modal-message">{message}</p>
        </div>
        
        <div className="confirm-modal-actions">
          <button 
            onClick={onClose} 
            className="confirm-modal-btn cancel-btn"
          >
            {cancelText}
          </button>
          <button 
            onClick={() => {
              onConfirm()
              onClose()
            }} 
            className="confirm-modal-btn confirm-btn"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal 