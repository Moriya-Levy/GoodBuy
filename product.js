cnt = 0

class Product {
  #name
  #id
  #category
  #count
  #price

  constructor(name, category, count, price) {
    this.#name = name
    this.#category = category
    this.#count = count
    this.#id = cnt++
    this.#price = price
  }

  showProduct(categories) {
    var card = document.createElement("card")
    card.className = "card"
    card.id = this.#id
    var h1 = document.createElement("h1")
    h1.innerText = this.#name
    card.appendChild(h1)
    var text = document.createElement("text")
    text.innerText = "category: " + categories[this.#category]
    card.appendChild(text)
    var br = document.createElement("br")
    card.appendChild(br)
    text = document.createElement("text")
    text.innerText = this.#price + "$"
    card.appendChild(text)
    br = document.createElement("br")
    card.appendChild(br)
    text = document.createElement("text")
    text.innerText = "count: " + this.#count
    card.appendChild(text)
    return card
  }

  getName() {
    return this.#name
  }

  getCategory() {
    return this.#category
  }

  getCount() {
    return this.#count
  }

  getId() {
    return this.#id
  }
  getPrice() {
    return this.#price
  }

  setName(name) {
    this.#name = name
  }

  setCategory(category) {
    this.#category = category
  }
  setCount(count) {
    this.#count = count
  }
  setPrice(price) {
    this.#price = price
  }
}

