class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Код ошибки: ${res.status}`);
    }
  }

  getInitialCards() {
    return fetch(`${this._url}cards`, {
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  addNewCard({ name, link }) {
    return fetch(`${this._url}cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({ name, link }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  deleteCard(cardId) {
    return fetch(`${this._url}cards/${cardId}`, {
      headers: this._headers,
      method: 'DELETE',
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  getUserInfo() {
    return fetch(`${this._url}users/me`, {
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  setUserInfo(data) {
    return fetch(`${this._url}users/me`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  setAvatar(avatarLink) {
    return fetch(`${this._url}users/me/avatar`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({ avatar: avatarLink.avatar }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  changeLikeCardStatus(cardId, isLiked) {
    if (isLiked) {
      return fetch(`${this._url}cards/${cardId}/likes`, {
        headers: this._headers,
        method: 'PUT',
      }).then((res) => {
        return this._checkResponse(res);
      });
    } else {
      return fetch(`${this._url}cards/${cardId}/likes`, {
        headers: this._headers,
        method: 'DELETE',
      }).then((res) => {
        return this._checkResponse(res);
      });
    }
  }
}

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-65/',
  headers: {
    authorization: 'bd701aac-610c-4e72-ab07-3a706d53fd4f',
    'Content-Type': 'application/json',
  },
});

export default api;
