class HorizontalCard extends HTMLElement {
  connectedCallback() {
    this.getData();
  }

  async getData() {
    try {
      const response = await fetch('https://nftproducts.free.beeceptor.com/nfts');
      const data = await response.json();
      this.renderCards(data.products);
    } catch (error) {
      console.error(error);
    }
  }
  
  /*
  <div class="s-finished-auctions">
  <div class="nft-img s"></div>
      <img src="https://images.unsplash.com/photo-1645731504636-72725e46b26b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5mdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60" alt="finished-auction-img" class="f-auction">
      <h1 class="nft-name">UNHCR hand</h1>
      <p class="description">Okay beards</p>
      <div class="ended">3.00 SOL ENDED</div>
</div>*/

  // función para crear otra versión de la tarjeta
  createHorizontalCard(imageUrl, name, description, price, cryptocurrency) {
    // creo el elemento card en html
    const card = document.createElement('div');
    card.classList.add('card-horizontal');
    // constante para la imagen
    const image = document.createElement('img');
    image.classList.add('card__nftImage')
    image.src = imageUrl;

    // creo el título del producto por el nombre del nft
    const nameEl = document.createElement('h1');
    nameEl.classList.add('card__nftName')
    nameEl.textContent = name;

    // descripción del producto
    const descriptionEl = document.createElement('p');
    descriptionEl.classList.add('card__description')
    descriptionEl.textContent = description;

    // creando el contenedor del precio
    const priceContainer = document.createElement('div');
    priceContainer.classList.add('card__price-container');

    // creo el elemento de precio
    const priceEl = document.createElement('p');
    priceEl.classList.add('card__price')
    priceEl.textContent = `Ended: ${price} ${cryptocurrency}`;

    priceContainer.appendChild(priceEl);

    card.appendChild(image);
    card.appendChild(nameEl);
    card.appendChild(descriptionEl);
    card.appendChild(priceContainer);

    return card;
  }
}

customElements.define('card-horizontal', HorizontalCard);
export default HorizontalCard;