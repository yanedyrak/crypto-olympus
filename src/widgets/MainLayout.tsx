import firstImg from "../shared/1.png";
import secondImg from "../shared/2.png";
const data = [
  { title: "Treasury Balance", value: "$100,027,422" },
  { title: "Number of Holders", value: "66,000+" },
  { title: "Protocol-Owned Liquidity", value: "$28,829,462" },
  { title: "Unique Tokens in Treasury", value: "50+" },
];
export const MainLayout = () => {
  return (
    <div className="px-10 pt-24">
      <h1 className="text-5xl pb-7  ">
        The Future Decentralized Reserve Currency
      </h1>
      <p className="text-xs w-[250px] pb-10">
        Olympus is building OHM, a community-owned, decentralized and
        censorship-resistant reserve currency that is asset-backed, deeply
        liquid and used widely across Web3.
      </p>
      <button className="text-textGray bg-black px-7 py-2 text-xs rounded-3xl mb-44">
        DISCOVER HOW
      </button>
      <div className="bg-[#EFE9E0] rounded-3xl flex justify-between px-[46px] py-[50px]">
        <div className="flex flex-col gap-2">
          <p className="text-3xl">Protocol</p>
          <p className="text-3xl">Stats</p>
        </div>
        <div className="grid grid-cols-2 gap-[136px]">
          {data.map(({ title, value }) => (
            <div key={title}>
              <p className="mb-3">{title}</p>
              <h2 className="text-6xl font-normal">{value}</h2>
            </div>
          ))}
        </div>

        <img
          className="absolute left-0 top-[70%] scale-125"
          src={firstImg}
          alt=""
        />
        <img className=" absolute right-0 top-[86%]" src={secondImg} alt="" />
      </div>
    </div>
  );
};
