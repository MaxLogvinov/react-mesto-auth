import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm ';

function EditAvatarPopup(props) {
  const avatarRef = useRef();

  useEffect(() => {
    avatarRef.current.value = '';
  }, [props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({ avatar: avatarRef.current.value });
  }
  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      textSaveButton="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        className="popup__input popup__input_type_avatar"
        id="avatar"
        name="avatar"
        placeholder="Введите ссылку"
        required
        minLength="2"
        maxLength="200"
        ref={avatarRef}
      />
      <span className="popup__input-error avatar-error popup__input-error_type_avatar"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
