import { notFound } from "next/navigation";

export default function ProductReview({
  params,
}: {
  params: { reviewID: string; productID: string };
}) {
    if(parseInt(params.reviewID)>1000){
         notFound();
    }
  return (
    <h1>
      Product {params.productID} Review {params.reviewID}
    </h1>
  );
}
