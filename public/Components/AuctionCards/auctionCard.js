export class AuctionCard extends HTMLElement {
  constructor() {
    super();
    this.nfts = [];
  }
  connectedCallback() {
    this.filterButtons = document.querySelectorAll('.filter-button');
    this.getData()
  }
  async getData() {
    try {
      const response = await fetch('https://magic-eden-nfts-default-rtdb.firebaseio.com/products.json');
      const data = await response.json();
      this.nfts = Object.values(data);
      this.renderCards(this.nfts);
      console.log(this.nfts);
    } catch (error) {
      console.error(error);
    }

    this.filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        this.filterButtons.forEach((button) => button.classList.remove('active'));
        button.classList.add('active');
        const selectedCategory = button.getAttribute('data-category');
        this.filterProducts(selectedCategory);
      });
    });
  }


  renderCards(products) {
    console.log('rendering');
    // Set to default the html content to empty, then render everything up
    this.innerHTML = `<style>
    @import url('auctionCard.css');
    @import url('dropdown.css');
  </style>`;
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('auction-container');
    this.appendChild(cardContainer);
    products.forEach(nft => {
      const card = document.createElement('div');
      card.classList.add('card');

      const nftImage = document.createElement('img');
      nftImage.classList.add('card__nftImage');
      nftImage.src = nft.url;

      const nftName = document.createElement('h1');
      nftName.classList.add('card__nftName');
      nftName.textContent = nft.name;

      const collectionName = document.createElement('h2');
      collectionName.classList.add('card__collectionName');
      collectionName.textContent = nft.collection;

      const priceElement = document.createElement('p');
      priceElement.classList.add('card__price');
      priceElement.textContent = `${nft.price} ${nft.cryptocurrency}`;

      card.appendChild(nftImage);
      card.appendChild(nftName);
      card.appendChild(collectionName);
      card.appendChild(priceElement);
      cardContainer.appendChild(card);
      
    });
  }
  
  filterByCryptocurrency(crypto) {
    return this.nfts.filter(n => n.cryptocurrency === crypto);
  }
  
  filterProducts(category) {
    const nfts = this.nfts
    console.log(category);
    console.log(nfts)
    switch (category) {
      case 'sol':
        this.renderCards(this.filterByCryptocurrency('SOL'));
        break;
      case 'eth':
        this.renderCards(this.filterByCryptocurrency('ETH'));
        break;
      case 'btc':
        this.renderCards(this.filterByCryptocurrency('BTC'));
        break;
      default:
        this.renderCards(nfts)
        break;
    }
  }
}

/*
 case 'price':
        this.renderCards(nfts.sort((a, b) => b.price - a.price));
        break;
        */
customElements.define('auction-card', AuctionCard);
export default AuctionCard;