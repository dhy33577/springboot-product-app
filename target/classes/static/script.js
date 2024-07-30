document.addEventListener('DOMContentLoaded', function() {
    fetchProducts();
});

function fetchProducts() {
    fetch('/api/products')
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById('product-list');
            productList.innerHTML = '';
            products.forEach(product => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${product.id}</td>
                    <td>${product.category}</td>
                    <td>${product.model}</td>
                    <td>${product.price}</td>
                    <td>${product.stock}</td>
                    <td>${product.description}</td>
                    <td>
                        <button class="action-button edit-button" onclick="editProduct(${product.id})">编辑</button>
                        <button class="action-button delete-button" onclick="deleteProduct(${product.id})">删除</button>
                    </td>
                `;
                productList.appendChild(row);
            });
        });
}

function addProduct() {
    const category = document.getElementById('category').value;
    const model = document.getElementById('model').value;
    const price = document.getElementById('price').value;
    const stock = document.getElementById('stock').value;
    const description = document.getElementById('description').value;

    const product = { category, model, price, stock, description };

    fetch('/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
        .then(response => response.json())
        .then(newProduct => {
            fetchProducts();
        });
}

function editProduct(id) {
    // Get the product details
    fetch(`/api/products/${id}`)
        .then(response => response.json())
        .then(product => {
            document.getElementById('category').value = product.category;
            document.getElementById('model').value = product.model;
            document.getElementById('price').value = product.price;
            document.getElementById('stock').value = product.stock;
            document.getElementById('description').value = product.description;

            // Change the add button to save button
            const addButton = document.querySelector('button[onclick="addProduct()"]');
            addButton.textContent = '保存修改';
            addButton.setAttribute('onclick', `updateProduct(${id})`);
        });
}

function updateProduct(id) {
    const category = document.getElementById('category').value;
    const model = document.getElementById('model').value;
    const price = document.getElementById('price').value;
    const stock = document.getElementById('stock').value;
    const description = document.getElementById('description').value;

    const product = { category, model, price, stock, description };

    fetch(`/api/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
        .then(response => response.json())
        .then(updatedProduct => {
            fetchProducts();
            resetForm();
        });
}

function deleteProduct(id) {
    fetch(`/api/products/${id}`, {
        method: 'DELETE'
    })
        .then(() => {
            fetchProducts();
        });
}

function resetForm() {
    document.getElementById('category').value = '';
    document.getElementById('model').value = '';
    document.getElementById('price').value = '';
    document.getElementById('stock').value = '';
    document.getElementById('description').value = '';

    const addButton = document.querySelector('button[onclick^="updateProduct"]');
    if (addButton) {
        addButton.textContent = '添加商品';
        addButton.setAttribute('onclick', 'addProduct()');
    }
}
