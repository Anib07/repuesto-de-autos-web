
    // Tomamos los elementos
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const productsContainer = document.querySelector('.products-container');
    const productCards = Array.from(document.querySelectorAll('.product-card'));

    // Función para filtrar productos
    function filterProducts() {
        const selectedCategory = categoryFilter.value;
        const selectedPrice = priceFilter.value;

        productCards.forEach(card => {
            const cardCategory = card.dataset.category;
            const cardPrice = parseFloat(card.dataset.price);

            // Filtrar por categoría
            let show = (selectedCategory === 'all' || cardCategory === selectedCategory);

            card.style.display = show ? 'block' : 'none';
        });

        // Filtrar por precio (solo de los visibles)
        const visibleCards = productCards.filter(card => card.style.display !== 'none');

        visibleCards.sort((a, b) => {
            const priceA = parseFloat(a.dataset.price);
            const priceB = parseFloat(b.dataset.price);
            return priceFilter.value === 'asc' ? priceA - priceB : priceB - priceA;
        });

        // Reordenar en el DOM
        visibleCards.forEach(card => productsContainer.appendChild(card));
    }

    // Eventos de filtro
    categoryFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);

    // Filtrado inicial
    filterProducts();
