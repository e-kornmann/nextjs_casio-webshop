import ProductCard from '../components/ProductCard'
import { createClient, Entry } from 'contentful'


const spaceId :string = `${process.env.SPACE_ID}`;
const constDelAt: string = `${process.env.CDA_AT}`;

export async function getStaticProps() {

  const contentfulClient = createClient({
    space: spaceId,
    accessToken: constDelAt,
  });

  const { items } = await contentfulClient.getEntries({
    content_type: 'product'
  });

  return {
    props: {
      products: items,
    },
  }
}

export default function Products({ products }: any) {
  return (
    
    <div className="product-list">
      {products.map((p: any) => (
         <ProductCard key={p.sys.id} product={p} />
      ))}
      <style jsx>{
        `
        .product-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            grid-gap: 0px;
            justify-items: center;
            justify-content: space-evenly;
            justify-items: center;
            align-content: space-evenly;
            align-items: end;
            margin: 0 auto;
            padding: 0 20px;
          }
        `
      }</style>
 </div>
  )
}
