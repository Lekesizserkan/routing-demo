export default function ProductNames({
    params, }
    : {
        params: {
            reviewId: string;
            productsByName: string;

        };
    }

) {
    return <h1>product name <b>{params.productsByName} </b>  reviewId <b> {params?.reviewId}</b></h1>
}