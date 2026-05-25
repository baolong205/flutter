class Tour {
  constructor({ id, image, title, date, days, price, liked = false, saved = false, likes = 0 }) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.date = date;
    this.days = days;
    this.price = price;
    this.liked = liked;
    this.saved = saved;
    this.likes = likes;
  }
}

module.exports = Tour;