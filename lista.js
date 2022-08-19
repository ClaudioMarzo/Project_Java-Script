async function getContent(){
    try{
        /*Assíncrona */
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        console.log(data)
        return data
    }catch(erro){
        console.error(erro);
    }
}

async function show(){
    // render products 
    const products = await getContent();

    const productsContainer = document.getElementsByClassName('produtos')[0];

    products.forEach(product => {
        const productElement = document.createElement('li');
        
        productElement.innerHTML = `
            <div class="descricao">
               <img class="img" src="${product.image}" alt="${product.title}">
               <p>${product.title}</p>
            </div>
            <div class="preco">
               <p>De R$ ${(product.price * 6).toFixed(2).replace(".",",")}</p>
               <p>Por <strong>R$ ${(product.price * 5.16).toFixed(2).replace(".",",")}</strong></p>
               <p> À vista no PIX com até 5% OFF
               COMPRAR
               R$ ${(5.16 *(product.price - (product.price * 0.05))).toFixed(2).replace(".",",")}
               Em até 10x de R$ ${(5.5 *(product.price/10)).toFixed(2).replace(",",".") } sem juros no cartão
               </p>
            </div>
            <a class="add-carrinho">
               Adicionar no carrinho
               <img src="img/carrinho.png" alt="carrinho de compras">
            </a>
        `;
        productsContainer.appendChild(productElement);
    });
}

show()