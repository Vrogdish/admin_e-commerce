import TopComments from "@/components/TopComments";
import TopProducts from "@/components/TopProducts";
import TopSales from "@/components/TopSales";
import TopUsers from "@/components/TopUsers";


export default function Home() {
    return (
      <main>
        <div className=" grid grid-cols-2">
          <TopUsers />
          <TopProducts />
          <TopSales />
          <TopComments />
        </div>
      </main>
    );

}

