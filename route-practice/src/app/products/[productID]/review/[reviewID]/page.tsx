export default function ProductReview({params}:{
    params:{
        reviewID:string,
        productID:string
    }
}){
    return <h1>Product {params.productID} Review  {params.reviewID}</h1>
}