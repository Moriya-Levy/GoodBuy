class Shop {

    #shopManager
    #arrProduct
    #categories

    constructor(shopManager) {
        this.#shopManager = shopManager
        this.#categories = ["שונות", "jjjjj", "aaaaa"];
        this.#arrProduct = [];
    }

    show() {
        var content = document.getElementById("content");
        content.innerHTML = null;
        for (var x = 0; x < this.#arrProduct.length; x++) {
            content.appendChild(this.#arrProduct[x].showProduct(this.#categories))
        }
    }

    selctBy() {
        var content = document.getElementById("content");
        content.innerHTML = null;

        var form = document.createElement("form");
        form.onsubmit = e => {
            e.preventDefault();
            productShop.select();
        };

        var div = document.createElement("div");
        div.className = "select"
        this.addBrLabelBr("שם המוצר", div)
        var name = document.createElement("input");
        name.id = "nameProduct";
        div.appendChild(name)
        form.appendChild(div);

        div = document.createElement("div");
        div.className = "select"
        this.addBrLabelBr("קטגוריה", div)
        var category = document.createElement("select");
        category.id = "categoryProduct";
        this.addOptionToSelect("הכל", category)
        for (var i = 0; i < this.#categories.length; i++) {
            this.addOptionToSelect(this.#categories[i], category)
        }
        div.appendChild(category)
        form.appendChild(div);


        div = document.createElement("div");
        div.className = "select"
        this.addBrLabelBr("עד מחיר", div)
        var price = document.createElement("input")
        price.type = "Number"
        price.id = "priceProduct";
        div.appendChild(price)
        form.appendChild(div);

        div = document.createElement("div");
        div.className = "select"
        this.addBrLabelBr("כמות", div)
        var count = document.createElement("select");
        count.id = "countProduct";
        this.addOptionToSelect("הכל", count);
        this.addOptionToSelect("קרוב לאזול מהמלאי", count);
        this.addOptionToSelect("אזל מהמלאי", count);
        div.appendChild(count)
        form.appendChild(div);

        //כפתור שליחה לסינון
        var submit = document.createElement("input")
        submit.type = "submit"
        submit.value = "סנן"
        form.appendChild(submit)

        content.appendChild(form);

        div = document.createElement("div")
        div.id = "all";
        for (var x = 0; x < this.#arrProduct.length; x++) {
            div.appendChild(this.#arrProduct[x].showProduct(this.#categories))
        }
        content.appendChild(div);

    }

    addOptionToSelect(text, select) {
        var option = document.createElement("option");
        option.text = text;
        select.appendChild(option);
    }

    addBrLabelBr(text, div) {
        var br = document.createElement("br");
        div.appendChild(br);
        var label = document.createElement("label");
        label.innerText = text;
        div.appendChild(label);
        br = document.createElement("br");
        div.appendChild(br);
    }

    addProductVs() {
        var content = document.getElementById("content");
        content.innerHTML = null;
        var form = document.createElement("form");
        form.onsubmit = e => productShop.addProduct(e);

        this.addBrLabelBr("שם המוצר", form)
        var name = document.createElement("input");
        name.id = "nameProduct";
        form.appendChild(name)


        this.addBrLabelBr("קטגוריה", form)
        var category = document.createElement("select");
        category.id = "categoryProduct";
        for (var i = 0; i < this.#categories.length; i++) {
            this.addOptionToSelect(this.#categories[i], category)
        }
        form.appendChild(category)

        this.addBrLabelBr("כמות", form)
        var count = document.createElement("input")
        count.type = "Number"
        count.id = "countProduct";
        form.appendChild(count)

        this.addBrLabelBr("מחיר", form)
        var price = document.createElement("input")
        price.type = "Number"
        price.id = "priceProduct";
        form.appendChild(price)


        var br = document.createElement("br");
        form.appendChild(br);

        var submit = document.createElement("input")
        submit.type = "submit"
        form.appendChild(submit)
        content.appendChild(form);
    }

    addProduct(e) {
        let name = document.getElementById("nameProduct").value;
        let category = document.getElementById("categoryProduct").selectedIndex;
        let count = document.getElementById("countProduct").value;
        let price = document.getElementById("priceProduct").value;
        if (!name || !count || !price) {
            e.preventDefault();
            console.log("יש למלא את כל הפרטים");
        }

        else {
            this.#arrProduct.push(new Product(name, category, count, price));
            this.show();
        }

    }

    edit() {
        
    }


    select() {
        let products = this.#arrProduct;
        let name = document.getElementById("nameProduct").value;
        let category = document.getElementById("categoryProduct").selectedIndex;
        let count = document.getElementById("countProduct").selectedIndex;
        let price = document.getElementById("priceProduct").value;

        if (name)
            products = products.filter(p => p.getName().includes(name))

        if (category)
            products = products.filter(p => p.getCategory() == category - 1)

        if (count) {
            if (count == 1)
                products = products.filter(p => p.getCount() < 5)
            else
                products = products.filter(p => p.getCount() == 0)
        }

        if (price)
            products = products.filter(p => p.getPrice() <= price)

        var all = document.getElementById("all");
        all.innerHTML = null;
        for (var x = 0; x < products.length; x++) {
            all.appendChild(products[x].showProduct(this.#categories))
        }
    }
}

