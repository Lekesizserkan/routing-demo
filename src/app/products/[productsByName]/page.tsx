export default function ProductNames({
    params, }
    : {
        params: {
            productsByName: string;
        };
    }

) {
    return <h1>products names id {params?.productsByName}</h1>
}