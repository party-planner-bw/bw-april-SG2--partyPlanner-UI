class TabLink {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab;
      this.itemElement = document.querySelector(`.content-holder[data-tab = '${this.data}']`);
      this.tabItem = new TabItem(this.itemElement);
      this.element.addEventListener('click', () => {
        this.select()
      });
    }
  
    select() {
      const links = document.querySelectorAll('.tabs-link');
      links.forEach(link =>{
        link.classList.remove('current-tab')
      });
      this.element.classList.add('current-tab');
      this.tabItem.select();
    }
}

  
class TabItem {
    constructor(element) {
       this.element = element;
    }
  
    select() {
      const items = document.querySelectorAll('.content-holder');
      items.forEach(item =>{
        item.classList.remove('current-item');
      })
      this.element.classList.add('current-item');
    }
}
  
  const links = document.querySelectorAll('.tabs-link').forEach(link => new TabLink(link));