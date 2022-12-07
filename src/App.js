import "./App.css";
import Card from "./Card";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
function App() {
  const perpage = 5;
  const baseUrl = "http://localhost:5000/all/listingproduct";

  const [loading, setLoading] = useState(false);


  const [productData, setProductData] = useState([]);
  const [total,setTotal]=useState(953);
 

  const getAllProduct = () => {
    let pageno = Math.ceil(productData.length / perpage) + 1;
    const queryParameter = "?page=" + pageno + "&limit=" + perpage;
    const finalUrl = baseUrl + queryParameter;
    console.log(finalUrl);

    axios
      .get(finalUrl)
      .then((res) => {
        console.log(res.data.resData);
        const newData = res?.data?.resData;
        const mergeData = [...productData, ...newData];
        setProductData(mergeData);
        console.log(mergeData);
      })
      .catch((err) => console.log(err));
  };

  // const fetchApi =  async (currentpage, perpage) => {
  //   try {
  //     const res=await axios.get(`http://localhost:5000/all/listingproduct?page=${currentpage}&limit=${perpage}`,{

  //     }
  //       )
  //       const resData = res?.data;
  //      setProductData(resData);
  //     setLoading(false);
  //     // const resData = res.data;
  //     console.log(resData)
  //     // if (resData.status === "success") {
  //     //   console.log(resData)
  //     //   setProductData(resData.data)
  //     //   console.log(productData);

  //     // }
  //   } catch (error) {}
  // };

  useEffect(() => {
    setLoading(true);
    getAllProduct();
    // fetchApi(currentpage, perpage);
    // setCurrentPage(currentpage+1)
  }, []);

  const fetchMoreData = () => {
    getAllProduct();
  };

  return (
    <div className="App mx-[10%]">
      <InfiniteScroll
        dataLength={productData.length}
        next={fetchMoreData}
        hasMore={productData.length<total}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className=" container grid grid-cols-12  gap-4">
          {productData &&
            productData?.map((item, i) => (
              <div className=" col-span-3 " key={i}>
                <Card data={item} />
              </div>
            ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default App;
