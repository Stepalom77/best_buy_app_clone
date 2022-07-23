
const getUser = async() => {
    let url = await fetch(`https://www.palomino-bestbuyclone-proyect.xyz/api/v1/user/${id}`)
    return url
};

const getDepartment = async() => {
    let url = await fetch(`https://www.palomino-bestbuyclone-proyect.xyz/api/v1/department/${id}`)
    return url
};

const getCategory = async() => {
    let url = await fetch(`https://www.palomino-bestbuyclone-proyect.xyz/api/v1/category/${id}`)
    return url
};

const getSubcategory = async() => {
    let url = await fetch(`https://www.palomino-bestbuyclone-proyect.xyz/api/v1/subcategory/${id}`)
    return url
};

const getProducts = async() => {
    let url = await fetch('https://www.palomino-bestbuyclone-proyect.xyz/api/v1/product')
    return url
};

const getProduct = async() => {
    let url = await fetch(`https://www.palomino-bestbuyclone-proyect.xyz/api/v1/product/${id}`)
    return url
};

const getReview = async() => {
    let url = await fetch(`https://www.palomino-bestbuyclone-proyect.xyz/api/v1/review/${id}`)
    return url
};

const getReviewStore = async() => {
    let url = await fetch(`https://www.palomino-bestbuyclone-proyect.xyz/api/v1/review-store/${id}`)
    return url
};

const getStore = async() => {
    let url = await fetch(`https://www.palomino-bestbuyclone-proyect.xyz/api/v1/store/${id}`)
    return url
};

const getPurchase = async() => {
    let url = await fetch(`https://www.palomino-bestbuyclone-proyect.xyz/api/v1/purchase/${id}`)
    return url
};

export {
    getUser, getDepartment, getCategory, getSubcategory, getProducts, 
    getProduct, getReview, getReviewStore, getStore, getPurchase
}

