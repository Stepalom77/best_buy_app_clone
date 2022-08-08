
export const getUser = async(id) => {
    let url = await fetch(`https://www.palomino-bestbuyclone-proyect.xyz/api/v1/user/${id}`);
    let data = await url.json();
    return data
};

export const getDepartment = async(id) => {
    let url = await fetch(`https://www.palomino-bestbuyclone-proyect.xyz/api/v1/department/${id}`);
    let data = await url.json();
    return data
};

export const getCategory = async(id) => {
    let url = await fetch(`https://www.palomino-bestbuyclone-proyect.xyz/api/v1/category/${id}`);
    let data = await url.json();
    return data
};

export const getSubcategory = async(id) => {
    let url = await fetch(`https://www.palomino-bestbuyclone-proyect.xyz/api/v1/subcategory/${id}`);
    let data = await url.json();
    return data
};

export const getProducts = async() => {
    let url = await fetch('https://www.palomino-bestbuyclone-proyect.xyz/api/v1/product');
    let data = await url.json();
    return data
};

export const getProduct = async(id) => {
    let url = await fetch(`https://www.palomino-bestbuyclone-proyect.xyz/api/v1/product/${id}`);
    let data = url.json();
    return data
};

export const getReview = async(id) => {
    let url = await fetch(`https://www.palomino-bestbuyclone-proyect.xyz/api/v1/review/${id}`);
    let data = await url.json();
    return data
};

export const getReviewStore = async(id) => {
    let url = await fetch(`https://www.palomino-bestbuyclone-proyect.xyz/api/v1/review-store/${id}`);
    let data = await url.json();
    return data
};

export const getStore = async(id) => {
    let url = await fetch(`https://www.palomino-bestbuyclone-proyect.xyz/api/v1/store/${id}`);
    let data = await url.json();
    return data
};

export const getPurchase = async(id) => {
    let url = await fetch(`https://www.palomino-bestbuyclone-proyect.xyz/api/v1/purchase/${id}`);
    let data = await url.json();
    return data
};



